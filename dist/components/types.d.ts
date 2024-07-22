export interface Message {
    model_name: string;
    thread_id?: string;
    user_id: string;
    content: string;
    type: MessageType;
    content_metadata: string;
}
export interface ContentMetadata {
    typ: ContentType;
}
export declare enum ContentType {
    Text = "Text",
    Image = "Image",
    Audio = "Audio",
    Video = "Video"
}
export interface MessageRequest {
    model_name: string;
    message: Message;
    parameters: object;
}
export declare enum MessageType {
    SystemMessage = "system",
    AIMessage = "ai",
    HumanMessage = "human"
}
