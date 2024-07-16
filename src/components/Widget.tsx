import {
  AiChat,
  ChatAdapter,
  StreamingAdapterObserver,
  ChatItem,
  PersonaOptions,
  AiChatProps,
} from "@nlux/react";
import "../css/langdb/main.css";
import '@nlux/themes/nova.css';
import "../tailwind.css";


// import './Widget.css';
import { useState } from "react";
import { FaUser } from "react-icons/fa";

type AdvancedOptions = Omit<AiChatProps, "adapter">;

type ResponseCallbackOptions = {
  response?: Response
  error?: Error
};
export interface WidgetProps {
  serverUrl?: string;
  modelName: string;
  agentParams?: object;
  personaOptions?: PersonaOptions;
  messages?: ChatItem[];
  publicId?: string;
  style?: any;
  advancedOptions?: AdvancedOptions;
  responseCallback?: (_opts: ResponseCallbackOptions) => {};
  getAccessToken?: () => Promise<string>;
}

const DEV_SERVER_URL = "https://api.dev.langdb.ai";
export function Widget(props: WidgetProps) {
  const serverUrl = props.serverUrl || DEV_SERVER_URL;
  const apiUrl = `${serverUrl}/stream`;

  const { modelName, agentParams } = props;
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
      const latestMessage = appended
        .filter((m) => m.role === "user")
        .map((m) => m.message)
        .pop();
      let parameters: object = { input: latestMessage };
      if (agentParams && Object.keys(agentParams).length > 0) {
        let keys = Object.keys(agentParams);
        if (keys.length === 1) {
          parameters = {
            ...agentParams,
            [keys[0]]: latestMessage,
          };
        } else {
          parameters = {
            ...agentParams,
            input: latestMessage,
          };
        }
      }

      try {
        const response = await fetch(apiUrl, {
          method: "POST",
          body: JSON.stringify({
            model_name: modelName,
            parameters,
            messages: appended,
          }),
          headers,
        });

        if (props.responseCallback) {
          props.responseCallback({ response });
        }

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

        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            message: content,
          } as ChatItem,
        ]);
      } catch (e: any) {
        const error = new Error(e.toString());
        if (props.responseCallback) {
          props.responseCallback({ error });
        }
        observer.error(error);
      }

      observer.complete();
    },
  };
  const advancedOptions = props.advancedOptions || {};
  const conversationOptions = advancedOptions.conversationOptions || {
    layout: "bubbles",
  };
  const displayOptions = Object.assign(
    {},
    { colorScheme: "light", themeId: "langdb" },
    advancedOptions.displayOptions,
  );
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
              tagline: `
              Easily build and deploy AI agents with SQL.
              Customize with our React widget on`,
              avatar: <Avatar />,
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

