import React, { useState, useCallback } from "react";
import {
  HandThumbDownIcon,
  HandThumbUpIcon,
} from "@heroicons/react/24/outline";
import {
  HandThumbDownIcon as SHandThumbDownIcon,
  HandThumbUpIcon as SHandThumbUpIcon,
} from "@heroicons/react/24/solid";
import { DEV_SERVER_URL, getHeaders } from "../adapter";
import { WidgetProps } from "../Widget";

interface MessageFeedbackProps {
  threadId?: string;
  messageId?: string;
  widgetProps: WidgetProps;
  isTyping?: boolean;
}

export const MessageFeedback: React.FC<MessageFeedbackProps> = ({
  threadId,
  messageId,
  widgetProps,
  isTyping,
}) => {
  const [score, setScore] = useState<number | undefined>();
  const [error, setError] = useState<string | undefined>();

  const handleScore = useCallback(
    async (scoreValue: number) => {
      const scoreRequest = {
        thread_id: threadId,
        message_id: messageId,
        score: scoreValue,
      };

      try {
        const headers = await getHeaders(widgetProps);
        const serverUrl = widgetProps.serverUrl || DEV_SERVER_URL;
        const response = await fetch(`${serverUrl}/threads/score`, {
          method: "POST",
          headers,
          body: JSON.stringify(scoreRequest),
        });

        if (!response.ok) {
          const errorText = await response.text();
          const errorJson = JSON.parse(errorText);
          throw new Error(errorJson.error);
        }
        setScore(scoreValue);
      } catch (error: any) {
        setError(error.toString());
        console.error("Error recording score:", error);
      }
    },
    [threadId, messageId, widgetProps],
  );

  if (isTyping || !threadId || !messageId) {
    return null;
  }

  return (
    <div className="flex items-center gap-2 text-xs text-neutral-500">
      <button
        className="p-0.5 hover:text-neutral-300 transition-colors duration-150"
        title="Helpful"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          handleScore(1);
        }}
      >
        {score === 1 ? (
          <SHandThumbUpIcon className="h-3 w-3 text-green-500" />
        ) : (
          <HandThumbUpIcon className="h-3 w-3" />
        )}
      </button>
      <button
        className="p-0.5 hover:text-neutral-300 transition-colors duration-150"
        title="Not helpful"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          handleScore(-1);
        }}
      >
        {score === -1 ? (
          <SHandThumbDownIcon className="h-3 w-3 text-orange-500" />
        ) : (
          <HandThumbDownIcon className="h-3 w-3" />
        )}
      </button>
      {error && <div className="text-xs text-red-500 ml-2">{error}</div>}
    </div>
  );
};
