import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import rehypeExternalLinks from 'rehype-external-links';
import rehypeRaw from 'rehype-raw';
import behead from 'remark-behead';
import remarkGfm from 'remark-gfm';
import { CopyToClipboard } from "./CopyToClipboard";

import ReactJson from 'react-json-view';
import remarkFlexibleParagraphs from "remark-flexible-paragraphs";

interface MessageDisplayProps {
  message: string;
}

const tryParseJson = (str: string) => {
  try {
    return JSON.parse(str);
  } catch (e) {
    return undefined;
  }
}
export const MessageDisplay: React.FC<MessageDisplayProps> = ({ message }) => {
  return <BaseMessageDisplay message={message} />
};

export const BaseMessageDisplay: React.FC<{ message: string }> = ({ message }) => {
  return <ReactMarkdown
    remarkPlugins={[remarkGfm, behead, remarkFlexibleParagraphs]}
    rehypePlugins={[rehypeRaw, [rehypeExternalLinks, { target: '_blank' }]]}
    components={{
      code({ node, className, children, ...props }) {
        const match = /language-(\w+)/.exec(className || '');
        return match ? (
          <div className="relative">
            <CopyToClipboard content={String(children).replace(/\n$/, '')} className="absolute top-0 right-0 m-2 p-1 rounded text-xs" />
            <div style={{ maxHeight: match && match.length > 0 && match[1].toLowerCase().includes('json') ? 'auto' : '400px', overflow: 'auto', overflowX: 'auto' }}>
              {match && match.length > 0 && match[1].toLowerCase().includes('json') ? <div className="px-3 py-2 mr-5"><ReactJson
                name={false}
                collapsed={2}
                displayDataTypes={false}
                displayObjectSize={false}
                enableClipboard={false}
                theme={{
                  base00: 'transparent',
                  base01: '#ffffff20',
                  base02: '#ffffff30',
                  base03: '#ffffff40',
                  base04: '#ffffff60',
                  base05: '#ffffff80',
                  base06: '#ffffffa0',
                  base07: 'rgb(156, 220, 254)',
                  base08: '#ff8c8c',
                  base09: 'rgb(206, 145, 120)',
                  base0A: '#ffeb3b',
                  base0B: '#4caf50',
                  base0C: '#00bcd4',
                  base0D: '#2196f3',
                  base0E: '#9c27b0',
                  base0F: '#ff9800'
                }}
                // theme={'monokai'}
                style={{
                  wordWrap: 'break-word',
                  whiteSpace: 'pre-wrap',
                  borderRadius: '10px',
                  fontSize: '13px',
                  fontFamily: 'ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace',
                  backgroundColor: 'rgba(30,30,30)',
                }}
                src={tryParseJson(String(children).replace(/\n$/, '')) || {}}
              />
              </div> : <SyntaxHighlighter
                style={{ ...vscDarkPlus as any, wordWrap: 'break-word', whiteSpace: 'pre-wrap' }}
                language={match[1]}
                PreTag="div"
                {...props}
                ref={props.ref as React.LegacyRef<SyntaxHighlighter>}
              >
                {String(children).replace(/\n$/, '')}
              </SyntaxHighlighter>}
            </div>
          </div>
        ) : (
          <code className={className} {...props}>
            {children}
          </code>
        );
      },
      hr({ ...props }) {
        return <hr {...props}/>
      },
      pre({ children, ...props }) {
        return <pre {...props} className={`py-0 px-0 mx-0 my-0 whitespace-pre-wrap overflow-auto ${props.className || ''}`}>{children}</pre>
      },
      blockquote({ children, ...props }) {
        return (
          <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-600" {...props}>
            {children}
          </blockquote>
        );
      },
      h1({ children, ...props }) {
        return <h1 className="font-bold text-3xl pb-[0.3em] border-b border-border " {...props}>{children}</h1>
      },
      h2({ children, ...props }) {
        return <h2 className="font-bold text-2xl pb-[0.3em] border-b border-border" {...props}>{children}</h2>
      },
      h3({ children, ...props }) {
        return <h3 className="font-bold text-xl" {...props}>{children}</h3>
      },
      h4({ children, ...props }) {
        return <h4 className="font-bold text-lg " {...props}>{children}</h4>
      },
      h5({ children, ...props }) {
        return <h5 className="font-bold text-md " {...props}>{children}</h5>
      },
      h6({ children, ...props }) {
        return <h6 className="font-bold text-sm" {...props}>{children}</h6>
      },
      ul({ children, ...props }) {
        return <ul {...props} className={`list-disc list-inside my-1 ${props.className || ''}`}>{children}</ul>
      },
      ol({ children, ...props }) {
        return <ol {...props} className={`list-decimal list-inside my-1 ${props.className || ''}`}>{children}</ol>
      },

      li({ children, ...props }) {
        return <li {...props} className={`list-item my-0.5 ${props.className || ''}`}>{children}</li>
      },
      a({ children, ...props }) {
        return <a className="text-blue-500 hover:underline hover:text-blue-600" {...props}>{children}</a>
      },
      table({ children, ...props }) {
        return <table className="table-auto my-1 mx-1" {...props}>{children}</table>
      },
      tr({ children, ...props }) {
        return <tr className="table-row" {...props}>{children}</tr>
      },
      td({ children, ...props }) {
        return <td className="table-cell border border-border px-2 py-1" {...props}>{children}</td>
      },
      th({ children, ...props }) {
        return <th className="table-cell border border-border font-semibold text-blue-500 px-2 py-1" {...props}>{children}</th>
      },
      img({ children, ...props }) {

        return <img {...props} />
      },

      p({ children, ...props }) {
        // check if children is a string
        if (typeof children === 'string') {
          let stringChildren = children;
          let jsonObject = tryParseJson(stringChildren);
          if (jsonObject && jsonObject.length > 0) {
            return <BaseMessageDisplay message={`\`\`\`json\n${JSON.stringify(jsonObject, null, 2)}`} />
          }
          return <p className="whitespace-pre-wrap my-0" {...props}>{children}</p>
        }
        return <p className="whitespace-pre-wrap my-0" {...props}>{children}</p>
      }

    }}
  >
    {message}
  </ReactMarkdown>
};