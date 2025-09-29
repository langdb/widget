import React from "react";
import { ChatMessage, MessageType, MessageWithId } from "../dto/ChatMessage";
import { PersonaOptions } from "../dto/PersonaOptions";
import { HumanMessage } from "./Messages/Human";
import { AiMessage } from "./Messages/Ai";
import { SystemMessage } from "./Messages/System";
import { WidgetProps } from "./Widget";

interface MessageRendererProps {
  message: ChatMessage | MessageWithId;
  personaOptions: PersonaOptions;
  isLastMessage?: boolean;
  isTyping?: boolean;
  widgetProps: WidgetProps;
  isNewMessage?: boolean;
}

/**
 * MessageRenderer component displays chat messages with appropriate styling based on message type
 */
export const MessageRenderer: React.FC<MessageRendererProps> = ({
  message,
  personaOptions,
  widgetProps,
  isLastMessage,
  isTyping,
  isNewMessage,
}) => {
  // Determine if this is a human message for styling purposes
  const isHumanMessage = message.type === MessageType.HumanMessage;
  const isSystemMessage = message.type === MessageType.SystemMessage;

  return (
    <article
      className={`
        flex mb-4 group
        ${isHumanMessage ? "justify-end" : "justify-start"}
        ${isLastMessage && !message.created_at ? `min-h-[40vh] items-start justify-start ${widgetProps.lastAiMessageClass || ""}` : "items-start"}
        transition-all duration-200 ease-in-out
        ${isSystemMessage ? "px-2" : ""}
        ${isNewMessage ? "animate-slideIn" : ""}
      `}
      role="listitem"
      aria-label={`${isHumanMessage ? "Your" : isSystemMessage ? "System" : "Assistant"} message`}
    >
      <div
        className={`
          max-w-[85%] sm:max-w-[75%] text-sm
          ${isHumanMessage ? "order-1" : "order-2"}
          ${isSystemMessage ? "w-full" : ""}
          ${isNewMessage && !isHumanMessage ? "relative" : ""}
        `}
      >
        {isNewMessage && !isHumanMessage && (
          <div className="absolute -left-2 top-0 w-1 h-full bg-gradient-to-b from-blue-500 to-transparent rounded-full animate-pulse" />
        )}
        {isHumanMessage ? (
          <HumanMessage msg={message} persona={personaOptions.user} />
        ) : message.type === MessageType.SystemMessage ? (
          <SystemMessage
            msg={message}
            widgetProps={widgetProps}
            persona={personaOptions.assistant}
          />
        ) : (
          <AiMessage
            msg={message}
            persona={personaOptions.assistant}
            widgetProps={widgetProps}
            isTyping={isTyping}
          />
        )}
      </div>
    </article>
  );
};
