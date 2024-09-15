import { ModelEvent } from '../events';
import { FileWithPreview, ResizeOptions, ResponseCallbackOptions } from '../types';
import { FetchEventSourceInit } from '@microsoft/fetch-event-source';

export declare const DEV_SERVER_URL = "https://api.dev.langdb.ai";
export interface AdapterProps {
    fileResizeOptions?: ResizeOptions;
    serverUrl?: string;
    modelName: string;
    agentParams?: object;
    threadId?: string;
    publicId?: string;
    userId?: string;
    getAccessToken?: () => Promise<string>;
    responseCallback?: (_opts: ResponseCallbackOptions) => void;
    onEvent?: (event: ModelEvent) => void;
}
export interface SubmitProps extends FetchEventSourceInit {
    widgetProps: AdapterProps;
    message: string;
    files?: FileWithPreview[];
    threadId?: string;
}
export declare const getHeaders: (props: AdapterProps) => Promise<any>;
export declare const onSubmit: (submitProps: SubmitProps) => Promise<void>;
