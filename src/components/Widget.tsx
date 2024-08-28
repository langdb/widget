import {
  ChatItem,
  AiChatProps,
  AssistantPersona,
  UserPersona
} from "@nlux/react";
import "../css/langdb/main.css";
import "../tailwind.css";
import { AdapterProps, onSubmit } from "./adapter";
import { useCallback, useState } from "react";
import React, { useRef } from "react";
import { v4 as uuidv4 } from 'uuid';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useEffect } from "react";
import { ArrowUpIcon, CheckIcon, ClipboardDocumentIcon } from "@heroicons/react/24/outline";

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
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [currentInput, setCurrentInput] = useState<string>('');
  const [threadId, setThreadId] = useState<string | undefined>(props.threadId);
  const [messageId, setMessageId] = useState<string | undefined>();
  const messagesEndRef = useRef<HTMLDivElement>(null);
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
    // Send message to back
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
        setCurrentInput('');
      },
    });


  }, [threadId, currentInput, messageId]);
  return (
    <div className="langdb-chat overflow-y-auto">
      <div className="mx-auto flex flex-col h-full md:gap-5 lg:gap-6 md:max-w-3xl lg:max-w-[40rem] xl:max-w-[48rem]">
        <div className="flex flex-1 gap-4">
          {messages.map((msg) => (
            <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-3/4 mb-2 p-2 rounded-lg ${msg.role === 'user' ? 'human-message text-darkcolorGray bg-darkHeader' : 'ai-message text-darkcolorWhite'}`}>
                {msg.role === 'assistant' ? (
                  <ReactMarkdown
                    components={{
                      code(props) {
                        const { children, className, node, ref, ...rest } = props
                        const match = /language-(\w+)/.exec(className || '');
                        return match ? (
                          <div className="relative">
                            <CopyToClipboard content={String(children).replace(/\n$/, '')} className="absolute top-0 right-0 m-2 p-1 bg-gray-200 dark:bg-gray-600 rounded text-xs" />
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
                    {msg.message}
                  </ReactMarkdown>
                ) : (
                  msg.message
                )}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
        <form onSubmit={handleSubmit} className="langdb-input-container flex items-center p-2 dark:bg-darkHeader rounded-lg">
          <input
            type="text"
            value={currentInput}
            onChange={(e) => setCurrentInput(e.target.value)}
            placeholder="Type your message..."
            className="langdb-input flex-1 p-2 rounded-lg border dark:bg-darkHeader ring-0 focus:ring-0 ocus:outline-none dark:text-darkcolorGray dark:border-none"
          />
          <button
            type="submit"
            className={`send-button ml-2 p-2 rounded-full ${currentInput ? 'bg-darkcolorGray text-white' : 'bg-gray-100 text-gray-500 cursor-not-allowed'}`}
            disabled={!currentInput}
          >
            <ArrowUpIcon className="h-5 w-5" />
          </button>
        </form>
      </div>
    </div>
  );
};