import React, { useCallback, useEffect } from "react";
import { useScrollToBottom } from "../hooks/ScrollToBottom";
import { WidgetProps } from "./Widget";
import { Avatar } from "./Icons";
import { v4 as uuidv4 } from 'uuid';
import { useChatState } from "../hooks/ChatState";
import { onSubmit } from "./adapter";
import { ChatMessage, MessageContentType, MessageType } from "../dto/ChatMessage";
import { HumanMessage } from "./Messages/Human";
import { AiMessage } from "./Messages/Ai";
import { ChatInput, convertAudioToBase64 } from "./ChatInput";
import { Persona, PersonaOptions } from "../dto/PersonaOptions";
import { FileWithPreview } from "../types";
import { ChatCompletionChunk } from "../events";
import { emitter } from "./EventEmiter";
import { XCircleIcon } from "@heroicons/react/24/solid";
import { EventSourceMessage } from "@microsoft/fetch-event-source";
import { useDropzone } from "react-dropzone";
import { PaperClipIcon } from "@heroicons/react/24/outline";

// New component for rendering messages
const MessageRenderer: React.FC<{ message: ChatMessage; personaOptions: PersonaOptions, widgetProps: WidgetProps }> = ({ message, personaOptions, widgetProps }) => (
  <div className={`flex mb-2 ${message.type === MessageType.HumanMessage ? 'justify-end' : 'justify-start'}`}>
    <div className="max-w-3/4 overflow-scroll">

      {message.type === MessageType.HumanMessage
        ? <HumanMessage msg={message} persona={personaOptions.user} />
        : <AiMessage msg={message} persona={personaOptions.assistant} widgetProps={widgetProps} />
      }
    </div>
  </div>
);

// Custom hook for handling message submission
const useMessageSubmission = (props: WidgetProps, chatState: ReturnType<typeof useChatState>) => {
  const {
    setMessages,
    setCurrentInput,
    setTyping,
    setError,
    setMessageId,
    setThreadId,
    appendUsage,
    messageId,
    threadId,
    messages,
  } = chatState;

  const handleOpen = useCallback(async (response: Response, currentThreadId?: string) => {
    if (response.ok && response.headers.get('content-type') === 'text/event-stream') {
      const messageIdHeader = response.headers.get('X-Message-Id');
      const updatedThreadId = currentThreadId;
      if (props.responseCallback) {
        const traceId = response.headers.get('x-trace-id') as string | undefined;
        props.responseCallback({
          traceId,
          modelName: props.modelName,
          threadId: updatedThreadId,
          messageId: messageIdHeader as string,
        });
      }
    }
    if (!response.ok) {
      let responseJson = await response.json();
      if (responseJson.error) {
        throw new Error(responseJson.error)
      } else {
        throw new Error(response.statusText)
      }
    }
  }, [props, setMessageId, setThreadId]);

  const handleMessage = useCallback((msg: EventSourceMessage, currentThreadId?: string, currentMessageId?: string, currentTraceId?: string | null) => {
    try {
      if (msg.data === '[DONE]') {
        return;
      }
      const jsonMsg = JSON.parse(msg.data);

      if (jsonMsg.error) {
        setError(jsonMsg.error);
        setTyping(false);
      } else {
        const event = jsonMsg as ChatCompletionChunk;
        if (event.usage) {
          emitter.emit('langdb_usageStats', { usage: event.usage, threadId: currentThreadId });
          appendUsage(event.usage);
        }
        props.onEvent?.(event);

        setMessages((prevMessages) => {
          const lastMessage = prevMessages[prevMessages.length - 1];

          if (lastMessage && lastMessage.type === MessageType.HumanMessage) {
            return [
              ...prevMessages.slice(0, -1),
              { ...lastMessage, threadId: currentThreadId },
              {
                id: currentMessageId || uuidv4(),
                message: event.choices.map((choice) => choice.delta.content).join(''),
                type: MessageType.AIMessage,
                content_type: MessageContentType.Text,
                threadId: currentThreadId,
                trace_id: currentTraceId || undefined
              },
            ];
          }

          const updatedLastMessage = {
            ...lastMessage,
            message: lastMessage.message + event.choices.map((choice) => choice.delta.content).join(''),
          };

          return [...prevMessages.slice(0, -1), updatedLastMessage];
        });
      }
    } catch (error) {
    }
  }, [props, setTyping, setError, setMessageId, setThreadId, appendUsage, messageId]);
  const { messagesEndRef, scrollToBottom } = useScrollToBottom();

  const submitMessageFn = useCallback(async (inputProps:
    {
      inputText: string;
      files: FileWithPreview[];
      searchToolEnabled?: boolean;
      otherTools?: string[];
    }) => {
    const { inputText, files, searchToolEnabled, otherTools } = inputProps;

    if (inputText.trim() === '') return;

    const newMessage = {
      id: uuidv4(),
      message: inputText,
      type: MessageType.HumanMessage,
      content_type: MessageContentType.Text,
      role: 'user',
      threadId,
      files,
    };

    setMessages((prevMessages) => [...prevMessages, newMessage]);
    setCurrentInput('');
    setTyping(true);
    setError(undefined);
    let currentThreadId = threadId;

    try {
      let currentMessageId = messageId;
      let currentTraceId: string | null = null;
      scrollToBottom();
      await onSubmit({
        searchToolEnabled,
        otherTools,
        previousMessages: messages,
        widgetProps: props,
        files,
        message: inputText,
        threadId,
        onerror: (error) => {
          setError(error instanceof Error ? error.message : String(error));
          setTyping(false);
          props.responseCallback?.({
            error,
            modelName: props.modelName,
          });
          throw error
        },
        onopen: (response) => {
          if (response.ok && response.headers.get('content-type') === 'text/event-stream') {
            const threadIdHeader = response.headers.get('X-Thread-Id');
            const messageIdHeader = response.headers.get('X-Message-Id');
            const traceIdHeader = response.headers.get('X-Trace-Id');
            currentThreadId = threadIdHeader || currentThreadId
            currentMessageId = messageIdHeader || currentMessageId
            currentTraceId = traceIdHeader
            setThreadId(currentThreadId);
            setMessageId(currentMessageId);
          }
          return handleOpen(response, currentThreadId)
        },
        onmessage: (msg) => {
          return handleMessage(msg, currentThreadId || threadId, currentMessageId || messageId, currentTraceId)
        },
        onclose: () => {
          emitter.emit('langdb_chatSubmitSuccess', { threadId: currentThreadId });
          setMessageId(undefined);
          setTyping(false);
        },
      });
    } catch (error) {
      setError(error instanceof Error ? error.message : String(error));
      setTyping(false);
      emitter.emit('langdb_chatSubmitError', { error: error instanceof Error ? error.message : String(error) });
    } finally {
      emitter.emit('langdb_chatSubmitDone', { threadId: currentThreadId });
    }
  },
    [
      props,
      threadId,
      setMessages,
      setCurrentInput,
      setTyping,
      setError,
      setMessageId,
      setThreadId,
      messageId,
      messages,
      messagesEndRef,
      scrollToBottom
    ]
  );

  return {
    submitMessageFn,
    messagesEndRef,
    scrollToBottom
  };
};