const Avatar = () => {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="100" cy="100" r="99.5" stroke="#B0488C" />
      <g clipPath="url(#clip0_31_12)">
        <path
          d="M87.6691 75.9199C88.563 75.9163 89.457 75.9128 90.378 75.9091C92.2639 75.9065 94.1498 75.9134 96.0357 75.9291C98.9224 75.9491 101.807 75.9292 104.694 75.9053C106.528 75.9078 108.362 75.9126 110.195 75.9199C111.059 75.9124 111.921 75.9048 112.81 75.897C119.46 75.9944 119.46 75.9944 121.75 78.2731C122.191 78.8959 122.631 79.5187 123.085 80.1604C123.454 80.531 123.454 80.531 123.83 80.9091C123.911 82.1028 123.941 83.3 123.95 84.4965C123.957 85.2614 123.964 86.0262 123.971 86.8143C123.974 87.6478 123.978 88.4815 123.981 89.3403C123.985 90.1927 123.99 91.0451 123.994 91.9233C124.001 93.7328 124.006 95.5423 124.009 97.3517C124.016 100.116 124.039 102.879 124.062 105.643C124.067 107.399 124.071 109.155 124.074 110.911C124.083 111.738 124.093 112.563 124.102 113.415C124.081 120.894 124.081 120.894 121.596 124.332C119.274 125.815 117.439 126.021 114.715 126.035C113.937 126.042 113.159 126.049 112.357 126.056C111.521 126.056 110.685 126.055 109.823 126.054C108.961 126.057 108.098 126.06 107.209 126.064C105.383 126.068 103.559 126.068 101.734 126.065C98.9428 126.062 96.1519 126.08 93.3604 126.099C91.5874 126.101 89.8145 126.101 88.0415 126.101C87.2067 126.107 86.372 126.115 85.5119 126.122C84.7316 126.117 83.9513 126.113 83.1474 126.107C82.4635 126.108 81.7796 126.109 81.075 126.109C78.7215 125.767 77.3408 124.983 75.4255 123.583C73.7766 121.097 73.7375 120.265 73.6961 117.362C73.6818 116.549 73.6676 115.737 73.6528 114.901C73.6465 114.023 73.6401 113.146 73.6337 112.242C73.6251 111.34 73.6166 110.438 73.6079 109.509C73.5938 107.6 73.5841 105.69 73.5783 103.781C73.5639 100.859 73.5177 97.9383 73.4707 95.0167C73.461 93.1626 73.4532 91.3085 73.4475 89.4543C73.4291 88.5801 73.4107 87.7058 73.3917 86.8049C73.4123 83.0474 73.445 80.866 75.6217 77.739C79.2026 75.469 83.5895 75.8841 87.6691 75.9199Z"
          fill="#B0488C"
        />
        <path
          d="M32.2341 37.4866C59.7575 37.4866 87.2809 37.4866 115.638 37.4866C115.638 42.9219 115.638 48.3572 115.638 53.9572C93.0298 53.9572 70.4213 53.9572 47.1277 53.9572C47.1277 64.5807 47.1277 75.2043 47.1277 86.1497C42.2128 86.1497 37.2979 86.1497 32.2341 86.1497C32.2341 70.0909 32.2341 54.0321 32.2341 37.4866Z"
          fill="#B0488C"
        />
        <path
          d="M32.2341 116.845C37.149 116.845 42.0639 116.845 47.1277 116.845C47.1277 127.221 47.1277 137.598 47.1277 148.289C71.7022 148.289 96.2766 148.289 121.596 148.289C121.596 153.23 121.596 158.171 121.596 163.262C92.1064 163.262 62.617 163.262 32.2341 163.262C32.2341 147.944 32.2341 132.627 32.2341 116.845Z"
          fill="#B0488C"
        />
        <path
          d="M161.814 34.6792C165.577 37.5618 167.934 41.1653 169.255 45.7219C170.002 51.7878 170.244 57.7758 166.678 63.0231C166.3 63.4902 165.921 63.9573 165.532 64.4385C164.964 65.1623 164.964 65.1623 164.386 65.9007C160.694 70.0863 156.304 72.2018 150.81 72.9575C144.443 73.235 139.791 71.2772 134.814 67.3864C130.268 63.0898 128.124 57.8507 127.879 51.6177C128.195 45.152 130.717 40.4865 135.049 35.7846C142.84 28.7908 153.315 29.3596 161.814 34.6792Z"
          fill="#B0488C"
        />
        <path
          d="M158.009 137.132C162.749 139.815 166.014 143.005 167.766 148.289C168.291 153.643 168.045 158.108 164.787 162.513C160.978 166.779 156.65 168.925 151.011 169.532C144.592 168.841 140.292 166.139 136.21 161.062C134.084 157.002 134.439 151.969 135 147.54C136.243 144.421 137.612 142.39 140.167 140.241C140.665 139.812 141.163 139.383 141.676 138.942C146.467 135.355 152.423 135.005 158.009 137.132Z"
          fill="#B0488C"
        />
        <path
          d="M149.894 85.4011C154.809 85.4011 159.723 85.4011 164.787 85.4011C164.787 96.0246 164.787 106.648 164.787 117.594C159.872 117.594 154.957 117.594 149.894 117.594C149.894 106.97 149.894 96.3465 149.894 85.4011Z"
          fill="#B0488C"
        />
        <path
          d="M40.3383 94.0136C43.3122 94.7142 44.8713 96.3632 46.6623 98.7366C47.3967 101.321 47.103 103.037 46.383 105.615C44.2412 107.919 42.6152 109.128 39.6343 110.107C36.957 110.107 35.8402 109.471 33.7234 107.861C33.2934 107.567 32.8633 107.274 32.4203 106.972C30.8391 104.667 30.4332 102.35 30.7447 99.6257C32.7702 95.2399 35.5991 93.6206 40.3383 94.0136Z"
          fill="#B0488C"
        />
      </g>
      <defs>
        <clipPath id="clip0_31_12">
          <rect
            width="140"
            height="140"
            fill="white"
            transform="translate(30 30)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
