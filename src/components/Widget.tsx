import {
  AiChat,
  ChatAdapter,
  StreamingAdapterObserver,
  ChatItem,
  PersonaOptions,
  AiChatProps,
} from "@nlux/react";
import '../css/langdb/main.css';
// import "@nlux/themes/nova.css";
import "../tailwind.css";

// import '@nlux/themes/unstyled.css';
// import './Widget.css';
import { useState } from "react";
import { FaUser } from "react-icons/fa";
import logo from "./logo.png";

type AdvancedOptions = Omit<AiChatProps, "adapter">;
export interface WidgetProps {
  serverUrl?: string;
  agentName: string;
  agentParams?: object;
  personaOptions?: PersonaOptions;
  messages?: ChatItem[];
  publicId?: string;
  style?: any;
  advancedOptions?: AdvancedOptions;
  getAccessToken?: () => Promise<string>;
}

const DEV_SERVER_URL = "https://api.dev.langdb.ai";
export function Widget(props: WidgetProps) {
  const serverUrl = props.serverUrl || DEV_SERVER_URL;
  const apiUrl = `${serverUrl}/stream`;

  const { agentName, agentParams } = props;
  const [messages, setMessages] = useState(props.messages || []);
  const headers: any = { "Content-Type": "application/json" };
  if (props.publicId) {
    headers["X-PUBLIC-APPLICATION-ID"] = props.publicId;
  }
  const chatAdapter: ChatAdapter = {
    streamText: async (message: string, observer: StreamingAdapterObserver) => {
      const appended = [
        ...messages,
        {
          role: "user",
          message: message,
        } as ChatItem,
      ];
      setMessages(appended);
      if (!props.publicId) {
        const token = await props.getAccessToken?.();
        if (!token) {
          observer.error(new Error("Failed to get the user token"));
          return;
        }
        headers.Authorization = `Bearer ${token}`;
      }
      const latestMessage = appended.filter((m) => m.role === "user").map((m) => m.message).pop();
      let parameters: object = { input: latestMessage}
      if(agentParams && Object.keys(agentParams).length > 0 ){
        let keys = Object.keys(agentParams);
        if(keys.length === 1) {
          parameters = {
            ...agentParams,
            [keys[0]]: latestMessage
          }
        } else {
          parameters = {
            ...agentParams,
            input: latestMessage,
          }
        }
      }
      const response = await fetch(apiUrl, {
        method: "POST",
        body: JSON.stringify({
          agent: agentName,
          parameters,
          messages: appended,
        }),
        headers,
      });

      if (response.status !== 200) {
        observer.error(new Error("Failed to connect to the server"));
        return;
      }

      if (!response.body) {
        return;
      }

      // Read a stream of server-sent events
      // and feed them to the observer as they are being generated
      const reader = response.body.getReader();
      const textDecoder = new TextDecoder();
      let content = "";
      while (true) {
        const { value, done } = await reader.read();
        if (done) {
          break;
        }

        let textDecoded = textDecoder.decode(value);
        content += textDecoded;
        if (textDecoded) {
          observer.next(textDecoded);
        }
      }

      setMessages(prev => [
        ...prev,
        {
          role: "assistant",
          message: content,
        } as ChatItem,
      ])
      observer.complete();
    },
  };
  const advancedOptions = props.advancedOptions || {};
  const conversationOptions = advancedOptions.conversationOptions || {
    layout: "bubbles",
  };
  const displayOptions = advancedOptions.displayOptions || {
    colorScheme: "dark",
  };
  const composerOptions = advancedOptions.composerOptions || {
    placeholder: "How can i help you today ?",
  };
  return (
    <main
      className="flex flex-1 items-center justify-between"
      style={props.style || {}}
    >
      <AiChat
        adapter={chatAdapter}
        initialConversation={props.messages}
        personaOptions={
          props.personaOptions || {
            assistant: {
              name: "LangDB",
              tagline: "Build and Publish AI Agents using SQL",
              avatar: logo,
            },
            user: {
              name: "User",
              avatar: <FaUser />,
            },
          }
        }
        conversationOptions={conversationOptions}
        displayOptions={displayOptions}
        composerOptions={composerOptions}
        {...advancedOptions}
      />
    </main>
  );
}
