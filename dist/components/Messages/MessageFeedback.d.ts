import { default as React } from 'react';
import { WidgetProps } from '../Widget';

interface MessageFeedbackProps {
    threadId?: string;
    messageId?: string;
    widgetProps: WidgetProps;
    isTyping?: boolean;
}
export declare const MessageFeedback: React.FC<MessageFeedbackProps>;
export {};
