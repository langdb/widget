import { AdapterProps } from './adapter';
import { default as React } from 'react';
import { ChatMessage } from '../dto/ChatMessage';
import { PersonaOptions } from '../dto/PersonaOptions';
import { ConversationStarter } from '../dto/ConversationStarter';

export interface WidgetProps extends AdapterProps {
    personaOptions?: Partial<PersonaOptions>;
    messages?: ChatMessage[];
    style?: React.CSSProperties;
    className?: string;
    controls?: {
        enableFiles?: boolean;
    };
    theme?: "light" | "dark";
    starters?: ConversationStarter[];
}
export declare const Widget: React.FC<WidgetProps>;
