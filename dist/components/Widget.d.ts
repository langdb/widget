import { AdapterProps } from './adapter';
import { default as React } from 'react';
import { ChatMessage } from '../dto/ChatMessage';
import { PersonaOptions } from '../dto/PersonaOptions';
import { ConversationStarter } from '../dto/ConversationStarter';
import { CacheConfig, InititalPrompt, MCPTools } from '../dto/ParamInput';

export interface WidgetProps extends AdapterProps {
    personaOptions?: PersonaOptions;
    messages?: ChatMessage[];
    initialPrompts?: InititalPrompt[];
    variables?: Record<string, any>;
    mcpTools?: MCPTools[];
    cacheConfig?: CacheConfig;
    style?: React.CSSProperties;
    className?: string;
    controls?: {
        enableFiles?: boolean;
    };
    theme?: "light" | "dark";
    starters?: ConversationStarter[];
    threadId?: string;
    projectId?: string;
    getAccessToken?: () => Promise<string>;
    apiKey?: string;
    publicId?: string;
    serverUrl?: string;
    hideChatInput?: boolean;
    autoRefreshThread?: boolean;
    renderLoading?: () => React.ReactNode;
    searchToolEnabled?: boolean;
    toggleSearchTool?: (enabled: boolean) => void;
    renderStarter?: () => React.ReactNode;
    renderProviderAvatar?: (props: {
        modelName: string;
        messageType: string;
    }) => React.ReactNode;
    widgetId?: string;
    lastAiMessageClass?: string;
    guards_slug?: string[];
    dynamicBody?: any;
}
export declare const Widget: React.FC<WidgetProps>;
