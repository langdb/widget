import {
  AiChatProps,
} from "@nlux/react";
import "../tailwind.css";
import './Widget.css';
import { AdapterProps, onSubmit } from "./adapter";
import { useCallback, useState } from "react";
import React, { useRef } from "react";
import { v4 as uuidv4 } from 'uuid';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useEffect } from "react";
import { ArrowUpIcon, CheckIcon, ClipboardDocumentIcon } from "@heroicons/react/24/outline";
import { PencilIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import { Avatar } from "./Icons";

type AdvancedOptions = Omit<AiChatProps, "adapter">;

export interface Persona {
  avatar: string | JSX.Element;
  name: string;
  tagline?: string;
}

export interface PersonaOptions {
  assistant?: Persona;
  user?: Persona;
}

export interface WidgetProps extends AdapterProps {
  personaOptions?: Partial<{
    assistant?: Partial<Persona>;
    user?: Partial<Persona>;
  }>;
  messages?: ChatMessage[];
  style?: any;
  className?: any;
  controls?: {
    enableFiles?: boolean
  }
  advancedOptions?: AdvancedOptions;
}

export const Widget: React.FC<WidgetProps> = React.memo((props) => {
  const className = props.className || "";
  return (
    <div className="flex flex-col w-[100%] h-full">
      <div className={`flex-1 w-full relative`}>
        <main
          className={`items-center justify-between  ${className} h-full absolute`}
          style={props.style || {}}
        >
          <ChatComponent {...props} />
        </main>
      </div>
    </div>
  );
});

interface ChatMessage {
  id: string;
  message: string;
  role: 'user' | 'assistant';
}

export const CopyToClipboard: React.FC<{ content: string } & React.HTMLAttributes<HTMLDivElement>> = ({ content, className, ...restProps }) => {
  const [copied, setCopied] = useState(false);
  const handleCopy = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };
  return (
    <div className={`items-center flex flex-row text-xs ${className}`} onClick={handleCopy} {...restProps}>
      {copied ? (
        <CheckIcon className="h-4 ml-2 text-green animate-fadeIn" />
      ) : (
        <ClipboardDocumentIcon className="h-4 ml-2" />
      )}
    </div>
  );
};
const ChatComponent: React.FC<WidgetProps> = (props) => {
  const [messages, setMessages] = useState<ChatMessage[]>(props.messages || []);
  const [currentInput, setCurrentInput] = useState<string>('');
  const [threadId, setThreadId] = useState<string | undefined>(props.threadId);
  const [messageId, setMessageId] = useState<string | undefined>();
  const [typing, setTyping] = useState(false);
  const [error, setError] = useState<string | undefined>();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const personaOptions = Object.assign({}, {
    assistant: Object.assign({}, {
      name: "LangDB",
      tagline: `
              Easily build and deploy AI agents with SQL.
              Customize with our React widget on`,
      avatar: Avatar,
    }, props.personaOptions?.assistant),
    user: Object.assign({}, {
      name: "User",
      avatar: UserCircleIcon,
    }),
  }, props.personaOptions?.user);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    if (currentInput.trim() === '') return;
    setMessages((prevMessages) => [...prevMessages, { id: uuidv4(), message: currentInput, role: 'user' }]);
    setCurrentInput('');
    setTyping(true);
    try {
      await onSubmit({
        widgetProps: props,
        message: currentInput,
        onopen: async (response) => {
          if (response.ok && response.headers.get('content-type') === "text/event-stream") {
            const threadIdHeader = response.headers.get('X-Thread-Id') as string | undefined;
            const messageIdHeader = response.headers.get('X-Message-Id') as string | undefined;
            setMessageId(messageIdHeader || '');
            setThreadId(threadIdHeader || '');
          }
        },
        onmessage: (event) => {
          const newMessage = event.data;
          setMessages((prevMessages) => {
            const lastMessage = prevMessages[prevMessages.length - 1];
            if (lastMessage.role === 'user') {
              return [...prevMessages, { id: messageId, message: newMessage, role: 'assistant' } as ChatMessage];
            } else {
              lastMessage.message = lastMessage.message + newMessage;
              let messagesWithoutLast = prevMessages.slice(0, prevMessages.length - 1);
              return [...messagesWithoutLast, lastMessage];
            }
          });

        },
        onclose: () => {
          setMessageId(undefined);
          setTyping(false);
        },
      });
    } catch (e: any) {
      console.log(e);
      setError(e.toString());
      setTyping(false);
    }



  }, [threadId, currentInput, messageId]);

  const HumanMessage = ({ msg }: { msg: ChatMessage }) => {
    const C = personaOptions.user.avatar;
    return <div className="flex items-center gap-2 mb-2">
      <div className={`rounded-lg p-2 human-message`}>
        {msg.message}
      </div>
      <C className="h-6 w-6 rounded-full" />
    </div>
  }
  const AiMessage = ({ message, typing }: { message?: string, typing: boolean }) => {
    const C = personaOptions.assistant.avatar;
    return <div className="flex items-center gap-2">
      <C className="h-6 w-6 rounded-full" />
      <div className={`rounded-lg p-2 ai-message`}>
        <ReactMarkdown
          components={{
            code(props) {
              const { children, className, node, ref, ...rest } = props
              const match = /language-(\w+)/.exec(className || '');
              return match ? (
                <div className="relative">
                  <CopyToClipboard content={String(children).replace(/\n$/, '')} className="absolute top-0 right-0 m-2 p-1 rounded text-xs" />
                  <SyntaxHighlighter
                    {...rest}
                    style={vscDarkPlus}
                    language={match[1]}
                    PreTag="div"
                  >
                    {String(children).replace(/\n$/, '')}
                  </SyntaxHighlighter>
                </div>
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              );
            },
            blockquote({ children, ...props }) {
              return (
                <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-600" {...props}>
                  {children}
                </blockquote>
              );
            }
          }}
        >
          {message}
        </ReactMarkdown>
      </div>
      {typing && <div className="rounded-lg p-2 ai-message flex items-center gap-2 animate-pulse">
        <PencilIcon className="h-5 w-5 text-gray-500" />
        <span>Typing...</span>
      </div>}
    </div>
  }
  return (
    <div className="langdb-chat overflow-y-auto h-full">
      <div className="mx-auto flex flex-col h-full md:gap-5 lg:gap-6 md:max-w-3xl lg:max-w-[40rem] xl:max-w-[48rem]">
        <div className="flex flex-col flex-1 gap-4">
          {messages.map((msg: ChatMessage, idx: number) => (
            <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-3/4`}>
                {msg.role === 'user' && <HumanMessage msg={msg} />}
                {msg.role !== 'user' && <AiMessage typing={typing && idx == messages.length - 1} message={msg.message} />}
              </div>
            </div>
          ))}


          <div ref={messagesEndRef} />
          {error && (
            <div className="error-message bg-red-100 text-red-700 p-2 rounded-lg mb-4">
              {error}
            </div>
          )}
        </div>
        <form onSubmit={handleSubmit} className="langdb-input-container flex items-center p-2 rounded-lg">
          <input
            type="text"
            value={currentInput}
            onChange={(e) => setCurrentInput(e.target.value)}
            placeholder="Type your message..."
            className="langdb-input flex-1 p-2 ring-0 focus:ring-0 focus:outline-none"
          />
          <button
            type="submit"
            className={`send-button ml-2 p-2 rounded-full`}
            disabled={!currentInput}
          >
            <ArrowUpIcon className="h-5 w-5" />
          </button>
        </form>
      </div>
    </div>
  );
};