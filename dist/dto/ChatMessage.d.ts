import { FileWithPreview } from '../types';

export interface ChatMessage {
    id: string;
    message?: string;
    content_array?: MessageContentPart[];
    content_type: MessageContentType;
    type: MessageType;
    threadId?: string;
    tool_call_id?: string;
    tool_calls?: ToolCall[];
    files?: FileWithPreview[];
}
export interface ToolCall {
    id: string;
    type: string;
    [key: string]: any;
}
export type MessageContentPart = [
    MessageContentType,
    TextType | ImageUrlType,
    object | null
];
export type TextType = string;
export type ImageUrlType = string;
export declare enum MessageContentType {
    Text = "Text",
    ImageUrl = "ImageUrl"
}
export declare enum MessageType {
    SystemMessage = "system",
    AIMessage = "ai",
    HumanMessage = "human",
    ToolMessage = "tool"
}
