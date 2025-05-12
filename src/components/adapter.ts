import { ChatCompletionChunk } from "../events";
import { ChatCompletionMessage, convert_to, createSubmitMessage, FileWithPreview, MessageRequest, ResizeOptions, ResponseCallbackOptions } from "../types";
import { fetchEventSource, FetchEventSourceInit } from '@microsoft/fetch-event-source';
import { WidgetProps } from "./Widget";
import { ChatMessage } from "../dto/ChatMessage";
import { InititalPrompt, MCPTools } from "../dto/ParamInput";

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
  previousMessages: ChatMessage[]
  searchToolEnabled?: boolean;
  otherTools?: string[];
  mcpTools?: MCPTools[];
  initialPrompts?: InititalPrompt[],
  variables?: Record<string, any>,
  signal?: AbortSignal;
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
  const { widgetProps, files, message, threadId, onopen, onmessage, onerror, onclose, previousMessages, searchToolEnabled, signal, mcpTools, initialPrompts, variables } = submitProps;
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

    let previous: ChatCompletionMessage[] = convert_to(previousMessages)

    let submitMessage: ChatCompletionMessage = await createSubmitMessage({
      files,
      message,
      resizeOptions,
    });

    const guard_slug = widgetProps.guards_slug || []

    let messages: ChatCompletionMessage[] = [...previous, submitMessage];
    if (!threadId && modelName && modelName.includes('claude-')) {
      messages = [
        {
          role: 'system',
          content: 'You are a helpful assistant.'
        },
        submitMessage
      ]
    }
    if (initialPrompts && initialPrompts.length > 0) {
      messages = [...initialPrompts, ...messages]
    }
    let mcp_servers = mcpTools || []
    if (searchToolEnabled) {
      mcp_servers.push({
        name: 'websearch',
        type: 'memory'
      })
    }
    // make mcp_server unique
    const uniqueMcpServers = Array.from(
      new Map(mcp_servers.map(server => [`${server.name}-${server.type}`, server])).values()
    );


    const request: MessageRequest = {
      model: modelName,
      thread_id: threadId,
      messages: messages,
      
      stream: true,
      stream_options: {
        include_usage: true
      },
      ...(variables && Object.keys(variables).length > 0 ? {
        "variables": variables
      } : {}),
      ...(agentParams || {}),
      ...(uniqueMcpServers.length > 0 ? {
        "mcp_servers": uniqueMcpServers
      } : {}),
      ...(guard_slug && guard_slug.length > 0 ? {
        "extra": {
          "guards": guard_slug
        }
      } : {})
    };
    await fetchEventSource(apiUrl, {
      method: "POST",
      body: JSON.stringify(request),
      headers,
      credentials: 'include',
      onopen,
      onmessage,
      onclose,
      onerror,
      signal
    });
  } catch (e: any) {
    if (responseCallback) {
      responseCallback({ error: e, modelName });
    }
    throw e
  }
}