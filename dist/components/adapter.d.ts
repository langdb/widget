import { ChatAdapter } from '@nlux/react';
import { FileWithPreview, ResizeOptions, ResponseCallbackOptions } from '../types';

export declare const DEV_SERVER_URL = "https://api.dev.langdb.ai";
export interface AdapterProps {
    files?: FileWithPreview[];
    fileResizeOptions?: ResizeOptions;
    serverUrl?: string;
    modelName: string;
    agentParams?: object;
    threadId?: string;
    publicId?: string;
    userId?: string;
    getAccessToken?: () => Promise<string>;
    responseCallback?: (_opts: ResponseCallbackOptions) => void;
}
export declare const getHeaders: (props: AdapterProps) => Promise<any>;
export declare const useAdapter: (props: AdapterProps) => {
    adapter: ChatAdapter;
    threadId?: string;
    messageId?: string;
};
