import React, { useCallback, useEffect, useState } from "react";
import { useScrollToBottom } from "../hooks/ScrollToBottom";
import { WidgetProps } from "./Widget";
import { Avatar } from "./Icons";
import { v4 as uuidv4 } from 'uuid';
import { useChatState } from "../hooks/ChatState";
import { onSubmit } from "./adapter";
import { ChatMessage, MessageContentType, MessageType } from "../dto/ChatMessage";
import { HumanMessage } from "./Messages/Human";
import { AiMessage } from "./Messages/Ai";
import { ChatInput } from "./ChatInput";
import { Persona, PersonaOptions } from "../dto/PersonaOptions";
import { useDropzone } from 'react-dropzone';
import { FileWithPreview } from "../types";
import { PaperClipIcon } from "@heroicons/react/24/outline";
import { Files } from "./Files";
import { ChatCompletionChunk } from "../events";
import { emitter } from "./EventEmiter";

// New component for rendering messages
const MessageRenderer: React.FC<{ message: ChatMessage; personaOptions: PersonaOptions, widgetProps: WidgetProps }> = ({ message, personaOptions, widgetProps }) => (
  <div className={`flex mb-2 ${message.type === MessageType.HumanMessage ? 'justify-end' : 'justify-start'}`}>
    <div className="max-w-3/4">

      {message.type === MessageType.HumanMessage
        ? <HumanMessage msg={message} persona={personaOptions.user} />
        : <AiMessage msg={message} persona={personaOptions.assistant} widgetProps={widgetProps} />
      }
    </div>
  </div>
);

// Custom hook for handling message submission
const useMessageSubmission = (props: WidgetProps, chatState: ReturnType<typeof useChatState>) => {
  const { setMessages, setCurrentInput, setTyping, setError, setMessageId, setThreadId, messageId, threadId } = chatState;
  return useCallback(async (inputProps: { currentInput: string, files: FileWithPreview[] }) => {
    const { currentInput, files } = inputProps;
    if (currentInput.trim() === '') return;
    setMessages((prevMessages) => [
      ...prevMessages,
      { id: uuidv4(), message: currentInput, type: MessageType.HumanMessage, content_type: MessageContentType.Text, role: 'user', threadId: threadId, files: files },
    ]);
    setCurrentInput('');
    setTyping(true);

    try {
      let currentThreadId = threadId;
      await onSubmit({
        widgetProps: props,
        files,
        message: currentInput,
        threadId: threadId,
        onopen: async (response) => {
          if (response.ok && response.headers.get('content-type') === "text/event-stream") {
            const threadIdHeader = response.headers.get('X-Thread-Id');
            const messageIdHeader = response.headers.get('X-Message-Id');
            currentThreadId = threadIdHeader || threadId;
            setMessageId(messageIdHeader || undefined);
            setThreadId(threadIdHeader || undefined);
            if (props.responseCallback) {
              const traceId = response?.headers.get('x-trace-id') as string | undefined;
              props.responseCallback({
                traceId,
                modelName: props.modelName,
                threadId: threadIdHeader as string,
                messageId: messageIdHeader as string,
              });
            }
          }
        },
        onmessage: (msg) => {
          //let newMessage: string | undefined;
          try {
            const event = JSON.parse(msg.data) as ChatCompletionChunk;
            props.onEvent?.(event);
            setMessages((prevMessages) => {
              const lastMessage = prevMessages[prevMessages.length - 1];
              if (lastMessage.type === MessageType.HumanMessage) {
                // also update lastMessage threadId
                return [...prevMessages.slice(0, -1), { ...lastMessage, threadId: currentThreadId }, { id: messageId || uuidv4(), message: event.choices.map((choice) => choice.delta.content).join(''), type: MessageType.AIMessage, content_type: MessageContentType.Text, threadId: currentThreadId }];
              } else {
                const updatedLastMessage = { ...lastMessage, message: lastMessage.message + event.choices.map((choice) => choice.delta.content).join('') };
                return [...prevMessages.slice(0, -1), updatedLastMessage];
              }
            })
          } catch (_e: any) {
            // newMessage = msg.data;
          }
        },
        onclose: () => {
          emitter.emit('langdb_chatSubmitSuccess', {});
          setMessageId(undefined);
          setTyping(false);
        },
      });
    } catch (e: unknown) {
      console.error(e);
      setError(e instanceof Error ? e.message : String(e));
      setTyping(false);
    }
  }, [props, setMessages, setCurrentInput, setTyping, setError, setMessageId, setThreadId, messageId, threadId]);
};

