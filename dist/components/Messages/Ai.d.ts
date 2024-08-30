import { Persona } from '../../dto/PersonaOptions';
import { ChatMessage } from '../../dto/ChatMessage';
import { WidgetProps } from '../Widget';

export declare const AiMessage: React.FC<{
    msg?: ChatMessage;
    typing?: boolean;
    persona?: Persona;
    widgetProps: WidgetProps;
}>;
