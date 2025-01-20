import { AdapterProps } from './adapter';
import { default as React } from 'react';
import { ChatMessage } from '../dto/ChatMessage';
import { PersonaOptions } from '../dto/PersonaOptions';
import { ConversationStarter } from '../dto/ConversationStarter';

export interface WidgetProps extends AdapterProps {
    personaOptions?: PersonaOptions;
    messages?: ChatMessage[];
    style?: React.CSSProperties;
    className?: string;
    controls?: {
        enableFiles?: boolean;
    };
    theme?: "light" | "dark";
    starters?: ConversationStarter[];
    threadId?: string;
    projectId?: string;
    getAccessToken?: () => Promise<string>;
    apiKey?: string;
    publicId?: string;
    serverUrl?: string;
    hideChatInput?: boolean;
    autoRefreshThread?: boolean;
}
export declare const Widget: React.FC<WidgetProps>;
