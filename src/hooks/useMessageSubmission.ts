import { useCallback } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { onSubmit } from '../components/adapter';
import { ChatMessage, MessageContentType, MessageType } from '../dto/ChatMessage';
import { FileWithPreview } from '../types';
import { WidgetProps } from '../components/Widget';
import { UseChatStateReturn } from './ChatState';

export const useMessageSubmission = (
  props: WidgetProps,
  chatState: UseChatStateReturn
) => {
  const {
    setMessages,
    setCurrentInput,
    setTyping,
    setError,
    setMessageId,
    setThreadId,
    messageId,
    threadId,
  } = chatState;

  return useCallback(
    async (inputProps: { currentInput: string; files: FileWithPreview[] }) => {
      const { currentInput, files } = inputProps;
      if (currentInput.trim() === '') return;

      setMessages((prevMessages) => [
        ...prevMessages,
        {
          id: uuidv4(),
          message: currentInput,
          type: MessageType.HumanMessage,
          content_type: MessageContentType.Text,
          role: 'user',
          threadId,
        },
      ]);
      setCurrentInput('');
      setTyping(true);

      try {
        await onSubmit({
          widgetProps: props,
          files,
          message: currentInput,
          threadId,
          onopen: async (response) => {
            if (
              response.ok &&
              response.headers.get('content-type') === 'text/event-stream'
            ) {
              const threadIdHeader = response.headers.get('X-Thread-Id');
              const messageIdHeader = response.headers.get('X-Message-Id');
              setMessageId(messageIdHeader || undefined);
              setThreadId(threadIdHeader || undefined);
            }
          },
          onmessage: (event) => {
            const newMessage = event.data;
            setMessages((prevMessages) => {
              const lastMessage = prevMessages[prevMessages.length - 1];
              const currentThreadId = threadId;
              const currentMessageId = messageId;
              if (lastMessage.type === MessageType.HumanMessage) {
                return [
                  ...prevMessages,
                  {
                    id: currentMessageId || uuidv4(),
                    message: newMessage,
                    type: MessageType.AIMessage,
                    content_type: MessageContentType.Text,
                    threadId: currentThreadId,
                  },
                ];
              } else {
                const updatedLastMessage = {
                  ...lastMessage,
                  message: lastMessage.message + newMessage,
                };
                return [...prevMessages.slice(0, -1), updatedLastMessage];
              }
            });
          },
          onclose: () => {
            setMessageId(undefined);
            setTyping(false);
          },
        });
      } catch (e: unknown) {
        console.error(e);
        setError(e instanceof Error ? e.message : String(e));
        setTyping(false);
      }
    },
    [
      props,
      setMessages,
      setCurrentInput,
      setTyping,
      setError,
      setMessageId,
      setThreadId,
      threadId,
      messageId,
    ]
  );
};