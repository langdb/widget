import { default as React } from 'react';
import { WidgetProps } from './Widget';

interface ChatComponentProps extends WidgetProps {
    newMessageIds?: Set<string>;
}
export declare const ChatComponent: React.FC<ChatComponentProps>;
export {};
