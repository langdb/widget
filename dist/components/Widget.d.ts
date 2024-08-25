import { ChatItem, AiChatProps, AssistantPersona, UserPersona } from '@nlux/react';
import { AdapterProps } from './adapter';

type AdvancedOptions = Omit<AiChatProps, "adapter">;
export interface WidgetProps extends AdapterProps {
    personaOptions?: Partial<{
        assistant?: Partial<AssistantPersona>;
        user?: Partial<UserPersona>;
    }>;
    messages?: ChatItem[];
    rawMessages?: any[];
    style?: any;
    className?: any;
    controls?: {
        enableFiles?: boolean;
    };
    advancedOptions?: AdvancedOptions;
}
export declare function Widget(props: WidgetProps): import("react/jsx-runtime").JSX.Element;
export {};
