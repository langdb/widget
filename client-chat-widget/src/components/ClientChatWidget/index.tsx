// src/components/ClientChatWidget/index.tsx
import React, { useCallback, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import '@langdb/widget/dist/style.css'
import './index.css'; // Import Tailwind CSS
import { FloatingChatWidget } from "@langdb/widget";


interface ChatWidgetProps {
  widgetId: string;
  widgetType?: 'chat_button' | 'chat_screen';
  chatWidth?: number | string;
  chatHeight?: number | string;
}

interface WidgetInfo {
  id: string;
  model_name: string;
  allowed_domains: string[];
  company_id: string;
  params: any;
  created_at: string;
  updated_at: string;
}

const LANGDB_CLOUD_SERVER = process.env.REACT_APP_LANGDB_CLOUD_SERVER; //"https://api.langdb.ai";
const LANGDB_CLOUD_DOMAIN = process.env.REACT_APP_LANGDB_CLOUD_DOMAIN; //"https://app.langdb.ai";
const ui_domain = LANGDB_CLOUD_DOMAIN //"https://app.langdb.ai";



export const ClientChatWidget: React.FC<ChatWidgetProps> = ({ widgetId, widgetType, chatWidth, chatHeight }) => {
  const [initSession, setInitSession] = React.useState(false);
  const [widgetInfo, setWidgetInfo] = React.useState<WidgetInfo>();
  const initSessionFn = useCallback(async () => {
    try {
      if (widgetId) {
        let result = await fetch(`${LANGDB_CLOUD_SERVER}/widgets/init_session/${widgetId}`, {
          method: 'GET',
          credentials: 'include' // Ensure cookies are included
        });
        if (result.ok) {
          setInitSession(true);
          let widgetData = await result.json() as WidgetInfo;
          setWidgetInfo(widgetData);
        }
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }, [widgetId])
  useEffect(() => {
    initSessionFn();
  }, [widgetId]);

  if (!widgetId) {
    return <div>Widget ID not provided</div>
  }
  if (!initSession || !widgetId || !widgetInfo) {
    return <div>Initializing session...</div>
  }
  return <>
    <ChatComponentWrapper chatWidgetProps={{ widgetType: widgetType, chatWidth: chatWidth, chatHeight: chatHeight, widgetId }} widgetInfo={widgetInfo} />
  </>
};

const ChatComponentWrapper = (props: { chatWidgetProps: ChatWidgetProps, widgetInfo: WidgetInfo }) => {
  const { chatWidgetProps, widgetInfo } = props;
  const type = chatWidgetProps.widgetType || 'chat_button';
  const { chatWidth, chatHeight } = chatWidgetProps;
  const width = chatWidth || '100%';
  const height = chatHeight || '100%';
  if (type !== 'chat_button') {
    // return iframe
    return <ChatScreen width={width} height={height} widgetInfo={widgetInfo} />
  }
  return <ChatButton width={width} height={height} widgetInfo={widgetInfo} />
}


const ChatButton = (props: {
  widgetInfo: WidgetInfo;
  width: number | string;
  height: number | string;
}) => {

  return <FloatingChatWidget
    theme={'light'}
    btnClassName={'bottom-8 right-8 z-50'}
    maximizedPanelClassName={`bottom-0 right-0`}
    maximizedPanelStyle={{ width: props.width, height: props.height }}
  // title={<span className="font-bold text-primary-400">{chatInfo.options.model_name}</span>}
  >
    <ChatScreen width={'100%'} height={'100%'} widgetInfo={props.widgetInfo} />
  </FloatingChatWidget>

}


const ChatScreen = (props: {
  widgetInfo: WidgetInfo;
  width: number | string;
  height: number | string;
}) => {
  const { widgetInfo } = props;
  return <iframe src={`${ui_domain}/widgets?widget_id=${widgetInfo.id}&model_name=${widgetInfo.model_name}`} style={{
    width: props.width,
    height: props.height,
    zIndex: 1000,
  }} />
}

// Export a function to render the widget
export function renderChatWidget(elementId: string, widgetId: string, widgetType?: 'chat_button' | 'chat_screen', chatWidth?: number | string, chatHeight?: number | string) {
  const container = document.getElementById(elementId);
  if (container) {
    const root = createRoot(container); // Create a root
    root.render(<ClientChatWidget widgetId={widgetId} widgetType={widgetType} chatWidth={chatWidth} chatHeight={chatHeight} />); // Render the widget
  }
}
