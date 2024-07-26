import { ChatAdapter } from '@nlux/react';
import { FileWithPreview, ResizeOptions, ResponseCallbackOptions } from '../types';

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
export declare const useAdapter: (props: AdapterProps) => ChatAdapter;
