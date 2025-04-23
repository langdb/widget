import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { CopyToClipboard } from "./CopyToClipboard";
import rehypeRaw from 'rehype-raw'
import behead from 'remark-behead';
import rehypeExternalLinks from 'rehype-external-links'

import remarkFlexibleParagraphs from "remark-flexible-paragraphs";

interface MessageDisplayProps {
  message: string;
}

export const MessageDisplay: React.FC<MessageDisplayProps> = ({ message }) => {
    return <BaseMessageDisplay message={message} />
};

export const BaseMessageDisplay: React.FC<{ message: string }> = ({ message }) => {
  return <ReactMarkdown
  remarkPlugins={[remarkGfm, behead, remarkFlexibleParagraphs]}
  rehypePlugins={[rehypeRaw, [rehypeExternalLinks, {target: '_blank'}]]}
  components={{
    code({ node, className, children, ...props }) {
      const match = /language-(\w+)/.exec(className || '');
      return match ? (
        <div className="relative">
          <CopyToClipboard content={String(children).replace(/\n$/, '')} className="absolute top-0 right-0 m-2 p-1 rounded text-xs" />
          <div style={{ maxHeight: '400px', overflow: 'auto', overflowX: 'auto' }}>
            <SyntaxHighlighter
              style={vscDarkPlus as any}
              language={match[1]}
              PreTag="div"
              {...props}
              ref={props.ref as React.LegacyRef<SyntaxHighlighter>}
            >
              {String(children).replace(/\n$/, '')}
            </SyntaxHighlighter>
          </div>
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
    },
    h1({ children, ...props }) {
      return <h1 className="text-2xl font-bold" {...props}>{children}</h1>
    },
    h2({ children, ...props }) {
      return <h2 className="text-xl font-bold" {...props}>{children}</h2>
    },
    h3({ children, ...props }) {
      return <h3 className="text-lg font-bold" {...props}>{children}</h3>
    },
    h4({ children, ...props }) {
      return <h4 className="text-base font-bold" {...props}>{children}</h4>
    },
    h5({ children, ...props }) {
      return <h5 className="text-sm font-bold" {...props}>{children}</h5>
    },
    h6({ children, ...props }) {
      return <h6 className="text-xs font-bold" {...props}>{children}</h6>
    },
    ul({ children, ...props }) {
      return <ul className="list-disc list-inside" {...props}>{children}</ul>
    },
    ol({ children, ...props }) {
      return <ol className="list-decimal list-inside" {...props}>{children}</ol>
    },
    
    li({ children, ...props }) {
      return <li className="list-item" {...props}>{children}</li>
    },
    a({ children, ...props }) {
      return <a className="text-blue-500 hover:underline hover:text-blue-600" {...props}>{children}</a>
    },
    table({ children, ...props }) {
      return <table className="table-auto" {...props}>{children}</table>
    },
    tr({ children, ...props }) {
      return <tr className="table-row" {...props}>{children}</tr>
    },
    td({ children, ...props }) {
      return <td className="table-cell border border-border p-2" {...props}>{children}</td>
    },
    th({ children, ...props }) {
      return <th className="table-cell border border-border p-2 font-semibold text-blue-500" {...props}>{children}</th>
    },
    img({ children, ...props }) {
      return <img className="w-full" {...props} />
    },

    
    
    p({ children, ...props }) {
        // check if children is a string
        if (typeof children === 'string') {
            let stringChildren = children;
            let jsonObject = null;
            try {
                jsonObject = JSON.parse(stringChildren);
            } catch (e) {
            }
            if (jsonObject) {
                return <BaseMessageDisplay message={`\`\`\`json\n${JSON.stringify(jsonObject, null, 2)}`} />
            }
            return <p  {...props}>{children}</p>
        }
        return <p  {...props}>{children}</p>
    }
    
  }}
>
  {message}
</ReactMarkdown>
};