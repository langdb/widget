import { useCallback, useRef } from "react";

export const useScrollToBottom = () => {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messagesEndRef]);
  return { messagesEndRef, scrollToBottom };
};
