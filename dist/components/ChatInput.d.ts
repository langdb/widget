export declare const ChatInput: React.FC<{
    onSubmit: (e: React.FormEvent) => void;
    currentInput: string;
    className?: string;
    setCurrentInput: (input: string) => void;
    onFileIconClick?: () => void;
}>;
