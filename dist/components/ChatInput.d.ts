export declare const ChatInput: React.FC<{
    onSubmit: (inputText: string) => Promise<void>;
    currentInput: string;
    className?: string;
    setCurrentInput: (input: string) => void;
    onFileIconClick?: () => void;
}>;
