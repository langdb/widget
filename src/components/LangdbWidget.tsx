import React from "react";
import { ChatItem, AiChatProps, AssistantPersona, UserPersona } from "@nlux/react";
import { AdapterProps } from "./adapter";
import { useChatLogic } from "../hooks/useChatLogic";
import { MessageList } from "./MessageList";
import { ChatInput } from "./ChatInput";
import "../css/langdb/main.css";
import "../tailwind.css";

type AdvancedOptions = Omit<AiChatProps, "adapter">;

export interface WidgetProps extends AdapterProps {
  personaOptions?: Partial<{
    assistant?: Partial<AssistantPersona>;
    user?: Partial<UserPersona>;
  }>;
  messages?: ChatItem[];
  rawMessages?: any[];
  style?: React.CSSProperties;
  className?: string;
  controls?: {
    enableFiles?: boolean;
  };
  advancedOptions?: AdvancedOptions;
}

export const LangdbWidget: React.FC<WidgetProps> = React.memo(({ className = "", style }) => {
  const {
    messages,
    currentInput,
    handleInputChange,
    handleSubmit,
  } = useChatLogic();

  return (
    <div className="flex flex-col w-full h-full">
      <div className={`flex-1 w-full relative ${className}`} style={style}>
        <main className="items-center justify-between h-full absolute w-full">
          <div className="chat-container flex flex-col h-full">
            <MessageList messages={messages} />
            <ChatInput
              value={currentInput}
              onChange={handleInputChange}
              onSubmit={handleSubmit}
            />
          </div>
        </main>
      </div>
    </div>
  );
});

LangdbWidget.displayName = "LangdbWidget";