import { PencilIcon } from "@heroicons/react/24/outline";
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
    <div onClick={(e) => {
      e.stopPropagation();
      e.preventDefault();
      threadId && id && emitter.emit('langdb_aiMessageClicked', {
        threadId: threadId,
        messageId: id,
        traceId: msg?.trace_id,
        widgetId: widgetProps.widgetId,
        runId: msg?.run_id,
      });

    }} className={`flex gap-2 items-start`}>
      <div>
        {!persona ? <AvatarItem className="h-6 w-6 rounded-full" name={"User"} /> : (persona.url ? <AvatarItem name={persona.name} imageUrl={persona.url} className="h-6 w-6 rounded-full" /> : <Avatar className="h-6 w-6 rounded-full" />)}
      </div>
      <div className="rounded-lg px-2 py-0 ai-message">
        <MessageDisplay message={msg?.message || ""} />
        {msg?.tool_calls && msg.tool_calls && msg.tool_calls.length > 0 && <div>
          <div className="">
            <span className="text-sm">Tool Calls</span>
          </div>
          {msg?.tool_calls && msg.tool_calls.map((tool_call, index) => {
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
              return <ReactJson key={index} theme='ashes' src={function_display} />
            }
            return <></>
          })}
        </div>}
        {
          !isTyping && threadId && id && (<>
            <div className=" mt-3 gap-3 flex items-center justify-start space-x-1">
              <button
                className="rounded focus:outline-none hover:text-primary-500"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  handleScore(1)
                }}
              >
                {score == undefined && <HandThumbUpIcon className="h-4 w-4" />}
                {score === 1 && <SHandThumbUpIcon className="h-4 w-4 animate-fadeIn" />}
              </button>
              <button
                className="rounded focus:outline-none hover:text-primary-500"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  handleScore(-1)
                }}
              >
                {score == undefined && <HandThumbDownIcon className="h-4 w-4" />}
                {score === -1 && <SHandThumbDownIcon className="h-4 w-4 animate-fadeIn" />}
              </button>
              {error && <div className=" text-red-500 ">{error}</div>}
            </div>
          </>)
        }
        {isTyping && (
          <div className="rounded-lg p-2 ai-message flex items-center gap-2 animate-pulse">
            <PencilIcon className="h-5 w-5 text-white animate-pulse" />
            <span>Typing...</span>
          </div>
        )}
      </div>

    </div>
  )
};