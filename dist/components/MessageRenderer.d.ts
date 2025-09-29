import { default as React } from 'react';
import { ChatMessage } from '../dto/ChatMessage';
import { PersonaOptions } from '../dto/PersonaOptions';
import { WidgetProps } from './Widget';

interface MessageRendererProps {
    message: ChatMessage;
    personaOptions: PersonaOptions;
    isLastMessage?: boolean;
    isTyping?: boolean;
    widgetProps: WidgetProps;
    isNewMessage?: boolean;
}
/**
 * MessageRenderer component displays chat messages with appropriate styling based on message type
 */
export declare const MessageRenderer: React.FC<MessageRendererProps>;
export {};
