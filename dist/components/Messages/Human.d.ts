import { default as React } from "react";
import { ChatMessage } from "../../dto/ChatMessage";
import { Persona } from "../../dto/PersonaOptions";

export declare const HumanMessage: React.FC<{
  msg: ChatMessage;
  persona?: Persona;
}>;
