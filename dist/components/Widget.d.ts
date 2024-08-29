import { AiChatProps } from '@nlux/react';
import { AdapterProps } from './adapter';
import { default as React } from 'react';

type AdvancedOptions = Omit<AiChatProps, "adapter">;
export interface Persona {
    avatar: string | JSX.Element;
    name: string;
    tagline?: string;
}
export interface PersonaOptions {
    assistant?: Persona;
    user?: Persona;
}
export interface WidgetProps extends AdapterProps {
    personaOptions?: Partial<{
        assistant?: Partial<Persona>;
        user?: Partial<Persona>;
    }>;
    messages?: ChatMessage[];
    style?: any;
    className?: any;
    controls?: {
        enableFiles?: boolean;
    };
    advancedOptions?: AdvancedOptions;
}
export declare const Widget: React.FC<WidgetProps>;
interface ChatMessage {
    id: string;
    message: string;
    role: 'user' | 'assistant';
}
export declare const CopyToClipboard: React.FC<{
    content: string;
} & React.HTMLAttributes<HTMLDivElement>>;
export {};
