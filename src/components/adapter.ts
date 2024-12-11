// import { ChatAdapter, StreamingAdapterObserver } from "@nlux/react";
import { ChatCompletionChunk } from "../events";
import { ChatCompletionMessage,  createSubmitMessage, FileWithPreview, MessageRequest, ResizeOptions, ResponseCallbackOptions } from "../types";
import { fetchEventSource, FetchEventSourceInit } from '@microsoft/fetch-event-source';
import { WidgetProps } from "./Widget";

export const DEV_SERVER_URL = "https://api.dev.langdb.ai";
export interface AdapterProps {
  fileResizeOptions?: ResizeOptions,
  serverUrl?: string,
  modelName: string,
  agentParams?: object;
  threadId?: string;
  publicId?: string;
  userId?: string;
  projectId?: string;
  getAccessToken?: () => Promise<string>;
  responseCallback?: (_opts: ResponseCallbackOptions) => void;
  onEvent?: (event: ChatCompletionChunk) => void;
}

export interface SubmitProps extends FetchEventSourceInit {
  widgetProps: WidgetProps;
  message: string;
  files?: FileWithPreview[];
  threadId?: string;
}

export const getHeaders = async (props: {
  projectId?: string;
  publicId?: string;
  threadId?: string;
  getAccessToken?: () => Promise<string>;
  apiKey?: string;
}): Promise<any> => {
  const { projectId, publicId, apiKey, getAccessToken, threadId } = props;
  const headers: any = { "Content-Type": "application/json" };
  if (projectId) {
    headers["x-project-id"] = projectId;
  }
  if (threadId) {
    headers["X-Thread-Id"] = threadId
  }
  if (publicId) {
    headers["X-PUBLIC-APPLICATION-ID"] = publicId;
  }
  if (apiKey) {
    headers.Authorization = `Bearer ${apiKey}`
  } else {
    const token = await getAccessToken?.();
    if (!token)
      throw new Error("Failed to get the user token");

    headers.Authorization = `Bearer ${token}`;
  }
  return headers;
}



export const onSubmit = async (submitProps: SubmitProps) => {
  const { widgetProps, files, message, threadId, onopen, onmessage, onerror, onclose, } = submitProps;
  const { fileResizeOptions: resizeOptions } = widgetProps;
  const serverUrl = widgetProps.serverUrl || DEV_SERVER_URL;
  const apiUrl = `${serverUrl}/chat/completions`;
  const { modelName, agentParams, responseCallback } = widgetProps;

  try {
    const headers = await getHeaders({
      projectId: widgetProps.projectId,
      publicId: widgetProps.publicId,
      getAccessToken: widgetProps.getAccessToken,
      threadId: threadId || widgetProps.threadId,
      apiKey: widgetProps.apiKey
    });

    let submitMessage = await createSubmitMessage({
      files,
      message,
      resizeOptions
    });

    let messages: ChatCompletionMessage[] = [submitMessage];
    if (!threadId && modelName && modelName.includes('claude-')) {
      messages = [
        {
          role: 'system',
          content: 'You are a helpful assistant.'
        },
        submitMessage
      ]
    }


    const request: MessageRequest = {
      model: modelName,
      parameters: agentParams || {},
      thread_id: threadId,
      messages: messages,
      stream: true
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
    onerror?.(error);
    if (responseCallback) {
      responseCallback({ error, modelName });
    }
  }
}