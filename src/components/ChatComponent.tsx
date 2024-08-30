import React, { useEffect } from "react";
import { useScrollToBottom } from "../hooks/ScrollToBottom";
import { WidgetProps } from "./Widget";
import { Avatar } from "./Icons";
import { useChatState } from "../hooks/ChatState";
import { ChatMessage, MessageType } from "../dto/ChatMessage";
import { HumanMessage } from "./Messages/Human";
import { AiMessage } from "./Messages/Ai";
import { ChatInput } from "./ChatInput";
import { PersonaOptions } from "../dto/PersonaOptions";
import { useDropzone } from 'react-dropzone';
import { PaperClipIcon } from "@heroicons/react/24/outline";
import { Files } from "./Files";
import { useMessageSubmission } from "../hooks/useMessageSubmission";
import { useFileHandling } from "../hooks/useFileHandling";

const MessageRenderer: React.FC<{ message: ChatMessage; personaOptions: PersonaOptions }> = ({ message, personaOptions }) => (
  <div className={`flex mb-2 ${message.type === MessageType.HumanMessage ? 'justify-end' : 'justify-start'}`}>
    <div className="max-w-3/4">
      {message.type === MessageType.HumanMessage
        ? <HumanMessage msg={message} persona={personaOptions.user} />
        : <AiMessage msg={message} persona={personaOptions.assistant} />
      }
    </div>
  </div>
);

const StarterDisplay: React.FC<{ starters: WidgetProps['starters'], onStarterClick: (prompt: string) => void }> = ({ starters, onStarterClick }) => (
  <div className="flex h-full self-center flex-1 flex-col justify-center items-center">
    <div className="flex flex-2 gap-3 flex-col justify-center items-center">
      <Avatar width={48} height={48} />
      <span className="font-bold">LangDB</span>
      <div className="flex flex-col justify-center items-center">
        <span className="text-sm">Easily build and deploy AI agents with SQL</span>
        <span className="text-sm">Customize with our React widget on</span>
      </div>
    </div>
    <div className="flex p-8 justify-end items-end">
      <div className="flex flex-row gap-4">
        {starters && starters.map((starter, index) => (
          <button
            key={index}
            onClick={() => onStarterClick(starter.prompt)}
            className="bg-zinc-100 starter-button border bg-opacity-10 h-[101px] w-[160px] line-clamp-2 flex p-[12px] rounded-lg mb-2"
          >
            <div>{starter.prompt}</div>
          </button>
        ))}
      </div>
    </div>
  </div>
);

export const ChatComponent: React.FC<WidgetProps> = (props) => {
  const chatState = useChatState({ initialMessages: props.messages || [] });
  const {
    messages,
    currentInput,
    setCurrentInput,
    typing,
    error,
    threadId,
  } = chatState;

  const { messagesEndRef, scrollToBottom } = useScrollToBottom();
  const handleSubmit = useMessageSubmission(props, chatState);
  const { files, setFiles, onDrop } = useFileHandling();

  const { getRootProps, isDragActive, open } = useDropzone({ onDrop, noClick: true, noKeyboard: true });

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  const personaOptions: PersonaOptions = {
    assistant: {
      name: "LangDB",
      url: "/image.png",
      ...props.personaOptions?.assistant,
    },
    user: {
      name: "User",
      url: "/image.png",
      ...props.personaOptions?.user,
    },
  };

  const onSubmitWrapper = (e: React.FormEvent) => {
    e.preventDefault();
    const currentFiles = files;
    setFiles([]);
    return handleSubmit({ currentInput, files: currentFiles });
  };

  return (
    <div className="langdb-chat flex flex-col h-full">
      <div {...getRootProps()} className="langdb-message-section flex flex-col flex-1 justify-center overflow-y-auto p-4">
        {isDragActive && (
          <div className="absolute gap-20 flex-col inset-0 bg-black bg-opacity-50 flex justify-center items-center text-white text-xl z-50">
            <PaperClipIcon className="h-12 w-12" />
            <div className="flex flex-col justify-center items-center">
              <span className="font-bold">Add anything</span>
              <span>Drop any file here to add it to conversation</span>
            </div>
          </div>
        )}
        {messages.length === 0 && (
          <StarterDisplay
            starters={props.starters}
            onStarterClick={(prompt: string) => {
              setCurrentInput(prompt);
              handleSubmit({ currentInput: prompt, files: [] });
            }}
          />
        )}
        <div className="flex flex-col flex-1">
          {messages.map((msg: ChatMessage) => (
            <MessageRenderer key={msg.id} message={msg} personaOptions={personaOptions} />
          ))}
          {typing && (
            <div key="typing-ai" className="flex justify-start">
              <div className="max-w-3/4">
                <AiMessage typing={true} persona={personaOptions.assistant} />
              </div>
            </div>
          )}
        </div>
        <div ref={messagesEndRef} />
        {error && (
          <div className="error-message bg-red-100 text-red-700 p-2 rounded-lg mb-4">
            {error}
          </div>
        )}
      </div>
      <div className="langdb-chat-input sticky bottom-0 p-2 px-4">
        <Files files={files} setFiles={setFiles} />
        <ChatInput onFileIconClick={open} onSubmit={onSubmitWrapper} currentInput={currentInput} setCurrentInput={setCurrentInput} />
      </div>
    </div>
  );
};
