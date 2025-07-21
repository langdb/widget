import { useCallback, useState } from "react";
import { ChatMessage } from "../dto/ChatMessage";
import { ModelUsage } from "../events";

export const useChatState = (props: { initialMessages: ChatMessage[] }) => {
  const { initialMessages } = props;
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [currentInput, setCurrentInput] = useState<string>("");
  const [threadId, setThreadId] = useState<string | undefined>();
  const [messageId, setMessageId] = useState<string | undefined>();
  const [traceId, setTraceId] = useState<string | undefined>();
  const [typing, setTyping] = useState(false);
  const [error, setError] = useState<string | undefined>();
  const [usageInfo, setUsageInfo] = useState<ModelUsage[]>([]);
  const appendUsage = useCallback(
    (usage: ModelUsage) => {
      setUsageInfo((prevUsage) => [...prevUsage, usage]);
    },
    [setUsageInfo],
  );

  const displayMessages = [...initialMessages, ...messages];
  // make displayMessages unique by id
  const uniqueMessages = Array.from(
    new Set(displayMessages.map((msg) => msg.id)),
  )
    .map((id) => {
      return displayMessages.find((msg) => msg.id === id);
    })
    .filter((msg) => msg !== undefined) as ChatMessage[];
  return {
    messages: uniqueMessages,
    setMessages,
    currentInput,
    setCurrentInput,
    threadId,
    setThreadId,
    messageId,
    setMessageId,
    traceId,
    setTraceId,
    typing,
    setTyping,
    error,
    setError,
    usageInfo,
    appendUsage,
    initialMessages,
  };
};
