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
import { ChatCompletionChunk, ToolCall } from "../events";
import { emitter } from "./EventEmiter";
import { XCircleIcon } from "@heroicons/react/24/solid";
import { EventSourceMessage } from "@microsoft/fetch-event-source";
import { useDropzone } from "react-dropzone";
import { PaperClipIcon } from "@heroicons/react/24/outline";
import { useInViewport } from "ahooks";
import { InititalPrompt, MCPTools } from "../dto/ParamInput";
import { SystemMessage } from "./Messages/System";
/**
 * MessageRenderer component displays chat messages with appropriate styling based on message type
 */
const MessageRenderer: React.FC<{
  message: ChatMessage;
  personaOptions: PersonaOptions;
  isLastMessage?: boolean;
  isTyping?: boolean;
  widgetProps: WidgetProps;
}> = ({ message, personaOptions, widgetProps, isLastMessage, isTyping }) => {
  // Determine if this is a human message for styling purposes
  const isHumanMessage = message.type === MessageType.HumanMessage;
  const isSystemMessage = message.type === MessageType.SystemMessage;
  
  return (
    <article 
      className={`
        flex mb-4 group
        ${isHumanMessage ? 'justify-end' : 'justify-start'} 
        ${isLastMessage && !message.created_at ? 'min-h-[50vh] items-start justify-start' : 'items-start'}
        transition-all duration-200 ease-in-out
        ${isSystemMessage ? 'px-2' : ''}
      `}
      role="listitem"
      aria-label={`${isHumanMessage ? 'Your' : isSystemMessage ? 'System' : 'Assistant'} message`}
    >
      <div 
        className={`
          max-w-[85%] sm:max-w-[75%] text-sm
          ${isHumanMessage ? 'order-1' : 'order-2'}
          ${isSystemMessage ? 'w-full' : ''}
        `}
      >
        {isHumanMessage ? (
          <HumanMessage msg={message} persona={personaOptions.user} />
        ) : message.type === MessageType.SystemMessage ? (
          <SystemMessage msg={message} widgetProps={widgetProps} persona={personaOptions.assistant} />
        ) : (
          <AiMessage 
            msg={message} 
            persona={personaOptions.assistant} 
            widgetProps={widgetProps} 
            isTyping={isTyping} 
          />
        )}
      </div>
    </article>
  )
};

