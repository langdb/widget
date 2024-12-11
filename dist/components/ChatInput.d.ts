import { FileWithPreview } from '../types';

export declare const ChatInput: React.FC<{
    onSubmit: (inputText: string, files: FileWithPreview[]) => Promise<void>;
    currentInput: string;
    className?: string;
    setCurrentInput: (input: string) => void;
}>;
