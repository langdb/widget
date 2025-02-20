import { default as React } from 'react';

/**
 * Scans the input string for JSON segments.
 * When a '{' or '[' is found, it attempts to find the matching closing '}' or ']'
 * while being careful with strings and escapes.
 * If a valid JSON substring is extracted (i.e. JSON.parse succeeds), it’s marked as a JSON segment.
 * Otherwise, the substring is treated as normal text.
 */
interface MessageDisplayProps {
    message: string;
}
export declare const MessageDisplay: React.FC<MessageDisplayProps>;
export declare const BaseMessageDisplay: React.FC<{
    message: string;
}>;
export {};
