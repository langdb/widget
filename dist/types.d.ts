export interface MessageRequest {
    model: string;
    messages: ChatCompletionMessage[];
    thread_id?: string;
    parameters: object;
    include_history?: boolean;
    stream?: boolean;
    temperature?: number;
    top_p?: number;
    n?: number;
    stop?: string[];
    max_tokens?: number;
    presence_penalty?: number;
    frequency_penalty?: number;
    logit_bias?: object;
    user?: string;
    response_format?: string;
    functions?: {
        name: string;
        description: string;
        parameters: {
            type: string;
            description: string;
            required: boolean;
        }[];
    }[];
    function_call?: {
        name: string;
        arguments: string;
    };
}
export interface ChatCompletionMessage {
    role: string;
    content: string | ChatMessageContent[];
    name?: string;
    function_call?: {
        name: string;
        arguments: string;
    };
}
type ChatMessageContent = ChatMessageText | ChatMessageContentImage | ChatMessageWithAudio;
export interface ChatMessageContentImage {
    type: string;
    image_url: string | {
        url: string;
    };
}
export interface ChatMessageWithAudio {
    type: string;
    audio: {
        data: string;
        format: string;
    };
}
export interface ChatMessageText {
    type: string;
    text: string;
}
export interface ResizeOptions {
    maxSize: number;
}
export type InnerMessage = string | MessageContentPart[];
export type TextType = string;
export type ImageUrlType = string;
export type MessageContentPart = [
    MessageContentType,
    TextType | ImageUrlType,
    object | null
];
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
export declare enum ImageDetail {
    Auto = "Auto",
    Low = "Low",
    High = "High"
}
export interface FileWithPreview extends File {
    preview: string;
    type: string;
    raw_file: File;
    base64?: string;
}
export type ResponseCallbackOptions = {
    traceId?: string;
    messageId?: string;
    threadId?: string;
    modelName: string;
    error?: Error;
};
export declare function createSubmitMessage(props: {
    files?: FileWithPreview[];
    message: string;
    resizeOptions?: ResizeOptions;
}): Promise<ChatCompletionMessage>;
export declare const createImageUrl: (props: {
    file: FileWithPreview;
    resizeOptions?: ResizeOptions;
}) => Promise<string | ArrayBuffer>;
export declare function createInnerMessage(props: {
    files?: FileWithPreview[];
    message: string;
    resizeOptions?: ResizeOptions;
}): Promise<InnerMessage>;
export interface IResizeImageOptions {
    maxSize: number;
}
export interface Message {
    model_name: string;
    thread_id?: string;
    user_id: string;
    content_type: MessageContentType;
    content?: string;
    content_array: MessageContentPart[];
    type: MessageType;
}
export interface MessageWithIds {
    threadId: string;
    messageId: string;
    content: string;
}
export {};
