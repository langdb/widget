export interface Message {
  model_name: string;        // Corresponding LangDB model
  thread_id?: string;       // Identifier of the thread to which this message belongs
  user_id: string;          // UUID
  content: string;
  type: MessageType;        // Human / AI Message
  content_metadata: string; // Additional Content Metadata
}

export interface ContentMetadata {
  typ: ContentType;
}

export enum ContentType {
  Text = 'Text',
  Image = 'Image',
  Audio = 'Audio',
  Video = 'Video',
}

export interface MessageRequest {
  model_name: string;
  message: Message;
  parameters: object; // Using any for serde_json::Value
}

export enum MessageType {
  SystemMessage = "system",
  AIMessage = "ai",
  HumanMessage = "human",
}