export const ChatComponent: React.FC<WidgetProps> = (props) => {
  const chatState = useChatState({ initialMessages: props.messages || [] });

  const {
    messages,
    currentInput,
    setCurrentInput,
    typing,
    error,
  } = chatState;

  const { hideChatInput } = props
  const { messagesEndRef, scrollToBottom } = useScrollToBottom();

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  const personaOptions: PersonaOptions = {
    assistant: {
      name: "LangDB",
      avatar: Avatar,

      ...props.personaOptions?.assistant,
    } as Persona,
    user: {
      name: "User",
      ...props.personaOptions?.user,
    } as Persona,
  };

  const [files, setFiles] = useState<FileWithPreview[]>([]);

  const handleSubmit = useMessageSubmission(props, chatState)


  const onSubmitWrapper = useCallback((inputText: string) => {
    let currentFiles = files;
    setFiles([]);
    return handleSubmit({ currentInput: inputText, files: currentFiles });
  }, [files, handleSubmit]);

  useEffect(() => {
    const handleExternalSubmit = ({ inputText }: { inputText: string }) => {
      setCurrentInput(inputText); // Set the input text
      onSubmitWrapper(inputText); // Pass the input text directly
    };

    emitter.on('langdb_chatSubmit', handleExternalSubmit);

    return () => {
      emitter.off('langdb_chatSubmit', handleExternalSubmit);
    };
  }, [onSubmitWrapper, setCurrentInput]);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setFiles(prevFiles => [
      ...prevFiles,
      ...acceptedFiles.map(file => ({
        preview: URL.createObjectURL(file),
        raw_file: file,
        ...file,
        type: file.type,
      }))
    ]);
  }, []);
  const { getRootProps, isDragActive, open } = useDropzone({
    onDrop, noClick: true,
    noKeyboard: true,
    accept: {
      "image/*": [],
    }, // Accept only image files
  });

  return (
    <div className="langdb-chat mx-auto flex flex-1 flex-col lg:max-w-[40rem] xl:max-w-[48rem] w-full h-full">
      <div {...getRootProps()} className="langdb-message-section flex flex-col flex-1 justify-center overflow-y-auto p-4 pb-0">
        {isDragActive && (
          <div className="absolute gap-20 flex-col inset-0 bg-black bg-opacity-50 flex justify-center items-center text-white text-xl z-50">
            <PaperClipIcon className="h-12 w-12" />
            <div className="flex flex-col justify-center items-center">
              <span className=" font-bold">Add anything</span>
              <span>Drop any file here to add it to conversation</span>
            </div>
          </div>
        )}
        {messages.length === 0 && <StarterDisplay starters={props.starters} onStarterClick={(prompt: string) => {
          setCurrentInput(prompt);
          handleSubmit({ currentInput: prompt, files: [] });
        }} />}
        <div className="langdb-message-render flex-1 overflow-auto">
          {messages.map((msg: ChatMessage) => (
            <MessageRenderer key={msg.id} message={msg} personaOptions={personaOptions} widgetProps={props} />
          ))}
          {typing && (
            <div key="typing-ai" className="flex justify-start">
              <div className="max-w-3/4">
                <AiMessage typing={true} persona={personaOptions.assistant} widgetProps={props} />
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />

        </div>

        {error && (
          <div className="error-message bg-red-100 text-red-700 p-2 rounded-lg mb-4">
            {error}
          </div>
        )}
      </div>
      {!hideChatInput && <div className="langdb-chat-input bg-inherit sticky bottom-0 pt-1 px-4">
        {files && files.length > 0 && <Files files={files} setFiles={setFiles} />}
        <ChatInput onFileIconClick={open} onSubmit={onSubmitWrapper} currentInput={currentInput} setCurrentInput={setCurrentInput} />
      </div>}
    </div>
  );
};

const StarterDisplay: React.FC<{ starters: WidgetProps['starters'], onStarterClick: (prompt: string) => void }> = ({ starters, onStarterClick }) => {
  return <div className="flex  h-full self-center flex-1 flex-col justify-center items-center">
    <div className="flex flex-2 gap-3 flex-col justify-center items-center">
      <Avatar width={48} height={48} />
      <span className="font-bold">LangDB</span>
      <div className="flex flex-col justify-center items-center">
        <span className="text-sm">Easily build and deploy AI agents</span>
      </div>
    </div>
    <div className="flex p-8 justify-end items-end">
      <div className="flex  flex-row gap-4">
        {starters && starters.map((starter, index) => {
          return (<button key={index} onClick={() => {
            onStarterClick(starter.prompt);
          }} className="bg-zinc-100 starter-button border bg-opacity-10  h-[101px] w-[160px] line-clamp-2 flex p-[12px] rounded-lg mb-2">
            <div className="">{starter.prompt}</div>
          </button>)
        })}
      </div>
    </div>
  </div>
};
