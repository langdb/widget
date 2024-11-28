import "../tailwind.css";
import './Widget.css';
import { AdapterProps, DEV_SERVER_URL, getHeaders } from "./adapter";
import React, { useEffect } from "react";
import { ChatComponent } from "./ChatComponent";
import { ChatMessage, MessageContentPart, MessageContentType, MessageType } from "../dto/ChatMessage";
import { PersonaOptions } from "../dto/PersonaOptions";
import { ConversationStarter } from "../dto/ConversationStarter";
import axios from "axios";
import { useRequest } from "ahooks";
// Types

export interface WidgetProps extends AdapterProps {
  personaOptions?: PersonaOptions;
  messages?: ChatMessage[];
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
  publicId?: string;
  serverUrl?: string;
}

interface MessageWithId {
  id: string;
  created_at: string;
  model_name: string;
  content: string;
  content_type: MessageContentType;
  content_array: MessageContentPart[];
  type: MessageType;
  user_id: string;
  thread_id: string;
}
const getMessagesFromThread = async (props: {
  threadId: string;
  projectId: string;
  getAccessToken?: () => Promise<string>;
  publicId?: string;
  serverUrl: string;
}) => {
  try {
    const { threadId, projectId, getAccessToken, publicId, serverUrl } = props;
    const headers = await getHeaders({
      projectId,
      publicId,
      getAccessToken,
      threadId
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
  const { threadId, projectId, getAccessToken, publicId, messages } = props;
  const { run: triggerGetMessages, loading: messagesLoading, data } = useRequest(getMessagesFromThread, {
    manual: true
  });
  useEffect(() => {
    if (threadId && projectId && (getAccessToken || publicId) && (!messages || messages.length === 0)) {
      triggerGetMessages({
        threadId,
        projectId,
        getAccessToken,
        publicId,
        serverUrl: props.serverUrl || DEV_SERVER_URL
      });
    }
  }, [threadId, projectId, getAccessToken, publicId, messages, props.serverUrl]);
  if (messagesLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={`${themeClass} w-full h-full`}>
      <ChatComponent {...props} messages={messages || data || []} />
    </div>
  );
});