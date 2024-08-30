import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { CopyToClipboard } from "./CopyToClipboard";
import { } from "@heroicons/react/24/outline";
import { Persona } from "../../dto/PersonaOptions";
import { Avatar } from "../Icons";
import { AvatarItem } from "./AvatarItem";
import { ChatMessage } from "../../dto/ChatMessage";
import { useCallback, useState } from "react";
import { HandThumbDownIcon as SHandThumbDownIcon, HandThumbUpIcon as SHandThumbUpIcon } from "@heroicons/react/24/solid";
import { ArrowUpTrayIcon, PencilIcon, HandThumbDownIcon, HandThumbUpIcon } from "@heroicons/react/24/outline";
import { DEV_SERVER_URL } from "../adapter";


export const AiMessage: React.FC<{ msg?: ChatMessage; typing?: boolean; persona?: Persona }> = ({ msg, typing, persona }) => {
  
  console.log("==== msg ====", msg);
  const [score, setScore] = useState<number | undefined>();
  const [error, setError] = useState<string | undefined>();
  const threadId = msg?.threadId;
  const messageId = msg?.id;
  const handleScore = useCallback(async (score: number) => {
    if (threadId && messageId) {
      try {
        const scoreRequest = {
          thread_id: threadId,
          message_id: messageId,
          score: score,
        };
        const response = await fetch(`${DEV_SERVER_URL}/threads/score`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ score })
        });
        if (!response.ok) {
          setError('Failed to submit feedback');
        }
        setScore(score);
      } catch (error) {
        setError('Failed to submit feedback');
      }
    }
  }, [messageId, threadId]);


  return <div className="flex items-center gap-2">
    <div>
      {!persona ? <AvatarItem className="h-6 w-6 rounded-full" imageUrl="/image.png" name={'ai'} /> : (persona.url ? <AvatarItem name={persona.name} imageUrl={persona.url} className="h-6 w-6 rounded-full" /> : <Avatar className="h-6 w-6 rounded-full" />)}
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
        {msg?.message}
      </ReactMarkdown>
    </div>
    {typing && (
      <div className="rounded-lg p-2 ai-message flex items-center gap-2 animate-pulse">
        <PencilIcon className="h-5 w-5 text-gray-500" />
        <span>Typing...</span>
      </div>
    )}
    {!typing && threadId && messageId && <>
      <div className="flex items-center justify-start space-x-1">
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
      </div>
    </>}
  </div>
};