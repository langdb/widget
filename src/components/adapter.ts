// import { ChatAdapter, StreamingAdapterObserver } from "@nlux/react";
import { ModelEvent } from "../events";
import { ChatCompletionMessage, FileWithPreview, MessageRequest, ResizeOptions, ResponseCallbackOptions } from "../types";
import { fetchEventSource, FetchEventSourceInit } from '@microsoft/fetch-event-source';

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
  onEvent?: (event: ModelEvent) => void;
}

export interface SubmitProps extends FetchEventSourceInit {
  widgetProps: AdapterProps;
  message: string;
  files?: FileWithPreview[];
  threadId?: string;
}

export const getHeaders = async (props: {
  projectId?: string;
  publicId?: string;
  threadId?: string;
  getAccessToken?: () => Promise<string>;
}): Promise<any> => {
  const { projectId, publicId, getAccessToken, threadId } = props;
  const headers: any = { "Content-Type": "application/json" };
  if (projectId) {
    headers["x-project-id"] = projectId;
  }
  if(threadId) {
    headers["X-Thread-Id"] = threadId
  }
  if (publicId) {
    headers["X-PUBLIC-APPLICATION-ID"] = publicId;
  } else {
    const token = await getAccessToken?.();
    if (!token)
      throw new Error("Failed to get the user token");

    headers.Authorization = `Bearer ${token}`;
  }
  return headers;
}

export const onSubmit = async (submitProps: SubmitProps) => {
  const { widgetProps, message, threadId, onopen, onmessage, onerror, onclose, } = submitProps;
  // const { fileResizeOptions: resizeOptions } = widgetProps;
  const serverUrl = widgetProps.serverUrl || DEV_SERVER_URL;
  const apiUrl = `${serverUrl}/chat/completions`;
  const { modelName, agentParams, responseCallback } = widgetProps;

  try {
    const headers = await getHeaders(widgetProps);
    // if(files && files.length > 0) {
    //   let _imageUrls= await Promise.all(files.map(file => {
    //     return createImageUrl({ file, resizeOptions })
    //   }));
    // }

    const userCompletionMessage: ChatCompletionMessage = {
      role: 'user',
      content: message
    }
    
    const request: MessageRequest = {
      model: modelName,
      parameters: agentParams || {},
      thread_id: threadId,
      messages: [userCompletionMessage],
      stream: true
      //message: innerMsg,
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
    if (responseCallback) {
      responseCallback({ error, modelName });
    }
  }
}