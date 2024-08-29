export interface ChatMessage {
    id: string;
    message: string;
    role: 'user' | 'assistant';
  }