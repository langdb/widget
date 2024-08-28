import { ChatItem, AiChatProps, AssistantPersona, UserPersona } from '@nlux/react';
import { AdapterProps } from './adapter';
import { default as React } from 'react';

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
export declare const Widget: React.FC<WidgetProps>;
export declare const CopyToClipboard: React.FC<{
    content: string;
} & React.HTMLAttributes<HTMLDivElement>>;
export {};
