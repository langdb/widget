export interface ChatMessage {
  id: string;
  message?: string;
  content_array?: MessageContentPart[];
  content_type: MessageContentType;
  type: MessageType;
  threadId?: string;
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
  HumanMessage = "human"
}