import { ChatAdapter, StreamingAdapterObserver } from "@nlux/react";
import { FileWithPreview, MessageRequest, ResizeOptions, ResponseCallbackOptions, createInnerMessage } from "../types";
import { useState } from "react";

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
}
export const useAdapter = (props: AdapterProps): ChatAdapter => {
  const { files, fileResizeOptions: resizeOptions } = props;
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
        const response = await fetch(apiUrl, {
          method: "POST",
          body: JSON.stringify(request),
          headers,
        });

        const threadIdHeader = response.headers.get('X-Thread-Id');
        if (threadIdHeader) {
          setThreadId(threadIdHeader); // Call setThreadId with the extracted value
        }


        if (props.responseCallback) {
          props.responseCallback({ response, modelName });
        }

        if (!response.body) {
          throw new Error("No body found");
        }

        if (response.status !== 200) {
          const text = await response.text();
          throw new Error(text || `${response.status}: Failed to send message to the server`);
        }



        // Read a stream of server-sent events
        // and feed them to the observer as they are being generated
        const reader = response.body.getReader();
        const textDecoder = new TextDecoder();
        let content = "";
        while (true) {
          const { value, done } = await reader.read();

          let textDecoded = textDecoder.decode(value, { stream: true });
          if (textDecoded) {
            content += textDecoded;
            observer.next(textDecoded);
          }
          if (done) {
            break;
          }
        }
        observer.complete();
      } catch (e: any) {
        console.log(e);
        const error = new Error(e.toString());
        if (props.responseCallback) {
          props.responseCallback({ error, modelName });
        }
        observer.error(error);
      }

    },
  };
}