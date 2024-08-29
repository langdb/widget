import { useEffect, useRef } from "react";

export const useScrollToBottom = () => {
    const messagesEndRef = useRef<HTMLDivElement>(null);
  
    const scrollToBottom = () => {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };
  
    useEffect(() => {
      scrollToBottom();
    }, []);
  
    return { messagesEndRef, scrollToBottom };
  };
  