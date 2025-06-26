import React, { useState } from "react";
import { ChatMessage } from "../../dto/ChatMessage";
import { Persona } from "../../dto/PersonaOptions";
import { MessageDisplay } from "./MessageDisplay";
import { AvatarItem } from "./AvatarItem";
import { CogIcon, ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";
import { ClipboardDocumentIcon, CheckIcon } from "@heroicons/react/24/outline";

interface SystemMessageProps {
  msg: ChatMessage;
  persona?: Persona;
}

export const SystemMessage: React.FC<SystemMessageProps> = ({ msg, persona }) => {
  const [expanded, setExpanded] = useState(false);
  const [copied, setCopied] = useState(false);
  
  // Function to count lines in a string
  const countLines = (text: string): number => {
    return text ? text.split('\n').length : 0;
  };
  
  // Function to get first N lines of text
  const getFirstNLines = (text: string, n: number): string => {
    if (!text) return '';
    const lines = text.split('\n');
    return lines.slice(0, n).join('\n');
  };
  
  const message = msg.message || '';
  const lineCount = countLines(message);
  const hasMoreLines = lineCount > 5;
  const displayMessage = expanded || !hasMoreLines ? message : getFirstNLines(message, 5);
  
  return (
    <div className="flex items-center gap-2 mb-2">
      <div className="flex flex-col w-full">
        <div className="rounded-md p-2.5 bg-zinc-900 border border-zinc-800 text-gray-400 whitespace-pre-wrap text-xs">
          <div className="flex items-center justify-between mb-1.5 py-2 border-b border-zinc-800">
          <div className="flex items-center gap-1.5">
            <CogIcon className="h-3 w-3 text-gray-400" />
            <span className="text-gray-400 font-bold">System</span>
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              if (msg.message) {
                navigator.clipboard.writeText(msg.message)
                  .then(() => {
                    setCopied(true);
                    setTimeout(() => setCopied(false), 2000);
                  })
                  .catch(err => console.error('Failed to copy:', err));
              }
            }}
            className="text-gray-500 hover:text-gray-300 transition-colors"
            title={copied ? "Copied!" : "Copy message"}
          >
            {copied ? 
              <CheckIcon className="h-3.5 w-3.5 text-green-500" /> : 
              <ClipboardDocumentIcon className="h-3.5 w-3.5" />}
          </button>
          </div>
          <div className="text-gray-300">
            <MessageDisplay message={displayMessage} />
            
            {hasMoreLines && (
              <button 
                onClick={() => setExpanded(!expanded)}
                className="flex items-center gap-1 mt-2 text-gray-500 hover:text-gray-300 transition-colors text-xs font-medium"
              >
                {expanded ? (
                  <>
                    <ChevronUpIcon className="h-3 w-3" />
                    Show less
                  </>
                ) : (
                  <>
                    <ChevronDownIcon className="h-3 w-3" />
                    Read more ({lineCount - 5} more lines)
                  </>
                )}
              </button>
            )}
          </div>
        </div>
      </div>
      <div className="flex-shrink-0">
        <CogIcon className="h-5 w-5 text-gray-500" />
      </div>
    </div>
  );
};
