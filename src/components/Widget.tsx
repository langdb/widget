import "../tailwind.css";
import './Widget.css';
import { AdapterProps } from "./adapter";
import React from "react";
import { ChatComponent } from "./ChatComponent";
import { ChatMessage } from "../dto/ChatMessage";
import { PersonaOptions } from "../dto/PersonaOptions";
import {ConversationStarter} from "../dto/ConversationStarter";
// Types

export interface WidgetProps extends AdapterProps {
  personaOptions?: PersonaOptions;
  messages?: ChatMessage[];
  style?: React.CSSProperties;
  className?: string;
  controls?: {
    enableFiles?: boolean;
  };
  theme?: "light" | "dark";
  starters?: ConversationStarter[]
}

export const Widget: React.FC<WidgetProps> = React.memo((props) => {
  const themeClass = props.theme === "dark" ? "dark-theme" : "light-theme"; 
  return (
    <div className={`${themeClass} w-full h-full`}>
          <ChatComponent {...props} />
    </div>
  );
});