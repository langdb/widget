import { FileWithPreview } from '../types';

export declare const SoundWaveIcon: () => import("react/jsx-runtime").JSX.Element;
export declare const convertAudioToBase64: (file: File) => Promise<unknown>;
export declare const ChatInput: React.FC<{
    onSubmit: (props: {
        inputText: string;
        files: FileWithPreview[];
        searchToolEnabled?: boolean;
        otherTools?: string[];
    }) => Promise<void>;
    currentInput: string;
    className?: string;
    isProcessing?: boolean;
    setCurrentInput: (input: string) => void;
    searchToolEnabled?: boolean;
    toggleSearchTool?: (enabled: boolean) => void;
}>;
