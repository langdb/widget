import { ChatItem, PersonaOptions, AiChatProps } from '@nlux/react';
import { FileWithPreview, ResizeOptions } from '../types';

type AdvancedOptions = Omit<AiChatProps, "adapter">;
export type ResponseCallbackOptions = {
    response?: Response;
    modelName: string;
    error?: Error;
};
export interface WidgetProps {
    serverUrl?: string;
    modelName: string;
    agentParams?: object;
    personaOptions?: PersonaOptions;
    messages?: ChatItem[];
    threadId?: string;
    publicId?: string;
    files?: FileWithPreview[];
    userId?: string;
    style?: any;
    className?: any;
    advancedOptions?: AdvancedOptions;
    responseCallback?: (_opts: ResponseCallbackOptions) => void;
    getAccessToken?: () => Promise<string>;
    resizeOptions?: ResizeOptions;
}
export declare function Widget(props: WidgetProps): import("react/jsx-runtime").JSX.Element;
export {};
