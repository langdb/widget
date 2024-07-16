import { ChatItem, PersonaOptions, AiChatProps } from '@nlux/react';

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
    publicId?: string;
    style?: any;
    advancedOptions?: AdvancedOptions;
    responseCallback?: (_opts: ResponseCallbackOptions) => void;
    getAccessToken?: () => Promise<string>;
}
export declare function Widget(props: WidgetProps): import("react/jsx-runtime").JSX.Element;
export {};
