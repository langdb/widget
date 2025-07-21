import { Persona } from "../../dto/PersonaOptions";
import { ChatMessage } from "../../dto/ChatMessage";
import { default as React } from "react";
import { WidgetProps } from "../Widget";

export declare const AiMessage: React.FC<{
  msg?: ChatMessage;
  persona?: Persona;
  widgetProps: WidgetProps;
  isLastMessage?: boolean;
  isTyping?: boolean;
}>;
