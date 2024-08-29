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
  const className = props.className || "";
  const themeClass = props.theme === "dark" ? "dark-theme" : "light-theme"; 
  return (
    <div className={`flex flex-col w-[100%] h-full ${themeClass}`}>
      <div className="flex-1 w-full relative">
        <div
          className={`items-center justify-between ${className} h-full absolute`}
          style={props.style || {}}
        >
          <ChatComponent {...props} />
        </div>
      </div>
    </div>
  );
});