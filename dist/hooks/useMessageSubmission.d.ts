import { WidgetProps } from '../components/Widget';
import { default as React } from 'react';
import { FileWithPreview } from '../types';
import { useChatState } from './ChatState';
import { InititalPrompt, MCPTools } from '../dto/ParamInput';

export declare const useMessageSubmission: (props: WidgetProps, chatState: ReturnType<typeof useChatState>) => {
    submitMessageFn: (inputProps: {
        inputText: string;
        files: FileWithPreview[];
        searchToolEnabled?: boolean;
        otherTools?: string[];
        initialPrompts?: InititalPrompt[];
        variables?: Record<string, any>;
        mcpTools?: MCPTools[];
        dynamicBody?: any;
    }) => Promise<void>;
    messagesEndRef: React.RefObject<HTMLDivElement | null>;
    scrollToBottom: () => void;
    terminateChat: () => void;
};
