import { ChatItem, PersonaOptions, AiChatProps } from '@nlux/react';

type AdvancedOptions = Omit<AiChatProps, "adapter">;
export interface WidgetProps {
    serverUrl?: string;
    agentName: string;
    agentParams?: object;
    personaOptions?: PersonaOptions;
    messages?: ChatItem[];
    publicId?: string;
    style?: any;
    advancedOptions?: AdvancedOptions;
    getAccessToken?: () => Promise<string>;
}
export declare function Widget(props: WidgetProps): import("react/jsx-runtime").JSX.Element;
export {};