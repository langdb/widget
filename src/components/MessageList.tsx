import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { CopyToClipboard } from 'react-copy-to-clipboard';

interface ChatMessage {
  id: string;
  message: string;
  role: 'user' | 'assistant';
}

interface MessageListProps {
  messages: ChatMessage[];
}

export const MessageList: React.FC<MessageListProps> = ({ messages }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex-1 p-4 overflow-y-auto bg-gray-100">
      {messages.map((msg) => (
        <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
          <div className={`max-w-3/4 mb-2 p-2 rounded-lg ${msg.role === 'user' ? 'bg-blue-200' : 'bg-gray-200'}`}>
            {msg.role === 'assistant' ? (
              <ReactMarkdown
                components={{
                  code({ node, inline, className, children, ...props }) {
                    const match = /language-(\w+)/.exec(className || '');
                    return !inline && match ? (
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
    </div>
  );
};