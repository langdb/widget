import React, { useCallback, useEffect } from "react";
import { useScrollToBottom } from "../hooks/ScrollToBottom";
import { WidgetProps } from "./Widget";
import { Avatar } from "./Icons";
import { UserCircleIcon } from "@heroicons/react/24/outline";
import { v4 as uuidv4 } from 'uuid';
import { useChatState } from "../hooks/ChatState";
import { onSubmit } from "./adapter";
import { ChatMessage } from "../dto/ChatMessage";
import { HumanMessage } from "./Messages/Human";
import { AiMessage } from "./Messages/Ai";
import { ChatInput } from "./ChatInput";
import { PersonaOptions } from "../dto/PersonaOptions";

// New component for rendering messages
const MessageRenderer: React.FC<{ message: ChatMessage; personaOptions: PersonaOptions }> = ({ message, personaOptions }) => (
  <div className={`flex mb-2 ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
    <div className="max-w-3/4">
      {message.role === 'user'
        ? <HumanMessage msg={message} avatar={personaOptions.user?.avatar} />
        : <AiMessage message={message.message} avatar={personaOptions.assistant?.avatar} />
      }
    </div>
  </div>
);

// Custom hook for handling message submission
const useMessageSubmission = (props: WidgetProps, chatState: ReturnType<typeof useChatState>) => {
  const { setMessages, setCurrentInput, setTyping, setError, setMessageId, setThreadId, messageId } = chatState;

  return useCallback(async (currentInput: string) => {
    if (currentInput.trim() === '') return;

    setMessages((prevMessages) => [
      ...prevMessages,
      { id: uuidv4(), message: currentInput, role: 'user' }
    ]);
    setCurrentInput('');
    setTyping(true);

    try {
      await onSubmit({
        widgetProps: props,
        message: currentInput,
        threadId: chatState.threadId,
        onopen: async (response) => {
          if (response.ok && response.headers.get('content-type') === "text/event-stream") {
            const threadIdHeader = response.headers.get('X-Thread-Id');
            const messageIdHeader = response.headers.get('X-Message-Id');
            setMessageId(messageIdHeader || undefined);
            setThreadId(threadIdHeader || undefined);
          }
        },
        onmessage: (event) => {
          const newMessage = event.data;
          setMessages((prevMessages) => {
            const lastMessage = prevMessages[prevMessages.length - 1];
            if (lastMessage.role === 'user') {
              return [...prevMessages, { id: messageId || uuidv4(), message: newMessage, role: 'assistant' }];
            } else {
              const updatedLastMessage = { ...lastMessage, message: lastMessage.message + newMessage };
              return [...prevMessages.slice(0, -1), updatedLastMessage];
            }
          });
        },
        onclose: () => {
          setMessageId(undefined);
          setTyping(false);
        },
      });
    } catch (e: unknown) {
      console.error(e);
      setError(e instanceof Error ? e.message : String(e));
      setTyping(false);
    }
  }, [props, setMessages, setCurrentInput, setTyping, setError, setMessageId, setThreadId, messageId]);
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

  const { messagesEndRef, scrollToBottom } = useScrollToBottom();

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  const personaOptions: PersonaOptions = {
    assistant: {
      name: "LangDB",
      tagline: "Easily build and deploy AI agents with SQL. Customize with our React widget on",
      avatar: Avatar,
      ...props.personaOptions?.assistant,
    },
    user: {
      name: "User",
      avatar: UserCircleIcon,
      ...props.personaOptions?.user,
    },
  };

  const handleSubmit = useMessageSubmission(props, chatState);

  const onSubmitWrapper = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    handleSubmit(currentInput);
  }, [handleSubmit, currentInput]);

  return (
    <div className="langdb-chat flex flex-col h-full">
      <div className="langdb-message-section flex flex-col flex-1 justify-center overflow-y-auto p-4">
        {messages.length === 0 && <StarterDisplay starters={props.starters} onStarterClick={(prompt: string) => {
          setCurrentInput(prompt);
          handleSubmit(prompt);
        }} />}
        <div className="flex flex-col flex-1">
          {messages.map((msg: ChatMessage) => (
            <MessageRenderer key={msg.id} message={msg} personaOptions={personaOptions} />
          ))}
          {typing && (
            <div key="typing-ai" className="flex justify-start">
              <div className="max-w-3/4">
                <AiMessage typing={true} avatar={personaOptions.assistant?.avatar} />
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
        <ChatInput onSubmit={onSubmitWrapper} currentInput={currentInput} setCurrentInput={setCurrentInput} />
      </div>
    </div>
  );
};

const StarterDisplay: React.FC<{ starters: WidgetProps['starters'], onStarterClick: (prompt: string) => void }> = ({ starters, onStarterClick }) => {
  return <div className="flex  h-full self-center flex-1 flex-col justify-center items-center">
    <div className="flex flex-2 gap-3 flex-col justify-center items-center">
      <Avatar width={48} height={48} />
      <span className="font-bold">LangDB</span>
      <div className="flex flex-col justify-center items-center">
        <span className="text-sm">Easily build and deploy AI agents with SQL</span>
        <span className="text-sm">Customize with our React widget on</span>
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
