import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { CopyToClipboard } from "./CopyToClipboard";
import { PencilIcon } from "@heroicons/react/24/outline";
import { Persona } from "../../dto/PersonaOptions";
import { Avatar } from "../Icons";
import {AvatarItem} from "./AvatarItem";


export const AiMessage: React.FC<{ message?: string; typing?: boolean; persona?: Persona }> = ({ message, typing, persona }) => (
  <div className="flex items-center gap-2">
    <div>
    {!persona ? <AvatarItem className="h-6 w-6 rounded-full" name={"User"} /> : ( persona.url ? <AvatarItem name={persona.name} imageUrl={persona.url} className="h-6 w-6 rounded-full" /> : <Avatar className="h-6 w-6 rounded-full"/>)}
    </div>
    <div className="rounded-lg p-2 ai-message">
      <ReactMarkdown
        components={{
          code({ node, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '');
            return match ? (
              <div className="relative">
                <CopyToClipboard content={String(children).replace(/\n$/, '')} className="absolute top-0 right-0 m-2 p-1 rounded text-xs" />
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
    {typing && (
      <div className="rounded-lg p-2 ai-message flex items-center gap-2 animate-pulse">
        <PencilIcon className="h-5 w-5 text-gray-500" />
        <span>Typing...</span>
      </div>
    )}
  </div>
);