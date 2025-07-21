import React, { useState } from "react";
import { ChatMessage } from "../../dto/ChatMessage";
import { Persona } from "../../dto/PersonaOptions";
import { AvatarItem } from "./AvatarItem";
import { Files } from "../Files";
import { MessageDisplay } from "./MessageDisplay";
import {
  ClipboardDocumentIcon,
  CheckIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";
import {
  UserCircleIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@heroicons/react/24/solid";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { formatMessageTime } from "../../utils/dateUtils";

export const HumanMessage: React.FC<{
  msg: ChatMessage;
  persona?: Persona;
}> = ({ msg, persona }) => {
  const { message, files } = msg;
  const [copied, setCopied] = useState(false);
  const [expanded, setExpanded] = useState(false);

  // Function to count lines in text
  const countLines = (text: string): number => {
    return text ? text.split("\n").length : 0;
  };

  // Function to get first N lines of text
  const getFirstNLines = (text: string, n: number): string => {
    if (!text) return "";
    const lines = text.split("\n");
    return lines.slice(0, n).join("\n");
  };
  if (msg.content_array && msg.content_array.length > 0) {
    return (
      <div className="flex items-center gap-2 mb-2">
        <div className="flex flex-col w-full">
          <div className="rounded-md p-2.5 bg-zinc-800 border border-zinc-700 flex flex-col gap-2 whitespace-pre-wrap">
            <div className="flex items-center justify-between mb-1.5 py-1 border-b border-zinc-700">
              <div className="flex items-center gap-1.5">
                <span className="text-white font-bold">You</span>
                {msg.created_at && (
                  <div className="flex items-center text-xs text-zinc-400 ml-2">
                    <ClockIcon className="h-3 w-3 mr-1" />
                    <span>{formatMessageTime(msg.created_at)}</span>
                  </div>
                )}
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  if (msg.message) {
                    navigator.clipboard
                      .writeText(msg.message)
                      .then(() => {
                        setCopied(true);
                        setTimeout(() => setCopied(false), 2000);
                      })
                      .catch((err) => console.error("Failed to copy:", err));
                  } else if (msg.content_array) {
                    // Extract text content from content_array
                    const textContent = msg.content_array
                      .filter((item) => item[0] === "Text")
                      .map((item) => item[1])
                      .join("\n");
                    navigator.clipboard
                      .writeText(textContent)
                      .then(() => {
                        setCopied(true);
                        setTimeout(() => setCopied(false), 2000);
                      })
                      .catch((err) => console.error("Failed to copy:", err));
                  }
                }}
                className="text-zinc-500 hover:text-zinc-300 transition-colors"
                title={copied ? "Copied!" : "Copy message"}
              >
                {copied ? (
                  <CheckIcon className="h-3.5 w-3.5 text-green-500" />
                ) : (
                  <ClipboardDocumentIcon className="h-3.5 w-3.5" />
                )}
              </button>
            </div>
            {msg.content_array.map((item, index) => {
              const contentPart = item;
              const type = contentPart[0] as string;
              const content = contentPart[1];

              if (type === "ImageUrl") {
                return (
                  <div key={index} className="flex flex-col">
                    <img src={content} className="rounded-md max-w-full" />
                  </div>
                );
              } else if (type === "InputAudio") {
                return (
                  <audio controls className="my-2 w-full" key={index}>
                    <source
                      src={`data:audio/mpeg;base64,${content}`}
                      type="audio/mpeg"
                    />
                    Your browser does not support the audio element.
                  </audio>
                );
              } else {
                return (
                  <div
                    key={index}
                    className="flex flex-col whitespace-pre-wrap text-gray-100"
                  >
                    <MessageDisplay message={content} />
                  </div>
                );
              }
            })}
          </div>
        </div>
        <div className="flex-shrink-0">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                {!persona ? (
                  <AvatarItem className="h-6 w-6 rounded-full" name={"User"} />
                ) : persona.url ? (
                  <AvatarItem
                    name={persona.name}
                    imageUrl={persona.url}
                    className="h-6 w-6 rounded-full"
                  />
                ) : (
                  <UserCircleIcon className="h-6 w-6 rounded-full text-white" />
                )}
              </TooltipTrigger>
              <TooltipContent>
                <p>Human Message</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
    );
  }
  // Calculate line count and determine if we need to show Read more button
  const messageText = message || "";
  const lineCount = countLines(messageText);
  const hasMoreLines = lineCount > 5;
  const displayMessage =
    expanded || !hasMoreLines ? messageText : getFirstNLines(messageText, 5);

  return (
    <div className="flex items-center gap-2 mb-2">
      <div className="flex flex-col w-full">
        {files && files.length > 0 && <Files files={files} />}
        <div className="rounded-md p-2.5 bg-zinc-800 border border-zinc-700 whitespace-pre-wrap min-w-[100px]">
          <div className="flex items-center justify-between mb-1.5 py-1 border-b border-zinc-700">
            <div className="flex items-center gap-1.5">
              <span className="text-white font-bold">You</span>
              {msg.created_at && (
                <div className="flex items-center text-xs text-zinc-400 ml-2">
                  <ClockIcon className="h-3 w-3 mr-1" />
                  <span>{formatMessageTime(msg.created_at)}</span>
                </div>
              )}
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                if (message) {
                  navigator.clipboard
                    .writeText(message)
                    .then(() => {
                      setCopied(true);
                      setTimeout(() => setCopied(false), 2000);
                    })
                    .catch((err) => console.error("Failed to copy:", err));
                }
              }}
              className="text-zinc-500 hover:text-zinc-300 transition-colors"
              title={copied ? "Copied!" : "Copy message"}
            >
              {copied ? (
                <CheckIcon className="h-3.5 w-3.5 text-green-500" />
              ) : (
                <ClipboardDocumentIcon className="h-3.5 w-3.5" />
              )}
            </button>
          </div>
          <div className="text-gray-100">
            <MessageDisplay message={displayMessage} />

            {hasMoreLines && (
              <button
                onClick={() => setExpanded(!expanded)}
                className="flex items-center gap-1 mt-2 text-zinc-500 hover:text-zinc-300 transition-colors font-medium"
              >
                {expanded ? (
                  <>
                    <ChevronUpIcon className="h-4 w-4" />
                    Show less
                  </>
                ) : (
                  <>
                    <ChevronDownIcon className="h-4 w-4" />
                    Read more ({lineCount - 5} more lines)
                  </>
                )}
              </button>
            )}
          </div>
        </div>
      </div>
      <div className="flex-shrink-0">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              {!persona ? (
                <AvatarItem className="h-6 w-6 rounded-full" name={"User"} />
              ) : persona.url ? (
                <AvatarItem
                  name={persona.name}
                  imageUrl={persona.url}
                  className="h-6 w-6 rounded-full"
                />
              ) : (
                <UserCircleIcon className="h-6 w-6 rounded-full text-white" />
              )}
            </TooltipTrigger>
            <TooltipContent>
              <p>Human Message</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  );
};
