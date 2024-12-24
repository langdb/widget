import { useCallback, useState } from "react";
import { ChatMessage } from "../dto/ChatMessage";
import { ModelUsage } from "../events";

export const useChatState = (props:{initialMessages: ChatMessage[]}) => {
    const { initialMessages } = props;
    const [messages, setMessages] = useState<ChatMessage[]>(initialMessages || []);
    const [currentInput, setCurrentInput] = useState<string>('');
    const [threadId, setThreadId] = useState<string | undefined>();
    const [messageId, setMessageId] = useState<string | undefined>();
    const [typing, setTyping] = useState(false);
    const [error, setError] = useState<string | undefined>();
    const [usageInfo, setUsageInfo] = useState<ModelUsage[]>([]);
    const appendUsage = useCallback((usage: ModelUsage) => {
      setUsageInfo((prevUsage) => [...prevUsage, usage]);
    }, [setUsageInfo]);
    return {
      messages,
      setMessages,
      currentInput,
      setCurrentInput,
      threadId,
      setThreadId,
      messageId,
      setMessageId,
      typing,
      setTyping,
      error,
      setError,
      usageInfo,
      appendUsage
    };
  };
  