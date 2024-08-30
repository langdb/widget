import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { CopyToClipboard } from "./CopyToClipboard";
import { PencilIcon } from "@heroicons/react/24/outline";
import { Persona } from "../../dto/PersonaOptions";
import { Avatar } from "../Icons";
import { AvatarItem } from "./AvatarItem";
import { useState } from "react";
import { HandThumbDownIcon, HandThumbUpIcon } from "@heroicons/react/24/outline";
import { HandThumbDownIcon as SHandThumbDownIcon, HandThumbUpIcon as SHandThumbUpIcon } from "@heroicons/react/24/solid";
import { DEV_SERVER_URL } from "../adapter";

export interface AiMessageProps { message?: string; typing?: boolean; persona?: Persona, threadId?: string, messageId?: string, getHeaders: () => Promise<any>, serverUrl?: string };
export const AiMessage: React.FC<AiMessageProps> = ({ message, typing, persona, threadId, messageId, getHeaders, serverUrl }) => {
  const [score, setScore] = useState<number | undefined>();
  const [error, setError] = useState<string | undefined>();
  const handleScore = async (score: number) => {
    if (!threadId || !messageId) {
      setError("streaming message doesnt have thread and messageIds");
      return;
    }
    let scoreRequest = {
      thread_id: threadId,
      message_id: messageId,
      score: score,
    };
    try {
      const headers = await getHeaders();
      const apiUrl = serverUrl || DEV_SERVER_URL;
      const response = await fetch(`${apiUrl}/threads/score`, {
        method: 'POST',
        headers,
        body: JSON.stringify(scoreRequest),
      });

      if (!response.ok) {
        throw new Error('Failed to record score');
      }
      setScore(score);
    } catch (error: any) {
      setError(error.toString());
      console.error('Error recording score:', error);
    }

  };

  return (<div className="flex items-center gap-2">
    <div>
      {!persona ? <AvatarItem className="h-6 w-6 rounded-full" name={"User"} /> : (persona.url ? <AvatarItem name={persona.name} imageUrl={persona.url} className="h-6 w-6 rounded-full" /> : <Avatar className="h-6 w-6 rounded-full" />)}
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
    {!typing && <div className="flex items-center justify-start space-x-1">
      <button
        className=" hover:bg-gray-600 hover:text-white rounded focus:outline-none"
        onClick={() => handleScore(1)}
      >
        {score == undefined && <HandThumbUpIcon className="h-4 w-4" />}
        {score === 1 && <SHandThumbUpIcon className="h-4 w-4 animate-fadeIn" />}
      </button>
      <button
        className="p-2 hover:bg-gray-600 rounded focus:outline-none"
        onClick={() => handleScore(-1)}
      >
        {score == undefined && <HandThumbDownIcon className="h-4 w-4" />}
        {score === -1 && <SHandThumbDownIcon className="h-4 w-4 animate-fadeIn" />}
      </button>
      {error && <div className="text-red text-xs animate-fadeIn p-2 rounded-md">{error}</div>}
    </div>}
    {
      typing && (
        <div className="rounded-lg p-2 ai-message flex items-center gap-2 animate-pulse">
          <PencilIcon className="h-5 w-5 text-gray-500" />
          <span>Typing...</span>
        </div>
      )
    }
  </div >)
};