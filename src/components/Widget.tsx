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
  token?: string;
  messages?: ChatItem[];
  publicId?: string;
  style?: any;
  advancedOptions?: AdvancedOptions;
}

const DEV_SERVER_URL = "https://api.dev.langdb.ai";
export default function Widget(props: WidgetProps) {
  const serverUrl = props.serverUrl || DEV_SERVER_URL;
  const apiUrl = `${serverUrl}/stream`;

  const [messages, setMessages] = useState(props.messages || []);
  const headers: any = { "Content-Type": "application/json" };
  if (props.publicId) {
    headers["X-PUBLIC-APPLICATION-ID"] = props.publicId;
  } else if (props.token) {
    headers["Authorization"] = props.token;
  } else {
    throw new Error("Either `publicId` or `token` are to be provided");
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
      const response = await fetch(apiUrl, {
        method: "POST",
        body: JSON.stringify({
          agent: props.agentName,
          parameters: props.agentParams || { input: "hi" },
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

        content = textDecoder.decode(value);
        if (content) {
          observer.next(content);
        }
      }
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
