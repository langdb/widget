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
import React from "react";
import { v4 as uuidv4 } from 'uuid';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useRef } from "react";
import { useEffect } from "react";

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

export const LangdbWidget: React.FC<WidgetProps> = React.memo((props) => {
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
        console.log('==== Received message:', event.data);
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
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="chat-container flex flex-col h-full">
      <div className="flex-1 p-4 overflow-y-auto bg-gray-100">
        {messages.map((msg) => (
          <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-3/4 mb-2 p-2 rounded-lg ${msg.role === 'user' ? 'bg-blue-200' : 'bg-gray-200'}`}>
              {msg.role === 'assistant' ? (
                <ReactMarkdown
                  components={{
                    code({ node, className, children, ...props }) {
                      const match = /language-(\w+)/.exec(className || '');
                      return match ? (
                        <div className="relative">
                          <CopyToClipboard text={String(children).replace(/\n$/, '')} onCopy={handleCopy}>
                            <button className="absolute top-0 right-0 m-2 p-1 bg-gray-200 rounded text-xs">
                              {copied ? 'Copied' : 'Copy'}
                            </button>
                          </CopyToClipboard>
                          <SyntaxHighlighter
                            style={vscDarkPlus}
                            language={match[1]}
                            PreTag="div"
                            {...props}
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
      <form onSubmit={handleSubmit} className="message-form flex items-center p-2 bg-white border-t border-gray-300">
        <input
          type="text"
          value={currentInput}
          onChange={(e) => setCurrentInput(e.target.value)}
          placeholder="Type your message..."
          className="message-input flex-1 p-2 border border-gray-300 rounded-lg"
        />
        <button type="submit" className="send-button ml-2 p-2 bg-blue-500 text-white rounded-lg">Send</button>
      </form>
    </div>
  );
};