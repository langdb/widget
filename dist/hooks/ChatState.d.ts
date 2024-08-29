import { ChatMessage } from '../dto/ChatMessage';

export declare const useChatState: (props: {
    initialMessages: ChatMessage[];
}) => {
    messages: ChatMessage[];
    setMessages: import('react').Dispatch<import('react').SetStateAction<ChatMessage[]>>;
    currentInput: string;
    setCurrentInput: import('react').Dispatch<import('react').SetStateAction<string>>;
    threadId: string | undefined;
    setThreadId: import('react').Dispatch<import('react').SetStateAction<string | undefined>>;
    messageId: string | undefined;
    setMessageId: import('react').Dispatch<import('react').SetStateAction<string | undefined>>;
    typing: boolean;
    setTyping: import('react').Dispatch<import('react').SetStateAction<boolean>>;
    error: string | undefined;
    setError: import('react').Dispatch<import('react').SetStateAction<string | undefined>>;
};
