import { FileWithPreview } from "../types";

export interface ChatMessage {
  id: string;
  message?: string;
  created_at?: string;
  model_name?: string;
  content_array?: MessageContentPart[];
  content_type: MessageContentType;
  type: MessageType;
  threadId?: string;
  tool_call_id?: string;
  trace_id?: string
  tool_calls?: ToolCall[];
  files?: FileWithPreview[];
  user_id?: string
}
export interface MessageWithId {
  id: string;
  created_at: string;
  model_name: string;
  content: string;
  content_type: MessageContentType;
  content_array: MessageContentPart[];
  type: MessageType;
  user_id: string;
  thread_id: string;
  tool_call_id?: string;
  tool_calls?: ToolCall[]
}
export interface ToolCall {
  id: string;
  type: string;
  function?: FunctionCall;
  [key: string]: any;
}
export interface FunctionCall {
  name: string;
  arguments: string;
}

export type MessageContentPart = [
  MessageContentType,
  TextType | ImageUrlType,
  object | null
];

export type TextType = string;
export type ImageUrlType = string;

export enum MessageContentType {
  Text = "Text",
  ImageUrl = "ImageUrl"
}
export enum MessageType {
  SystemMessage = "system",
  AIMessage = "ai",
  HumanMessage = "human",
  ToolMessage = "tool"
}