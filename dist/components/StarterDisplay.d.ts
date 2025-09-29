import { default as React } from 'react';
import { ConversationStarter } from '../dto/ConversationStarter';

interface StarterDisplayProps {
    starters?: ConversationStarter[];
    onStarterClick: (prompt: string) => void;
}
export declare const StarterDisplay: React.FC<StarterDisplayProps>;
export {};
