import {
  AiChat,
  ChatItem,
  AiChatProps,
  PromptRendererProps,
  MessageSentCallback,
  AssistantPersona,
  UserPersona,
  MessageStreamStartedCallback,
} from "@nlux/react";
import "../css/langdb/main.css";
import '@nlux/themes/nova.css';
import "../tailwind.css";

import { FaUser } from "react-icons/fa";
import { AdapterProps, useAdapter } from "./adapter";
import { FileWithPreview } from "../types";
import { useCallback, useState } from "react";
import { Files, Thumbnails } from "./Files";
import { Avatar } from "./Icons";

type AdvancedOptions = Omit<AiChatProps, "adapter">;

export interface WidgetProps extends AdapterProps {
  personaOptions?: Partial<{
    assistant?: Partial<AssistantPersona>;
    user?: Partial<UserPersona>;
  }>;
  messages?: ChatItem[];
  style?: any;
  className?: any;
  controls?: {
    enableFiles?: boolean
  }
  advancedOptions?: AdvancedOptions;
}

export function Widget(props: WidgetProps) {

  const advancedOptions = props.advancedOptions || {};
  const conversationOptions = advancedOptions.conversationOptions || {
    layout: "bubbles",
  };
  const [files, setFiles] = useState<FileWithPreview[]>([]);
  const adapter = useAdapter({ ...props, files });
  const { controls } = props;
  const [fileMap, setFileMap] = useState(new Map());

  const updateMap = (key: string, value: FileWithPreview[] | undefined) => {
    setFileMap(map => new Map(map.set(key, value)));
  }
  const PromptRender = ({ prompt, uid }: PromptRendererProps) => {
    const files: FileWithPreview[] | undefined = fileMap.get(uid);
    return <div className="rounded-lg shadow-sm">
      <span className="block">{prompt}</span>
      <div className="mt-2">
        {files && <Thumbnails files={files} />}
      </div>
    </div>
  }

  const displayOptions = Object.assign(
    {},
    { colorScheme: "light", themeId: "langdb" },
    advancedOptions.displayOptions,
  );
  const composerOptions = advancedOptions.composerOptions || {
    placeholder: "How can i help you today ?",
  };

  const personaOptions = Object.assign({}, {
    assistant: Object.assign({}, {
      name: "LangDB",
      tagline: `
              Easily build and deploy AI agents with SQL.
              Customize with our React widget on`,
      avatar: <Avatar />,
    }, props.personaOptions?.assistant),
    user: Object.assign({}, {
      name: "User",
      avatar: <FaUser />,
    }),
  }, props.personaOptions?.user);
  const messageSentCallback = useCallback<MessageSentCallback>((eventDetails) => {
    if (files) {
      updateMap(eventDetails.uid, [...files]);
      setFiles([]);
    }
  }, [updateMap]);

  const messageStreamStarted = useCallback<MessageStreamStartedCallback>(() => {

  }, []);

  const className = props.className || "";
  return (
    <div className="flex flex-col w-[100%] h-full">
      {controls?.enableFiles && <Files files={files} setFiles={setFiles} />}

      <div className="flex-1 w-full relative">
        <main
          className={`items-center justify-between  ${className} h-full absolute`}
          style={props.style || {}}
        >
          <AiChat
            adapter={adapter}
            initialConversation={props.messages}
            events={{
              messageSent: messageSentCallback,
              messageStreamStarted
            }}
            messageOptions={{
              promptRenderer: PromptRender
            }}
            personaOptions={personaOptions}
            conversationOptions={conversationOptions}
            displayOptions={displayOptions}
            composerOptions={composerOptions}
            {...advancedOptions}
          />
        </main>
      </div>
    </div>
  );
}