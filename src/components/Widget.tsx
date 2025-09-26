/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import "../tailwind.css";
import "./Widget.css";
import { AdapterProps, DEV_SERVER_URL, getHeaders } from "./adapter";
import React, { useCallback, useState } from "react";
import { ChatComponent } from "./ChatComponent";
import { ChatMessage, MessageWithId } from "../dto/ChatMessage";
import { PersonaOptions } from "../dto/PersonaOptions";
import { ConversationStarter } from "../dto/ConversationStarter";
import axios from "axios";
import { useMount, useRequest, useUpdateEffect } from "ahooks";
import { CacheConfig, InititalPrompt, MCPTools } from "../dto/ParamInput";
import { emitter } from "./EventEmiter";
// Types
export interface WidgetProps extends AdapterProps {
  personaOptions?: PersonaOptions;
  messages?: ChatMessage[];
  initialPrompts?: InititalPrompt[];
  variables?: Record<string, any>;
  mcpTools?: MCPTools[];
  cacheConfig?: CacheConfig;
  style?: React.CSSProperties;
  className?: string;
  controls?: {
    enableFiles?: boolean;
  };
  theme?: "light" | "dark";
  starters?: ConversationStarter[];
  threadId?: string;
  projectId?: string;
  getAccessToken?: () => Promise<string>;
  apiKey?: string;
  publicId?: string;
  serverUrl?: string;
  hideChatInput?: boolean;
  autoRefreshThread?: boolean;
  renderLoading?: () => React.ReactNode;
  searchToolEnabled?: boolean;
  toggleSearchTool?: (enabled: boolean) => void;
  renderStarter?: () => React.ReactNode;
  renderProviderAvatar?: (props: {
    modelName: string;
    messageType: string;
  }) => React.ReactNode;
  widgetId?: string;
  maxRetries?: number;
  fallback?: any[];
  lastAiMessageClass?: string;
  guards_slug?: string[];
  // when using dynamic body, other params will be ignored
  dynamicBody?: any;
}

const getMessagesFromThread = async (props: {
  threadId: string;
  projectId: string;
  getAccessToken?: () => Promise<string>;
  publicId?: string;
  serverUrl: string;
  apiKey?: string;
}) => {
  try {
    const { threadId, projectId, apiKey, getAccessToken, publicId, serverUrl } =
      props;
    const headers = await getHeaders({
      projectId,
      publicId,
      getAccessToken,
      threadId,
      apiKey,
    });
    const res = await axios.get(`${serverUrl}/threads/${threadId}/messages`, {
      headers,
    });
    const responseData = res.data as MessageWithId[];
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
        created_at: message.created_at,
      });
    }
    return messages;
  } catch (error) {
    console.error("Error fetching messages:", error);
    return [];
  }
};

export const Widget: React.FC<WidgetProps> = React.memo((props) => {
  const themeClass = props.theme === "dark" ? "dark-theme" : "light-theme";
  const {
    threadId,
    projectId,
    getAccessToken,
    publicId,
    apiKey,
    messages,
    autoRefreshThread,
    renderLoading,
  } = props;

  const [messagesData, setMessagesData] = useState<ChatMessage[]>(
    messages || [],
  );
  const [newMessageIds, setNewMessageIds] = useState<Set<string>>(new Set());
  const { run: triggerGetMessages, loading: messagesLoading } = useRequest(
    getMessagesFromThread,
    {
      manual: true,
      onSuccess: (data) => {
        setMessagesData(data);
      },
    },
  );

  const refreshMessages = useCallback(() => {
    if (
      threadId &&
      projectId &&
      (getAccessToken || publicId || apiKey) &&
      (messages === undefined || messages.length === 0)
    ) {
      return triggerGetMessages({
        threadId,
        projectId,
        getAccessToken,
        publicId,
        serverUrl: props.serverUrl || DEV_SERVER_URL,
        apiKey: props.apiKey,
      });
    }
  }, [
    threadId,
    projectId,
    getAccessToken,
    publicId,
    apiKey,
    messages,
    triggerGetMessages,
    props.serverUrl,
    props.apiKey,
  ]);

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

  useUpdateEffect(() => {
    const handlerRefreshMessage = (props: { threadId: string }) => {
      if (props.threadId === threadId) {
        refreshMessages();
      }
    };
    emitter.on("langdb_refreshMessage", handlerRefreshMessage);
    return () => {
      emitter.off("langdb_refreshMessage", handlerRefreshMessage);
    };
  }, [threadId, refreshMessages]);

  useUpdateEffect(() => {
    const handlerNewMessageAdded = async (props: {
      threadId?: string;
      messageId?: string;
    }) => {
      if (props.threadId && props.messageId && props.threadId === threadId) {
        // Check if message already exists
        const existingMessage = messagesData.find(
          (msg: ChatMessage) => msg.id === props.messageId,
        );

        if (existingMessage) {
          // Message already exists, just add animation
          setNewMessageIds((prev) => new Set(prev).add(props.messageId!));
          setTimeout(() => {
            setNewMessageIds((prev) => {
              const updated = new Set(prev);
              updated.delete(props.messageId!);
              return updated;
            });
          }, 2000);
        } else {
          // Message doesn't exist, fetch fresh messages
          refreshMessages();
          // Add animation for the new message
          setNewMessageIds((prev) => new Set(prev).add(props.messageId!));
          setTimeout(() => {
            setNewMessageIds((prev) => {
              const updated = new Set(prev);
              updated.delete(props.messageId!);
              return updated;
            });
          }, 2000);
        }
      }
    };
    emitter.on("langdb_newMessageAdded", handlerNewMessageAdded);
    return () => {
      emitter.off("langdb_newMessageAdded", handlerNewMessageAdded);
    };
  }, [threadId, refreshMessages, messagesData]);

  if (messagesLoading && (!messagesData || messagesData.length < 1)) {
    return (
      <div
        className={`${themeClass} dark-theme w-full h-full justify-center items-center flex`}
      >
        {renderLoading ? (
          renderLoading()
        ) : (
          <span className="animate-pulse"> Loading...</span>
        )}
      </div>
    );
  }

  return (
    <div className={`${themeClass} w-full h-full`}>
      <ChatComponent
        {...props}
        messages={messagesData}
        newMessageIds={newMessageIds}
      />
    </div>
  );
});