// Custom hook for handling message submission
const useMessageSubmission = (props: WidgetProps, chatState: ReturnType<typeof useChatState>) => {
  const abortControllerRef = React.useRef<AbortController | null>(null);
  const {
    setMessages,
    setCurrentInput,
    setTyping,
    setError,
    setMessageId,
    setThreadId,
    appendUsage,
    messageId,
    traceId,
    setTraceId,
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

  const handleMessage = useCallback((msg: EventSourceMessage, currentThreadId?: string, currentMessageId?: string, currentTraceId?: string | null, currentRunId?: string | null) => {
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
          emitter.emit('langdb_usageStats', { usage: event.usage, threadId: currentThreadId, widgetId: props.widgetId });
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
            tool_calls: [...(lastMessage.tool_calls || []), ...event.choices.map((choice) => choice.delta.tool_calls).flat()].filter((toolCall) => toolCall !== undefined) as ToolCall[],
            run_id: currentRunId || undefined
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
      initialPrompts?: InititalPrompt[],
      variables?: Record<string, any>
      mcpTools?: MCPTools[],
      dynamicBody?: any
    }) => {
    abortControllerRef.current = new AbortController();

    const { inputText, files, searchToolEnabled, otherTools, mcpTools, initialPrompts, variables } = inputProps;

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
    
    setMessages((prevMessages) => {
     return [ ...prevMessages, newMessage]
    });
    setCurrentInput('');
    setTyping(true);
    setError(undefined);
    scrollToBottom();
    let currentThreadId = threadId;
    let widgetId = props.widgetId;

    try {
      widgetId && emitter.emit('langdb_chatWindow', { widgetId, state: 'SubmitStart', threadId: currentThreadId, messageId: messageId });
      let currentMessageId = messageId;
      let currentTraceId = traceId;
      let currentRunId: string | undefined = undefined;
      let isFirstSignal = true;
      await onSubmit({
        initialPrompts,
        variables,
        mcpTools,
        searchToolEnabled,
        otherTools,
        previousMessages: messages,
        widgetProps: props,
        files,
        message: inputText,
        threadId,
        signal: abortControllerRef.current?.signal,
        onerror: (error) => {
          widgetId && emitter.emit('langdb_chatWindow', { widgetId, state: 'SubmitError', error: error instanceof Error ? error.message : String(error), threadId: currentThreadId });
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
            const runIdHeader = response.headers.get('X-Run-Id');
            currentThreadId = threadIdHeader || currentThreadId
            currentMessageId = messageIdHeader || currentMessageId
            currentTraceId = traceIdHeader || currentTraceId
            currentRunId = runIdHeader || currentRunId
            setThreadId(currentThreadId);
            setMessageId(currentMessageId);
            setTraceId(currentTraceId);
          }
          widgetId && emitter.emit('langdb_chatWindow', { widgetId, state: 'Processing', threadId: currentThreadId, messageId: currentMessageId, traceId: currentTraceId });
          return handleOpen(response, currentThreadId)
        },
        onmessage: (msg) => {
          widgetId && emitter.emit('langdb_chatWindow', { widgetId, state: 'Processing', threadId: currentThreadId, messageId: currentMessageId, traceId: currentTraceId, runId: currentRunId });
          handleMessage(msg, currentThreadId || threadId, currentMessageId || messageId, currentTraceId, currentRunId)
          if (isFirstSignal) {
            setTimeout(() => {
              scrollToBottom();
            },);
          }
          isFirstSignal = false;
          return
        },
        onclose: () => {
          widgetId && emitter.emit('langdb_chatWindow', { widgetId, state: 'SubmitEnd', threadId: currentThreadId, messageId: currentMessageId, traceId: currentTraceId, runId: currentRunId });
          // emitter.emit('langdb_chatSubmitSuccess', { threadId: currentThreadId });
          setMessageId(undefined);
          setTyping(false);
        },
      });
    } catch (error) {
      widgetId && emitter.emit('langdb_chatWindow', { widgetId, state: 'SubmitError', error: error instanceof Error ? error.message : String(error), threadId: currentThreadId, messageId: messageId, traceId: traceId });
      if (error instanceof Error && error.name === 'AbortError') {
        // Handle abort specifically if needed
        return;
      }
      setError(error instanceof Error ? error.message : String(error));
      setTyping(false);
      // emitter.emit('langdb_chatSubmitError', { error: error instanceof Error ? error.message : String(error) });
    } finally {
      abortControllerRef.current = null;
      widgetId && emitter.emit('langdb_chatWindow', { widgetId, state: 'SubmitEnd', threadId: currentThreadId, messageId: messageId, traceId: traceId });
      // emitter.emit('langdb_chatSubmitDone', { threadId: currentThreadId });
    }
  },
    [
      props,
      threadId,
      traceId,
      setTraceId,
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

  const terminateChat = useCallback(() => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
      abortControllerRef.current = null;
    }
    setTyping(false);
    setMessageId(undefined);
  }, [setTyping, setMessageId]);

  return {
    submitMessageFn,
    messagesEndRef,
    scrollToBottom,
    terminateChat
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
    setError,
    setMessages,
    setThreadId,
  } = chatState;
  const { initialPrompts, mcpTools, variables, dynamicBody } = props

  const { hideChatInput, threadId } = props

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

  const { submitMessageFn: handleSubmit, messagesEndRef, terminateChat, scrollToBottom } = useMessageSubmission(props, chatState)


  const onSubmitWrapper = useCallback((inputProps: { inputText: string, files: FileWithPreview[], searchToolEnabled?: boolean, otherTools?: string[] }) => {
    return handleSubmit({...inputProps, initialPrompts, mcpTools, variables, dynamicBody});
  }, [handleSubmit, initialPrompts, mcpTools, variables, dynamicBody]);

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
      emitter.emit('langdb_input_fileAdded', { files });
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
  // Add cleanup function


  useEffect(() => {
    const handleTerminate = (input: { threadId: string, widgetId: string }) => {
      if (input.threadId === threadId || (input.widgetId && input.widgetId === props.widgetId)) {
        terminateChat();
        setError('Chat terminated by user');
      }
    };
    emitter.on('langdb_chatTerminate', handleTerminate);
    return () => {
      emitter.off('langdb_chatTerminate', handleTerminate);
    };
  }, [terminateChat, setError, threadId]);


  useEffect(() => {
    const handleClearChat = (input: { threadId?: string, widgetId?: string }) => {
      if (input.threadId === threadId || (input.widgetId && input.widgetId === props.widgetId)) {
        terminateChat();
        setMessages([]);
        setThreadId(props.threadId || undefined)
      }
    };
    emitter.on('langdb_clearChat', handleClearChat);
    return () => {
      emitter.off('langdb_clearChat', handleClearChat);
    };
  }, [terminateChat, threadId]);


  useEffect(() => {
    const handleScrollToBottom = (input: { threadId: string | undefined, widgetId: string | undefined }) => {
      if (messages && messages.length > 0 && ((input.threadId === threadId && input.threadId) || (input.widgetId && input.widgetId === props.widgetId))) {
        scrollToBottom();
      }
    };
    emitter.on('langdb_chat_scrollToBottom', handleScrollToBottom);
    return () => {
      emitter.off('langdb_chat_scrollToBottom', handleScrollToBottom);
    };
  }, [messages, threadId, scrollToBottom]);

  useEffect(() => {
    const handleExternalSubmit = ({ inputText, files, searchToolEnabled, otherTools }: { inputText: string, files: FileWithPreview[], searchToolEnabled?: boolean, otherTools?: string[] }) => {
      setCurrentInput(inputText); // Set the input text
      onSubmitWrapper({ inputText, files, searchToolEnabled, otherTools }); // Pass the input text directly
    };
    emitter.on('langdb_input_chatSubmit', handleExternalSubmit);

    return () => {
      emitter.off('langdb_input_chatSubmit', handleExternalSubmit);
    };
  }, [onSubmitWrapper, setCurrentInput]);
  const [inViewport] = useInViewport(messagesEndRef);

  return (
    <div key={props.widgetId} className="langdb-chat mx-auto flex flex-1 flex-col lg:max-w-[40rem] xl:max-w-[48rem] w-full h-full">
      <div {...getRootProps()} className="langdb-message-section flex flex-col flex-1 justify-center overflow-y-auto p-4 pb-0 relative">
        {isDragActive && (
          <div className="absolute gap-20 flex-col inset-0 bg-black bg-opacity-50 flex justify-center items-center text-white text-xl z-50">
            <PaperClipIcon className="h-12 w-12" />
            <div className="flex flex-col justify-center items-center">
              <span className=" font-bold">Add anything</span>
              <span>Drop any file here to add it to conversation</span>
            </div>
          </div>
        )}
        {messages.length === 0 && (props.renderStarter ? props.renderStarter() : <StarterDisplay starters={props.starters} onStarterClick={(prompt: string) => {
          setCurrentInput(prompt);
          handleSubmit({ inputText: prompt, files: [] });
        }} />)}
        <div className="langdb-message-render flex-1 overflow-auto">
          {messages.filter(m => m.type === MessageType.HumanMessage || m.type !== MessageType.ToolMessage).map((msg: ChatMessage) => {
            const isLastMessage = msg.id === messages[messages.length - 1].id;

            return <MessageRenderer key={msg.id} message={msg} personaOptions={personaOptions} widgetProps={props} isLastMessage={isLastMessage} isTyping={typing && isLastMessage} />
          })}
        </div>

        {error && (
          <div className=" bg-red-100 flex  p-2 rounded-lg items-center justify-between mb-4">
            <div className="flex flex-1">
              <span className="text-red-700 line-clamp-3">{error}</span>
            </div>
            <XCircleIcon
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
                setError(undefined);
              }}
              className="h-4 w-4 text-red-500 hover:text-red-700 hover:cursor-pointer rounded-full" />
          </div>
        )}
        <div ref={messagesEndRef} />
        {!inViewport && (
          <button
            onClick={scrollToBottom}
            className="cursor-pointer absolute z-10 rounded-full bg-clip-padding border text-token-text-secondary border-[hsla(0,0%,100%,.1)] bg-background right-1/2 translate-x-1/2 w-8 h-8 flex items-center justify-center bottom-5"
            aria-label="Scroll to bottom"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon-md text-white"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 21C11.7348 21 11.4804 20.8946 11.2929 20.7071L4.29289 13.7071C3.90237 13.3166 3.90237 12.6834 4.29289 12.2929C4.68342 11.9024 5.31658 11.9024 5.70711 12.2929L11 17.5858V4C11 3.44772 11.4477 3 12 3C12.5523 3 13 3.44772 13 4V17.5858L18.2929 12.2929C18.6834 11.9024 19.3166 11.9024 19.7071 12.2929C20.0976 12.6834 20.0976 13.3166 19.7071 13.7071L12.7071 20.7071C12.5196 20.8946 12.2652 21 12 21Z" fill="currentColor"></path></svg>
          </button>
        )}
      </div>
      {!hideChatInput && <ChatInput
        searchToolEnabled={props.searchToolEnabled}
        toggleSearchTool={props.toggleSearchTool}
        onSubmit={(props: { inputText: string, files: FileWithPreview[], searchToolEnabled?: boolean, otherTools?: string[] }) => {
          emitter.emit('langdb_input_chatSubmit', props);
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
