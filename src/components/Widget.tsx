import "../tailwind.css";
import './Widget.css';
import { AdapterProps, DEV_SERVER_URL, getHeaders } from "./adapter";
import React, { useCallback } from "react";
import { ChatComponent } from "./ChatComponent";
import { ChatMessage, MessageWithId } from "../dto/ChatMessage";
import { PersonaOptions } from "../dto/PersonaOptions";
import { ConversationStarter } from "../dto/ConversationStarter";
import axios from "axios";
import { useMount, useRequest, useUpdateEffect } from "ahooks";
import { CacheConfig, InititalPrompt, MCPTools } from "../dto/ParamInput";
// Types
export interface WidgetProps extends AdapterProps {
  personaOptions?: PersonaOptions;
  messages?: ChatMessage[];
  initialPrompts?: InititalPrompt[];
  variables?: Record<string, any>
  mcpTools?: MCPTools[],
  cacheConfig?: CacheConfig,
  style?: React.CSSProperties;
  className?: string;
  controls?: {
    enableFiles?: boolean;
  };
  theme?: "light" | "dark";
  starters?: ConversationStarter[]
  threadId?: string;
  projectId?: string;
  getAccessToken?: () => Promise<string>;
  apiKey?: string;
  publicId?: string;
  serverUrl?: string;
  hideChatInput?: boolean,
  autoRefreshThread?: boolean,
  renderLoading?: () => React.ReactNode,
  searchToolEnabled?: boolean,
  toggleSearchTool?: (enabled: boolean) => void,
  renderStarter?: () => React.ReactNode,
  renderProviderAvatar?: (props: {
    modelName: string;
    messageType: string;
  }) => React.ReactNode,
  widgetId?: string,
  guards_slug?: string[],
  dynamicBody?: any
}


const getMessagesFromThread = async (props: {
  threadId: string;
  projectId: string;
  getAccessToken?: () => Promise<string>;
  publicId?: string;
  serverUrl: string;
  apiKey?: string
}) => {
  try {
    const { threadId, projectId, apiKey, getAccessToken, publicId, serverUrl } = props;
    const headers = await getHeaders({
      projectId,
      publicId,
      getAccessToken,
      threadId,
      apiKey
    });
    const res = await axios.get(`${serverUrl}/threads/${threadId}/messages`, {
      headers,
    });
    let responseData = res.data as MessageWithId[];
    // convert to ChatMessage
    const messages: ChatMessage[] = [];
    for (const message of responseData) {
      messages.push({
        id: message.id,
        message: message.content,
        type: message.type,
        content_type: message.content_type,
        content_array: message.content_array,
        threadId: message.thread_id,
        tool_call_id: message.tool_call_id,
        tool_calls: message.tool_calls,
        model_name: message.model_name,
        user_id: message.user_id,
        created_at: message.created_at
      });
    }
    return messages;

  } catch (error) {
    console.error("Error fetching messages:", error);
    return [];
  }
}

export const Widget: React.FC<WidgetProps> = React.memo((props) => {
  const themeClass = props.theme === "dark" ? "dark-theme" : "light-theme";
  const { threadId, projectId, getAccessToken, publicId, apiKey, messages, autoRefreshThread, renderLoading } = props;
  const { run: triggerGetMessages, loading: messagesLoading, data } = useRequest(getMessagesFromThread, {
    manual: true
  });
  const refreshMessages = useCallback(() => {
    if (threadId && projectId && (getAccessToken || publicId || apiKey) && (messages === undefined || messages.length === 0)) {
      triggerGetMessages({
        threadId,
        projectId,
        getAccessToken,
        publicId,
        serverUrl: props.serverUrl || DEV_SERVER_URL,
        apiKey: props.apiKey
      });
    }
  }, [threadId, projectId, publicId, apiKey, getAccessToken, triggerGetMessages, messages]);

  useMount(() => {
    refreshMessages();
  });
  useUpdateEffect(() => {
    refreshMessages();
  }, [projectId]);


  useUpdateEffect(() => {
    if (autoRefreshThread) {
      refreshMessages();
    }
  }, [threadId, autoRefreshThread]);
  if (messagesLoading && (!messages || messages.length < 1)) {
    return <div className={`${themeClass} dark-theme w-full h-full justify-center items-center flex`}>
      {renderLoading ? renderLoading() : <span className="animate-pulse"> Loading...</span>}
    </div>;
  }

  return (
    <div className={`${themeClass} w-full h-full`}>
      <ChatComponent {...props} messages={messages || data || []} />
    </div>
  );
});
