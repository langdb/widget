import {
  AiChat,
  ChatItem,
  AiChatProps,
  PromptRendererProps,
  MessageSentCallback,
  AssistantPersona,
  UserPersona,
  MessageStreamStartedCallback,
  ResponseRendererProps,
  Markdown
} from "@nlux/react";
import "../css/langdb/main.css";
import '@nlux/themes/nova.css';
import "../tailwind.css";

import { FaUser } from "react-icons/fa";
import { AdapterProps, DEV_SERVER_URL, getHeaders, useAdapter } from "./adapter";
import { FileWithPreview } from "../types";
import { useCallback, useState } from "react";
import { Files, Thumbnails } from "./Files";
import { Avatar } from "./Icons";
import { ArrowUpTrayIcon, HandThumbDownIcon, HandThumbUpIcon } from "@heroicons/react/24/outline";
import { HandThumbDownIcon as SHandThumbDownIcon, HandThumbUpIcon as SHandThumbUpIcon } from "@heroicons/react/24/solid";
import React from "react";
import { highlighter } from '@nlux/highlighter';
import '@nlux/highlighter/dark-theme.css';
import { useDropzone } from "react-dropzone";

type AdvancedOptions = Omit<AiChatProps, "adapter">;

export interface WidgetProps extends AdapterProps {
  personaOptions?: Partial<{
    assistant?: Partial<AssistantPersona>;
    user?: Partial<UserPersona>;
  }>;
  messages?: ChatItem[];
  rawMessages?: any[];
  style?: any;
  className?: any;
  controls?: {
    enableFiles?: boolean
  }
  advancedOptions?: AdvancedOptions;
}

export const Widget: React.FC<WidgetProps> = React.memo((props) => {

  const [initialMessages] = useState(props.messages);
  const advancedOptions = props.advancedOptions || {};
  const conversationOptions = advancedOptions.conversationOptions || {
    layout: "bubbles"
  };
  const [files, setFiles] = useState<FileWithPreview[]>([]);
  const { adapter, threadId, messageId } = useAdapter({ ...props, files });
  const { controls } = props;
  const [fileMap, setFileMap] = useState(new Map());

  const updateMap = (key: string, value: FileWithPreview[] | undefined) => {
    setFileMap(map => new Map(map.set(key, value)));
  }
  const PromptRender = (props: PromptRendererProps) => {
    const { prompt, uid } = props;
    const files: FileWithPreview[] | undefined = fileMap.get(uid);
    return <div className="rounded-lg shadow-sm">
      <span className="block">{prompt}</span>
      {files && <div className="mt-2">
        <Thumbnails files={files} />
      </div>}
    </div>
  }
  const ResponseRenderer: React.FC<ResponseRendererProps<string>> = React.memo((responseProps) => {

    const [score, setScore] = useState<number | undefined>();
    const [error, setError] = useState<string | undefined>();
    const handleScore = async (score: number) => {
      let scoreRequest;
      // New messages threadId from state
      if (responseProps.dataTransferMode === "stream") {
        if (!threadId || !messageId) {
          setError("streaming message doesnt have thread and messageIds");
          return;
        }
        scoreRequest = {
          thread_id: threadId,
          message_id: messageId,
          score: score,
        };
      } else {
        // Initial messages threadId from database
        let messageWithId = responseProps.serverResponse?.[0] as { messageId: string, threadId: string } | undefined;
        if (messageWithId) {
          scoreRequest = {
            thread_id: messageWithId.threadId,
            message_id: messageWithId.messageId,
            score: score,
          };
        } else {
          setError("message doesnt have thread and messageIds");
          return;
        }
      }

      try {
        const headers = await getHeaders(props);
        const serverUrl = props.serverUrl || DEV_SERVER_URL;
        const response = await fetch(`${serverUrl}/threads/score`, {
          method: 'POST',
          headers,
          body: JSON.stringify(scoreRequest),
        });

        if (!response.ok) {
          throw new Error('Failed to record score');
        }
        setScore(score);
      } catch (error: any) {
        setError(error.toString());
        console.error('Error recording score:', error);
      }

    };
    return (
      <div className="">
        {responseProps.dataTransferMode === "batch" && <Markdown>{responseProps.content}</Markdown>}

        {responseProps.dataTransferMode === "stream" && <div className="p-2 rounded-lg" ref={responseProps.containerRef}></div>}

        <div className="flex items-center justify-start space-x-1">
          <button
            className=" hover:bg-gray-600 hover:text-white rounded focus:outline-none"
            onClick={() => handleScore(1)}
          >
            {score == undefined && <HandThumbUpIcon className="h-4 w-4" />}
            {score === 1 && <SHandThumbUpIcon className="h-4 w-4 animate-fadeIn" />}
          </button>
          <button
            className="p-2 hover:bg-gray-600 rounded focus:outline-none"
            onClick={() => handleScore(-1)}
          >
            {score == undefined && <HandThumbDownIcon className="h-4 w-4" />}
            {score === -1 && <SHandThumbDownIcon className="h-4 w-4 animate-fadeIn" />}
          </button>
        </div>
        {error && <div className="text-red text-xs animate-fadeIn p-2 rounded-md">{error}</div>}
      </div >
    );
  });

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

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setFiles(prevFiles => [...prevFiles, ...acceptedFiles.map(file => Object.assign(file, {
      preview: URL.createObjectURL(file)
    }))]);
  }, []);

  const { getRootProps, isDragActive } = useDropzone({
    onDrop,
    noClick: true,
    noKeyboard: true
  });
  const className = props.className || "";
  return (
    <div className="flex flex-col w-[100%] h-full dropzone" {...getRootProps()}>
      {controls?.enableFiles && <>
        {isDragActive && (
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center z-50 bg-white bg-opacity-75 dark:bg-darkContainer dark:bg-opacity-75">
            <div className="text-center flex flex-col items-center">
              <ArrowUpTrayIcon className="h-12 w-12 text-primary dark:text-gray-200 mb-4 animate-bounce" />
              <p className="text-lg font-semibold text-primary dark:text-gray-200 w-[400px] mx-auto">
                Drop your images here to enhance your query with visual insights.
              </p>
            </div>
          </div>
        )}
        <Files files={files} setFiles={setFiles} />
      </>}

      <div className={`flex-1 w-full relative ${isDragActive ? "hidden" : ""}`}>
        <main
          className={`items-center justify-between  ${className} h-full absolute`}
          style={props.style || {}}
        >
          <AiChat
            adapter={adapter}
            initialConversation={initialMessages}
            events={{
              messageSent: messageSentCallback,
              messageStreamStarted
            }}
            messageOptions={{
              promptRenderer: PromptRender,
              responseRenderer: ResponseRenderer,
              syntaxHighlighter: highlighter
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
});