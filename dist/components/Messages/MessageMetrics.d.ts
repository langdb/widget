import { default as React } from 'react';
import { ChatMessage, MessageWithId } from '../../dto/ChatMessage';

interface MessageMetricsProps {
    message?: ChatMessage | MessageWithId;
    className?: string;
}
export declare const MessageMetrics: React.FC<MessageMetricsProps>;
export {};