export const ChatComponent: React.FC<WidgetProps> = (props) => {
  const chatState = useChatState({ initialMessages: props.messages || [] });

  const {
    messages,
    currentInput,
    setCurrentInput,
    typing,
    error,
    setError
  } = chatState;

  const { hideChatInput } = props

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

  const { submitMessageFn: handleSubmit, messagesEndRef } = useMessageSubmission(props, chatState)


  const onSubmitWrapper = useCallback((inputProps: { inputText: string, files: FileWithPreview[], searchToolEnabled?: boolean, otherTools?: string[] }) => {
    return handleSubmit(inputProps);
  }, [handleSubmit]);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    let updatedFilesPromises = acceptedFiles.map(file => {
      if (file.type.startsWith('audio/')) {
        return convertAudioToBase64(file).then((base64) => {
          return ({
            preview: '',
            base64: base64 as string,
            raw_file: file,
            ...file,
            type: file.type,
          })
        })
      }
      return Promise.resolve({
        preview: URL.createObjectURL(file),
        raw_file: file,
        ...file,
        type: file.type,
      })
    })
    let allResolved = Promise.all(updatedFilesPromises);
    allResolved.then((files: FileWithPreview[]) => {
      emitter.emit('langdb_fileAdded', { files });
    });
  }, []);
  const { getRootProps, isDragActive } = useDropzone({
    onDrop,
    noClick: true,
    noKeyboard: true,
    accept: {
      "image/*": [],
      "audio/*": [],
    },
  });

  useEffect(() => {
    const handleExternalSubmit = ({ inputText, files, searchToolEnabled, otherTools }: { inputText: string, files: FileWithPreview[], searchToolEnabled?: boolean, otherTools?: string[] }) => {
      setCurrentInput(inputText); // Set the input text
      onSubmitWrapper({ inputText, files, searchToolEnabled, otherTools }); // Pass the input text directly
    };
    emitter.on('langdb_chatSubmit', handleExternalSubmit);

    return () => {
      emitter.off('langdb_chatSubmit', handleExternalSubmit);
    };
  }, [onSubmitWrapper, setCurrentInput]);
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
          handleSubmit({ inputText: prompt, files: [] });
        }} />}
        <div className="langdb-message-render flex-1 overflow-auto">
          {messages.filter(m => m.type === MessageType.HumanMessage || m.type !== MessageType.ToolMessage).map((msg: ChatMessage) => {
            return <MessageRenderer key={msg.id} message={msg} personaOptions={personaOptions} widgetProps={props} />
          })}
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
          <div className=" bg-red-100 flex  p-2 rounded-lg items-center justify-between mb-4">
            <span className="text-red-700">{error}</span>
            <XCircleIcon
              onClick={() => {
                setError(undefined);
              }}
              className="h-4 w-4 text-red-500 hover:text-red-700 hover:cursor-pointer rounded-full" />
          </div>
        )}
      </div>
      {!hideChatInput && <ChatInput
        searchToolEnabled={props.searchToolEnabled}
        toggleSearchTool={props.toggleSearchTool}
        onSubmit={(props: { inputText: string, files: FileWithPreview[], searchToolEnabled?: boolean, otherTools?: string[] }) => {
          emitter.emit('langdb_chatSubmit', props);
          setCurrentInput('');
          return Promise.resolve();
        }}
        currentInput={currentInput}
        setCurrentInput={setCurrentInput} />}
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
