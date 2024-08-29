import { useState, useCallback, useRef, useEffect } from 'react';
import { fetchEventSource } from '@microsoft/fetch-event-source';
import { v4 as uuidv4 } from 'uuid';
import { DEV_SERVER_URL } from '../components/adapter';

interface ChatMessage {
  id: string;
  message: string;
  role: 'user' | 'assistant';
}

export const useChatLogic = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [currentInput, setCurrentInput] = useState<string>('');
  const [threadId, setThreadId] = useState<string>('a89123f3-191b-4733-9513-e94cd0de5ae7');
  const [currentResponseId, setCurrentResponseId] = useState<string>('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentInput(e.target.value);
  }, []);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    if (currentInput.trim() === '') return;

    setMessages((prevMessages) => [...prevMessages, { id: uuidv4(), message: currentInput, role: 'user' }]);

    await fetchEventSource(`${DEV_SERVER_URL}/stream`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "X-PUBLIC-APPLICATION-ID": '445e863b-83a9-4ec9-8041-aa0514239472'
      },
      body: JSON.stringify({ message: currentInput, model_name: 'thu_super_assistant', thread_id: threadId, user_id: '', parameters: {} }),
      credentials: 'include',
      onopen: async (response) => {
        if (response.ok && response.headers.get('content-type') === "text/event-stream") {
          const threadIdHeader = response.headers.get('X-Thread-Id') as string | undefined;
          const messageIdHeader = response.headers.get('X-Message-Id') as string | undefined;
          setCurrentResponseId(messageIdHeader || '');
          setThreadId(threadIdHeader || '');
        }
      },
      onmessage: (event) => {
        console.log('==== Received message:', event.data);
        const newMessage = event.data;
        setMessages((prevMessages) => {
          const lastMessage = prevMessages[prevMessages.length - 1];
          if (lastMessage.role === 'user') {
            return [...prevMessages, { id: currentResponseId, message: newMessage, role: 'assistant' }];
          } else {
            const updatedLastMessage = { ...lastMessage, message: lastMessage.message + newMessage };
            return [...prevMessages.slice(0, prevMessages.length - 1), updatedLastMessage];
          }
        });
      },
      onclose: () => {
        setCurrentResponseId('');
        setCurrentInput('');
      },
    });
  }, [threadId, currentInput, currentResponseId]);

  return {
    messages,
    currentInput,
    handleInputChange,
    handleSubmit,
    messagesEndRef,
  };
};