import { ChatMessage, MessageWithId } from '../dto/ChatMessage';
import { ModelUsage } from '../events';

export declare const useChatState: (props: {
    initialMessages: (ChatMessage | MessageWithId)[];
}) => {
    messages: (ChatMessage | MessageWithId)[];
    setMessages: import('react').Dispatch<import('react').SetStateAction<(ChatMessage | MessageWithId)[]>>;
    currentInput: string;
    setCurrentInput: import('react').Dispatch<import('react').SetStateAction<string>>;
    threadId: string | undefined;
    setThreadId: import('react').Dispatch<import('react').SetStateAction<string | undefined>>;
    messageId: string | undefined;
    setMessageId: import('react').Dispatch<import('react').SetStateAction<string | undefined>>;
    traceId: string | undefined;
    setTraceId: import('react').Dispatch<import('react').SetStateAction<string | undefined>>;
    typing: boolean;
    setTyping: import('react').Dispatch<import('react').SetStateAction<boolean>>;
    error: string | undefined;
    setError: import('react').Dispatch<import('react').SetStateAction<string | undefined>>;
    usageInfo: ModelUsage[];
    appendUsage: (usage: ModelUsage) => void;
    initialMessages: (ChatMessage | MessageWithId)[];
};
