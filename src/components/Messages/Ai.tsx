import { PencilIcon, ClipboardDocumentIcon, CheckIcon } from "@heroicons/react/24/outline";
import { Persona } from "../../dto/PersonaOptions";
import { Avatar } from "../Icons";
import { AvatarItem } from "./AvatarItem";
import { ChatMessage } from "../../dto/ChatMessage";
import { HandThumbDownIcon as SHandThumbDownIcon, HandThumbUpIcon as SHandThumbUpIcon } from "@heroicons/react/24/solid";
import { HandThumbDownIcon, HandThumbUpIcon } from "@heroicons/react/24/outline";
import React, { useCallback, useState } from "react";
import { WidgetProps } from "../Widget";
import { DEV_SERVER_URL, getHeaders } from "../adapter";
import ReactJson from 'react-json-view'
import { emitter } from "../EventEmiter";
import { MessageDisplay } from "./MessageDisplay";


export const AiMessage: React.FC<{
  msg?: ChatMessage;
  persona?: Persona,
  widgetProps: WidgetProps,
  isLastMessage?: boolean,
  isTyping?: boolean
}> = ({ msg, persona, widgetProps, isTyping }) => {
  const { threadId, id } = msg || {};

  const [score, setScore] = useState<number | undefined>();
  const [error, setError] = useState<string | undefined>();
  const [copied, setCopied] = useState(false);
  const handleScore = useCallback(async (score: number) => {
    let scoreRequest;
    scoreRequest = {
      thread_id: threadId,
      message_id: id,
      score: score,
    };
    // New messages threadId from state

    try {
      const headers = await getHeaders(widgetProps);
      const serverUrl = widgetProps.serverUrl || DEV_SERVER_URL;
      const response = await fetch(`${serverUrl}/threads/score`, {
        method: 'POST',
        headers,
        body: JSON.stringify(scoreRequest),
      });

      if (!response.ok) {
        // get the error message from the response
        const error = await response.text();
        let errorJson = JSON.parse(error);
        throw new Error(errorJson.error);
      }
      setScore(score);
    } catch (error: any) {
      setError(error.toString());
      console.error('Error recording score:', error);
    }

  }, [threadId, id, widgetProps]);
  return (
    <div onClick={() => {
      threadId && id && emitter.emit('langdb_aiMessageClicked', {
        threadId: threadId,
        messageId: id,
        traceId: msg?.trace_id,
        widgetId: widgetProps.widgetId,
        runId: msg?.run_id,
      });

    }} className={`flex gap-2 items-start`}>
      <div className="flex-shrink-0">
        {!persona ? <AvatarItem className="h-6 w-6 rounded-full" name={"Assistant"} /> : (persona.url ? <AvatarItem name={persona.name} imageUrl={persona.url} className="h-6 w-6 rounded-full" /> : <Avatar className="h-6 w-6 rounded-full" />)}
      </div>
      <div className="w-full rounded-md p-2.5 bg-neutral-900 border border-neutral-800 shadow-sm">
        <div className="flex items-center justify-between mb-1.5 py-1 border-b border-neutral-800">
          <div className="flex items-center gap-1.5">
            <span className="text-neutral-400 font-bold">{msg?.type === 'ai' ? 'Assistant' : msg?.type === 'human' ? 'You' : 'System'}</span>
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              if (msg?.message) {
                navigator.clipboard.writeText(msg.message)
                  .then(() => {
                    setCopied(true);
                    setTimeout(() => setCopied(false), 2000);
                  })
                  .catch(err => console.error('Failed to copy:', err));
              }
            }}
            className="text-neutral-500 hover:text-neutral-300 transition-colors"
            title={copied ? "Copied!" : "Copy message"}
          >
            {copied ? 
              <CheckIcon className="h-3.5 w-3.5 text-green-500" /> : 
              <ClipboardDocumentIcon className="h-3.5 w-3.5" />}
          </button>
        </div>
        {msg?.tool_calls && msg.tool_calls.length > 0 && (
          <div className="mb-3 border border-border  rounded-md overflow-hidden">
            <div className="px-3 py-1.5 border-b border-border flex items-center">
              <span className="text-xs font-bold">Tool Calls</span>
            </div>
            <div className="divide-y divide-[#333333]">
              {msg.tool_calls.map((tool_call, index) => {
                if (tool_call.function) {
                  let function_display;
                  try {
                    function_display = {
                      ...tool_call.function,
                      arguments: tool_call.function.arguments ?
                        JSON.parse(tool_call.function.arguments) :
                        tool_call.function.arguments
                    };
                  } catch (error) {
                    // If JSON parsing fails, use the original string
                    function_display = {
                      ...tool_call.function,
                      arguments: tool_call.function.arguments
                    };
                    console.warn('Failed to parse function arguments:', error);
                  }
                  return (
                    <div key={index} className="px-3 py-2">
                      <ReactJson
                        key={index}
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
                          base07: '#ffffffc0',
                          base08: '#ff8c8c',
                          base09: '#ffd700',
                          base0A: '#ffeb3b',
                          base0B: '#4caf50',
                          base0C: '#00bcd4',
                          base0D: '#2196f3',
                          base0E: '#9c27b0',
                          base0F: '#ff9800'
                        }}
                        style={{
                          wordWrap: 'break-word',
                          whiteSpace: 'pre-wrap',
                        }}
                        src={function_display}
                      />
                    </div>
                  );
                }
                return null;
              })}
            </div>
          </div>
        )}
        <div className="whitespace-normal flex flex-col gap-[15px] text-gray-100">
          <MessageDisplay message={msg?.message || ""} />
        </div>
        {
          !isTyping && threadId && id && (
            <div className="mt-3 flex items-center justify-start space-x-2">
              <button
                className="rounded-full p-1 focus:outline-none hover:bg-gray-700/30 transition-colors duration-150"
                title="Thumbs up"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  handleScore(1);
                }}
              >
                {score === undefined && <HandThumbUpIcon className="h-4 w-4" />}
                {score === 1 && <SHandThumbUpIcon className="h-4 w-4 text-green-500 animate-fadeIn" />}
              </button>
              <button
                className="rounded focus:outline-none hover:text-primary-500"
                title="Thumbs down"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  handleScore(-1);
                }}
              >
                {score === undefined && <HandThumbDownIcon className="h-4 w-4" />}
                {score === -1 && <SHandThumbDownIcon className="h-4 w-4 animate-fadeIn" />}
              </button>
              {error && <div className="text-red-500">{error}</div>}
            </div>
          )
        }
        {isTyping && (
          <div className="rounded-md p-2 flex items-center gap-2 animate-pulse mt-2">
            <PencilIcon className="h-4 w-4 text-white animate-pulse" />
            <span className="text-sm">Typing...</span>
          </div>
        )}
      </div>

    </div>
  )
};