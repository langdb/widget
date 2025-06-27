import { default as React } from 'react';
import { ChatMessage } from '../../dto/ChatMessage';
import { Persona } from '../../dto/PersonaOptions';
import { WidgetProps } from '../Widget';

interface SystemMessageProps {
    msg: ChatMessage;
    widgetProps: WidgetProps;
    persona?: Persona;
}
export declare const SystemMessage: React.FC<SystemMessageProps>;
export {};
