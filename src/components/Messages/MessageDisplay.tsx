import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { CopyToClipboard } from "./CopyToClipboard";
import rehypeRaw from 'rehype-raw'

interface Segment {
  type: 'json' | 'text';
  content: string;
}

/**
 * Scans the input string for JSON segments.
 * When a '{' or '[' is found, it attempts to find the matching closing '}' or ']' 
 * while being careful with strings and escapes.
 * If a valid JSON substring is extracted (i.e. JSON.parse succeeds), it’s marked as a JSON segment.
 * Otherwise, the substring is treated as normal text.
 */
function extractJSONSegments(message: string): Segment[] {
  const segments: Segment[] = [];
  let currentIndex = 0;

  while (currentIndex < message.length) {
    // Look for the next potential JSON starting character.
    const nextObj = message.indexOf('{', currentIndex);
    const nextArr = message.indexOf('[', currentIndex);
    let nextIndexCandidates = [];
    if (nextObj !== -1) nextIndexCandidates.push(nextObj);
    if (nextArr !== -1) nextIndexCandidates.push(nextArr);

    // No potential JSON found; push the rest as text.
    if (nextIndexCandidates.length === 0) {
      segments.push({ type: 'text', content: message.slice(currentIndex) });
      break;
    }

    const nextIndex = Math.min(...nextIndexCandidates);

    // Everything before the JSON candidate is treated as text.
    if (nextIndex > currentIndex) {
      segments.push({ type: 'text', content: message.slice(currentIndex, nextIndex) });
    }

    // Try to extract a potential JSON substring starting at nextIndex.
    const startChar = message[nextIndex];
    const closingChar = startChar === '{' ? '}' : ']';
    let count = 0;
    let inString = false;
    let escape = false;
    let endIndex = nextIndex;

    for (; endIndex < message.length; endIndex++) {
      const char = message[endIndex];

      if (escape) {
        escape = false;
        continue;
      }
      if (char === '\\') {
        escape = true;
        continue;
      }
      if (char === '"') {
        inString = !inString;
      }
      if (!inString) {
        if (char === startChar) count++;
        else if (char === closingChar) count--;
      }
      if (count === 0) {
        endIndex++; // Include the closing character.
        break;
      }
    }

    const potentialJSON = message.slice(nextIndex, endIndex);

    // Attempt to parse the candidate as JSON.
    try {
      JSON.parse(potentialJSON);
      // If successful, push it as a JSON segment.
      segments.push({ type: 'json', content: potentialJSON });
      currentIndex = endIndex;
    } catch {
      // If parsing fails, treat the starting character as plain text and move on.
      segments.push({ type: 'text', content: message[nextIndex] });
      currentIndex = nextIndex + 1;
    }
  }
  let isAllText = segments.every(segment => segment.type === 'text');
  if (isAllText) {
    return [{ type: 'text', content: message }];
  }
  return segments;
}

interface MessageDisplayProps {
  message: string;
}

export const MessageDisplay: React.FC<MessageDisplayProps> = ({ message }) => {
    return <BaseMessageDisplay message={message} />
};




export const BaseMessageDisplay: React.FC<{ message: string }> = ({ message }) => {
  return <ReactMarkdown
  remarkPlugins={[remarkGfm]}
  rehypePlugins={[rehypeRaw]}
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
    p({ children, ...props }) {
        // check if children is a string
        if (typeof children === 'string') {
            let segments = extractJSONSegments(children);
            return <p  {...props}>{segments.map((segment, idx) => {
                if (segment.type === 'json') {
                    return <BaseMessageDisplay message={`\`\`\`json\n${segment.content}`} />
                } else {
                    return <p key={idx} {...props}>{segment.content}</p>
                }
            })}</p>
        }
        return <p  {...props}>{children}</p>
    }
    
  }}
>
  {message}
</ReactMarkdown>
};