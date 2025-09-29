import { EventSourceMessage } from "@microsoft/fetch-event-source";
import { WidgetProps } from "../components/Widget";
import React, { useCallback } from "react";
import { ChatCompletionChunk, ToolCall } from "../events";
import { emitter } from "../components/EventEmiter";
import { FileWithPreview, MessageContentType, MessageType } from "../types";
import { v4 as uuidv4 } from "uuid";
import { useChatState } from "./ChatState";
import { useScrollToBottom } from "./ScrollToBottom";
import { InititalPrompt, MCPTools } from "../dto/ParamInput";
import { onSubmit } from "../components/adapter";

// Custom hook for handling message submission
export const useMessageSubmission = (
  props: WidgetProps,
  chatState: ReturnType<typeof useChatState>,
) => {
  const abortControllerRef = React.useRef<AbortController | null>(null);
  const {
    setMessages,
    setCurrentInput,
    setTyping,
    setError,
    setMessageId,
    setThreadId,
    appendUsage,
    messageId,
    traceId,
    setTraceId,
    threadId,
    messages,
  } = chatState;

  const handleOpen = useCallback(
    async (response: Response, currentThreadId?: string) => {
      if (
        response.ok &&
        response.headers.get("content-type") === "text/event-stream"
      ) {
        const messageIdHeader = response.headers.get("X-Message-Id");
        const updatedThreadId = currentThreadId;
        if (props.responseCallback) {
          const traceId = response.headers.get("x-trace-id") as
            | string
            | undefined;
          props.responseCallback({
            traceId,
            modelName: props.modelName,
            threadId: updatedThreadId,
            messageId: messageIdHeader as string,
          });
        }
      }
      if (!response.ok) {
        const responseJson = await response.json();
        if (responseJson.error) {
          throw new Error(responseJson.error);
        } else {
          throw new Error(response.statusText);
        }
      }
    },
    [props],
  );

  const handleMessage = useCallback(
    (
      msg: EventSourceMessage,
      currentThreadId?: string,
      currentMessageId?: string,
      currentTraceId?: string | null,
      currentRunId?: string | null,
    ) => {
      try {
        if (msg.data === "[DONE]") {
          return;
        }
        const jsonMsg = JSON.parse(msg.data);

        if (jsonMsg.error) {
          setError(jsonMsg.error);
          setTyping(false);
        } else {
          const event = jsonMsg as ChatCompletionChunk;
          if (event.usage) {
            emitter.emit("langdb_usageStats", {
              usage: event.usage,
              threadId: currentThreadId,
              widgetId: props.widgetId,
            });
            appendUsage(event.usage);
          }
          props.onEvent?.(event);

          setMessages((prevMessages) => {
            const lastMessage = prevMessages[prevMessages.length - 1];

            if (lastMessage && lastMessage.type === MessageType.HumanMessage) {
              return [
                ...prevMessages.slice(0, -1),
                { ...lastMessage, threadId: currentThreadId },
                {
                  id: currentMessageId || uuidv4(),
                  message: event.choices
                    .map((choice) => choice.delta.content)
                    .join(""),
                  model_name: event.model,
                  type: MessageType.AIMessage,
                  content_type: MessageContentType.Text,
                  threadId: currentThreadId,
                  trace_id: currentTraceId || undefined,
                },
              ];
            }
            const lastMessageToolCalls = lastMessage.tool_calls || [];
            const inComingToolCalls = event.choices
              .map((choice) => choice.delta.tool_calls)
              .flat()
              .filter((toolCall) => toolCall !== undefined) as ToolCall[]; // if in incomming tool call id already exists in lastMessageToolCalls, then replace the tool call with the new one else add it to the end
            for (const inComingToolCall of inComingToolCalls.filter(
              (toolCall) => toolCall !== undefined,
            )) {
              const existingToolCallIndex = lastMessageToolCalls.findIndex(
                (toolCall) => toolCall.id === inComingToolCall.id,
              );
              if (existingToolCallIndex !== -1) {
                lastMessageToolCalls[existingToolCallIndex] = inComingToolCall;
              } else {
                lastMessageToolCalls.push(inComingToolCall);
              }
            }

            const updatedLastMessage = {
              ...lastMessage,
              message:
                lastMessage.message +
                event.choices.map((choice) => choice.delta.content).join(""),
              tool_calls: lastMessageToolCalls,
              run_id: currentRunId || undefined,
            };

            return [...prevMessages.slice(0, -1), updatedLastMessage];
          });
        }
      } catch (error) {
        console.error("Error processing event:", error);
      }
    },
    [props, setTyping, setError, appendUsage, setMessages],
  );
  const { messagesEndRef, scrollToBottom } = useScrollToBottom();

  const submitMessageFn = useCallback(
    async (inputProps: {
      inputText: string;
      files: FileWithPreview[];
      searchToolEnabled?: boolean;
      otherTools?: string[];
      initialPrompts?: InititalPrompt[];
      variables?: Record<string, any>;
      mcpTools?: MCPTools[];
      dynamicBody?: any;
    }) => {
      abortControllerRef.current = new AbortController();

      const {
        inputText,
        files,
        searchToolEnabled,
        otherTools,
        mcpTools,
        initialPrompts,
        variables,
      } = inputProps;

      if (inputText.trim() === "") return;

      const newMessage = {
        id: uuidv4(),
        message: inputText,
        type: MessageType.HumanMessage,
        content_type: MessageContentType.Text,
        role: "user",
        threadId,
        files,
      };

      setMessages((prevMessages) => {
        return [...prevMessages, newMessage];
      });
      setCurrentInput("");
      setTyping(true);
      setError(undefined);
      scrollToBottom();
      let currentThreadId = threadId;
      const widgetId = props.widgetId;

      try {
        widgetId &&
          emitter.emit("langdb_chatWindow", {
            widgetId,
            state: "SubmitStart",
            threadId: currentThreadId,
            messageId: messageId,
          });
        let currentMessageId = messageId;
        let currentTraceId = traceId;
        let currentRunId: string | undefined = undefined;
        let isFirstSignal = true;
        await onSubmit({
          initialPrompts,
          variables,
          mcpTools,
          searchToolEnabled,
          otherTools,
          previousMessages: messages,
          widgetProps: props,
          files,
          message: inputText,
          threadId,
          signal: abortControllerRef.current?.signal,
          onerror: (error) => {
            widgetId &&
              emitter.emit("langdb_chatWindow", {
                widgetId,
                state: "SubmitError",
                error: error instanceof Error ? error.message : String(error),
                threadId: currentThreadId,
              });
            setError(error instanceof Error ? error.message : String(error));
            setTyping(false);
            props.responseCallback?.({
              error,
              modelName: props.modelName,
            });
            throw error;
          },
          onopen: (response) => {
            if (
              response.ok &&
              response.headers.get("content-type") === "text/event-stream"
            ) {
              const threadIdHeader = response.headers.get("X-Thread-Id");
              const messageIdHeader = response.headers.get("X-Message-Id");
              const traceIdHeader = response.headers.get("X-Trace-Id");
              const runIdHeader = response.headers.get("X-Run-Id");
              currentThreadId = threadIdHeader || currentThreadId;
              currentMessageId = messageIdHeader || currentMessageId;
              currentTraceId = traceIdHeader || currentTraceId;
              currentRunId = runIdHeader || currentRunId;
              setThreadId(currentThreadId);
              setMessageId(currentMessageId);
              setTraceId(currentTraceId);
            }
            widgetId &&
              emitter.emit("langdb_chatWindow", {
                widgetId,
                state: "Processing",
                threadId: currentThreadId,
                messageId: currentMessageId,
                traceId: currentTraceId,
              });
            return handleOpen(response, currentThreadId);
          },
          onmessage: (msg) => {
            widgetId &&
              emitter.emit("langdb_chatWindow", {
                widgetId,
                state: "Processing",
                threadId: currentThreadId,
                messageId: currentMessageId,
                traceId: currentTraceId,
                runId: currentRunId,
              });
            handleMessage(
              msg,
              currentThreadId || threadId,
              currentMessageId || messageId,
              currentTraceId,
              currentRunId,
            );
            if (isFirstSignal) {
              setTimeout(() => {
                scrollToBottom();
              });
            }
            isFirstSignal = false;
            return;
          },
          onclose: () => {
            widgetId &&
              emitter.emit("langdb_chatWindow", {
                widgetId,
                state: "SubmitEnd",
                threadId: currentThreadId,
                messageId: currentMessageId,
                traceId: currentTraceId,
                runId: currentRunId,
              });
            // emitter.emit('langdb_chatSubmitSuccess', { threadId: currentThreadId });
            setMessageId(undefined);
            setTyping(false);
          },
        });
      } catch (error) {
        widgetId &&
          emitter.emit("langdb_chatWindow", {
            widgetId,
            state: "SubmitError",
            error: error instanceof Error ? error.message : String(error),
            threadId: currentThreadId,
            messageId: messageId,
            traceId: traceId,
          });
        if (error instanceof Error && error.name === "AbortError") {
          // Handle abort specifically if needed
          return;
        }
        setError(error instanceof Error ? error.message : String(error));
        setTyping(false);
        // emitter.emit('langdb_chatSubmitError', { error: error instanceof Error ? error.message : String(error) });
      } finally {
        abortControllerRef.current = null;
        widgetId &&
          emitter.emit("langdb_chatWindow", {
            widgetId,
            state: "SubmitEnd",
            threadId: currentThreadId,
            messageId: messageId,
            traceId: traceId,
          });
        // emitter.emit('langdb_chatSubmitDone', { threadId: currentThreadId });
      }
    },
    [
      threadId,
      setMessages,
      setCurrentInput,
      setTyping,
      setError,
      scrollToBottom,
      props,
      messageId,
      traceId,
      messages,
      handleOpen,
      setThreadId,
      setMessageId,
      setTraceId,
      handleMessage,
    ],
  );

  const terminateChat = useCallback(() => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
      abortControllerRef.current = null;
    }
    setTyping(false);
    setMessageId(undefined);
  }, [setTyping, setMessageId]);

  return {
    submitMessageFn,
    messagesEndRef,
    scrollToBottom,
    terminateChat,
  };
};
