import { ChatAdapter } from '@nlux/react';
import { FileWithPreview, ResizeOptions, ResponseCallbackOptions } from '../types';
import { EventSourceMessage } from '@microsoft/fetch-event-source';

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
    onError?: (msg: EventSourceMessage) => void;
}
export declare const useAdapter: (props: AdapterProps) => ChatAdapter;
