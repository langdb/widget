import { default as React } from 'react';
import { ChatMessage } from '../../dto/ChatMessage';
import { Persona } from '../../dto/PersonaOptions';

interface SystemMessageProps {
    msg: ChatMessage;
    persona?: Persona;
}
export declare const SystemMessage: React.FC<SystemMessageProps>;
export {};
