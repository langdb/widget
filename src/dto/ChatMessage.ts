import { FileWithPreview } from "../types";

export interface ChatMessage {
  id: string;
  content?: string;
  created_at?: string;
  model_name?: string;
  content_array?: MessageContentPart[];
  content_type: MessageContentType;
  type: MessageType;
  thread_id?: string;
  tool_call_id?: string;
  trace_id?: string;
  tool_calls?: ToolCall[];
  files?: FileWithPreview[];
  user_id?: string;
  run_id?: string;
  ttft?: number;
  usage?: MessageUsage;
}
export interface MessageWithId {
  id: string;
  created_at: string;
  model_name: string;
  content: string;
  type: MessageType;
  content_type: MessageContentType;
  content_array: MessageContentPart[];
  duration?: number;
  span_id?: string;
  run_id?: string;
  trace_id?: string;
  user_id: string;
  ttft?: number;
  usage?: MessageUsage;
  thread_id: string;
  tool_call_id?: string;
  tool_calls?: ToolCall[];
}

export interface MessageUsage {
  is_cache_used?: boolean;
  output_tokens?: number;
  total_tokens?: number;
  input_tokens?: number;
  cost?: number;
  completion_tokens_details?: MessageCompletionTokensDetails;
  [key: string]: any;
}

export interface MessageCompletionTokensDetails {
  accepted_prediction_tokens?: number;
  audio_tokens?: number;
  reasoning_tokens?: number;
  rejected_prediction_tokens?: number;
  [key: string]: any;
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
  object | null,
];

export type TextType = string;
export type ImageUrlType = string;

export enum MessageContentType {
  Text = "Text",
  ImageUrl = "ImageUrl",
}
export enum MessageType {
  SystemMessage = "system",
  AIMessage = "ai",
  HumanMessage = "human",
  ToolMessage = "tool",
}
