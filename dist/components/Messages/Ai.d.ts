import { Persona } from '../../dto/PersonaOptions';
import { ChatMessage, MessageWithId } from '../../dto/ChatMessage';
import { default as React } from 'react';
import { WidgetProps } from '../Widget';

export declare const AiMessage: React.FC<{
    msg?: ChatMessage | MessageWithId;
    persona?: Persona;
    widgetProps: WidgetProps;
    isLastMessage?: boolean;
    isTyping?: boolean;
}>;
