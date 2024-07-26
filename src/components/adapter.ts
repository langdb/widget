import { ChatAdapter, StreamingAdapterObserver } from "@nlux/react";
import { FileWithPreview, MessageRequest, ResizeOptions, ResponseCallbackOptions, createInnerMessage } from "../types";
import { useState } from "react";
import { EventSourceMessage, fetchEventSource } from '@microsoft/fetch-event-source';
const DEV_SERVER_URL = "https://api.dev.langdb.ai";

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
  onError?: (msg: EventSourceMessage) => void;
}

class FatalError extends Error { }
export const useAdapter = (props: AdapterProps): ChatAdapter => {
  const { files, fileResizeOptions: resizeOptions, onError } = props;
  const serverUrl = props.serverUrl || DEV_SERVER_URL;
  const apiUrl = `${serverUrl}/stream`;

  const [threadId, setThreadId] = useState<string | undefined>(props.threadId);
  const { modelName, agentParams } = props;
  const headers: any = { "Content-Type": "application/json" };
  if (props.publicId) {
    headers["X-PUBLIC-APPLICATION-ID"] = props.publicId;
  }

  return {
    streamText: async (message: string, observer: StreamingAdapterObserver) => {
      if (!props.publicId) {
        const token = await props.getAccessToken?.();
        if (!token) {
          observer.error(new Error("Failed to get the user token"));
          return;
        }
        headers.Authorization = `Bearer ${token}`;
      }

      try {
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
          async onopen(response) {
            if (response.ok && response.headers.get('content-type') === "text/event-stream") {
              const threadIdHeader = response.headers.get('X-Thread-Id');
              if (threadIdHeader) {
                setThreadId(threadIdHeader as string | undefined); // Call setThreadId with the extracted value
              }
              if (props.responseCallback) {
                props.responseCallback({ response, modelName });
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
              if (onError) { onError(msg) };
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
        console.log(e);
        const error = new Error(e.toString());
        if (props.responseCallback) {
          props.responseCallback({ error, modelName });
        }
        observer.error(error);
      }
      observer.complete();
    },
  };
}