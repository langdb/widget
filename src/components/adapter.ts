// import { ChatAdapter, StreamingAdapterObserver } from "@nlux/react";
import { FileWithPreview, MessageRequest, ResizeOptions, ResponseCallbackOptions, createInnerMessage } from "../types";
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

export const onSubmit = async (submitProps: SubmitProps) => {
  const { widgetProps, message, threadId, onopen, onmessage, onerror, onclose, } = submitProps;
  const { files, fileResizeOptions: resizeOptions, userId } = widgetProps;
  const serverUrl = widgetProps.serverUrl || DEV_SERVER_URL;
  const apiUrl = `${serverUrl}/stream`;
  const { modelName, agentParams, responseCallback } = widgetProps;

  try {
    const headers = await getHeaders(widgetProps);
    const innerMsg = await createInnerMessage({ files, message, resizeOptions });
    const request: MessageRequest = {
      model_name: modelName,
      parameters: agentParams || {},
      user_id: userId || "",
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
    if (responseCallback) {
      responseCallback({ error, modelName });
    }
  }
}