export interface MessageRequest {
    model_name: string;
    message: InnerMessage;
    thread_id?: string;
    user_id: string;
    parameters: object;
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
    HumanMessage = "human"
}
export declare enum ImageDetail {
    Auto = "Auto",
    Low = "Low",
    High = "High"
}
export type FileWithPreview = File & {
    preview: string;
};
export declare function createInnerMessage(props: {
    files?: FileWithPreview[];
    message: string;
    resizeOptions?: ResizeOptions;
}): Promise<InnerMessage>;
export interface IResizeImageOptions {
    maxSize: number;
}
