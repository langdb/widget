import { ChatAdapter, StreamingAdapterObserver } from "@nlux/react";
import { FileWithPreview, MessageRequest, ResizeOptions, ResponseCallbackOptions, createInnerMessage } from "../types";
import { useState } from "react";
import { fetchEventSource, FetchEventSourceInit } from '@microsoft/fetch-event-source';

export const DEV_SERVER_URL = "https://api.dev.langdb.ai";
export interface AdapterProps {
  files?: FileWithPreview[],
  fileResizeOptions?: ResizeOptions,
  serverUrl?: string,
  modelName: string,
  agentParams?: object;
  threadId?: string;
  publicId?: string;
  userId?: string;
  getAccessToken?: () => Promise<string>;
  responseCallback?: (_opts: ResponseCallbackOptions) => void;
}

export interface SubmitProps extends FetchEventSourceInit {
  widgetProps: AdapterProps;
  message: string;
  threadId?: string;
}

export const getHeaders = async (props: AdapterProps): Promise<any> => {
  const headers: any = { "Content-Type": "application/json" };
  if (props.publicId) {
    headers["X-PUBLIC-APPLICATION-ID"] = props.publicId;
  } else {
    const token = await props.getAccessToken?.();
    if (!token)
      throw new Error("Failed to get the user token");

    headers.Authorization = `Bearer ${token}`;
  }
  return headers;
}
class FatalError extends Error { }

export const onSubmit = async (submitProps: SubmitProps) => {
  const { widgetProps: props, message, threadId, onopen, onmessage, onerror, onclose } = submitProps;
  const { files, fileResizeOptions: resizeOptions } = props;
  const serverUrl = props.serverUrl || DEV_SERVER_URL;
  const apiUrl = `${serverUrl}/stream`;
  const { modelName, agentParams } = props;

  try {
    const headers = await getHeaders(props);
    const innerMsg = await createInnerMessage({ files, message, resizeOptions });
    const request: MessageRequest = {
      model_name: modelName,
      parameters: agentParams || {},
      user_id: props.userId || "",
      thread_id: threadId,
      message: innerMsg,
    };
    await fetchEventSource(apiUrl, {
      method: "POST",
      body: JSON.stringify(request),
      headers,
      credentials: 'include',
      onopen,
      onmessage,
      onclose,
      onerror
    });
  } catch (e: any) {
    const error = new Error(e.toString());
    if (props.responseCallback) {
      props.responseCallback({ error, modelName });
    }
  }
}
export const useAdapter = (props: AdapterProps): { adapter: ChatAdapter, threadId?: string, messageId?: string } => {
  const { files, fileResizeOptions: resizeOptions } = props;
  const serverUrl = props.serverUrl || DEV_SERVER_URL;
  const apiUrl = `${serverUrl}/stream`;

  const [threadId, setThreadId] = useState<string | undefined>(props.threadId);
  const [messageId, setMessageId] = useState<string | undefined>();
  const { modelName, agentParams } = props;
  const adapter = {
    streamText: async (message: string, observer: StreamingAdapterObserver) => {
      try {
        const headers = await getHeaders(props);
        const innerMsg = await createInnerMessage({ files, message, resizeOptions });
        const request: MessageRequest = {
          model_name: modelName,
          parameters: agentParams || {},
          user_id: props.userId || "",
          thread_id: threadId,
          message: innerMsg,
        };
        await fetchEventSource(apiUrl, {
          method: "POST",
          body: JSON.stringify(request),
          headers,
          credentials: 'include',
          async onopen(response) {
            if (response.ok && response.headers.get('content-type') === "text/event-stream") {
              const threadIdHeader = response.headers.get('X-Thread-Id') as string | undefined;
              const messageIdHeader = response.headers.get('X-Message-Id') as string | undefined;
              setMessageId(messageIdHeader);
              setThreadId(threadIdHeader);

              if (props.responseCallback) {
                const traceId = response?.headers.get('x-trace-id') as string | undefined;
                props.responseCallback({
                  traceId,
                  modelName,
                  threadId: threadIdHeader,
                  messageId: messageIdHeader
                });
              }
              if (!response.body) {
                throw new FatalError("No body found");
              }
              return;
            } else if (response.status >= 400 && response.status < 500 && response.status !== 429) {
              // client-side errors are usually non-retriable:
              const text = await response.text();
              throw new FatalError(text || `${response.status}: Failed to send message to the server`);
            } else {
              return;
            }

          },
          onmessage(msg) {
            // if the server emits an error message, throw an exception
            // so it gets handled by the onerror callback below:
            // We only send events for errors


            if (msg.event) {
              throw new FatalError(msg.data);
            } else {
              observer.next(msg.data);
            }
          },
          onclose() {
            // if the server closes the connection unexpectedly, retry:
            // throw new RetriableError();
            // observer.complete();
            return;
          },
          onerror(err) {
            throw err; // rethrow to stop the operation
          }
        });
      } catch (e: any) {
        const error = new Error(e.toString());
        if (props.responseCallback) {
          props.responseCallback({ error, modelName });
        }
        observer.error(error);
      }
      observer.complete();
    },
  };
  return {
    adapter,
    threadId,
    messageId
  }
}