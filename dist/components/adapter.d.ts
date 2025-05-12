import { ChatCompletionChunk } from '../events';
import { FileWithPreview, ResizeOptions, ResponseCallbackOptions } from '../types';
import { FetchEventSourceInit } from '@microsoft/fetch-event-source';
import { WidgetProps } from './Widget';
import { ChatMessage } from '../dto/ChatMessage';
import { InititalPrompt, MCPTools } from '../dto/ParamInput';

export declare const DEV_SERVER_URL = "https://api.dev.langdb.ai";
export interface AdapterProps {
    fileResizeOptions?: ResizeOptions;
    serverUrl?: string;
    modelName: string;
    agentParams?: object;
    threadId?: string;
    publicId?: string;
    userId?: string;
    projectId?: string;
    getAccessToken?: () => Promise<string>;
    responseCallback?: (_opts: ResponseCallbackOptions) => void;
    onEvent?: (event: ChatCompletionChunk) => void;
}
export interface SubmitProps extends FetchEventSourceInit {
    widgetProps: WidgetProps;
    message: string;
    files?: FileWithPreview[];
    threadId?: string;
    previousMessages: ChatMessage[];
    searchToolEnabled?: boolean;
    otherTools?: string[];
    mcpTools?: MCPTools[];
    initialPrompts?: InititalPrompt[];
    variables?: Record<string, any>;
    signal?: AbortSignal;
}
export declare const getHeaders: (props: {
    projectId?: string;
    publicId?: string;
    threadId?: string;
    getAccessToken?: () => Promise<string>;
    apiKey?: string;
}) => Promise<any>;
export declare const onSubmit: (submitProps: SubmitProps) => Promise<void>;
