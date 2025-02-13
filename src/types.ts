import { ChatMessage } from "./dto/ChatMessage";

export interface MessageRequest {
  model: string;
  messages: ChatCompletionMessage[];
  thread_id?: string;
  parameters: object;
  include_history?: boolean;
  stream?: boolean;
  temperature?: number;
  top_p?: number;
  n?: number;
  stop?: string[];
  max_tokens?: number;
  presence_penalty?: number;
  frequency_penalty?: number;
  logit_bias?: object;
  user?: string;
  response_format?: string;
  functions?: {
    name: string;
    description: string;
    parameters: {
      type: string;
      description: string;
      required: boolean;
    }[];
  }[];
  function_call?: {
    name: string;
    arguments: string;
  },
  stream_options?: {
    include_usage: boolean
  }
}

export interface ChatCompletionMessage {
  role: string;
  content: string | ChatMessageContent[];
  name?: string;
  function_call?: {
    name: string;
    arguments: string;
  };
}

type ChatMessageContent = ChatMessageText | ChatMessageContentImage | ChatMessageWithAudio;
export interface ChatMessageContentImage {
  type: string;
  image_url: string | {
    url: string;
  }
}

export interface ChatMessageWithAudio {
  type: string;
  audio: {
    data: string;
    format: string;
  }
}
export interface ChatMessageText {
  type: string;
  text: string;
}

export interface ResizeOptions {
  maxSize: number;
}

export type InnerMessage = string | MessageContentPart[];

export type TextType = string;
export type ImageUrlType = string;
export type MessageContentPart =
  [
    MessageContentType,
    TextType | ImageUrlType,
    object | null
  ];

export enum MessageContentType {
  Text = 'Text',
  ImageUrl = 'ImageUrl',
}


export enum MessageType {
  SystemMessage = "system",
  AIMessage = "ai",
  HumanMessage = "human",
  ToolMessage = "tool"
}


// Define the ImageDetail enum
export enum ImageDetail {
  Auto = "Auto",
  Low = "Low",
  High = "High",
}

export interface FileWithPreview extends File {
  preview: string;
  type: string;
  raw_file: File;
  base64?: string
}

export type ResponseCallbackOptions = {
  traceId?: string
  messageId?: string
  threadId?: string
  modelName: string
  error?: Error
};

export function convert_to(input: ChatMessage[]): ChatCompletionMessage[] {
  return input.map((m: ChatMessage) => {

    if (!m.content_array || m.content_array.length === 0) {
      return {
        role: m.type,
        content: m.message || ''
      }
    }
    let content: ChatMessageContent[] = m.content_array.map(item => {
      let contentPart = item;
      let type = contentPart[0] as string;
      let dataContent = contentPart[1];
      if (type === "ImageUrl") {
        let resultImage: ChatMessageContentImage = {
          type: "image_url",
          image_url: {
            url: dataContent as string
          }
        }
        return resultImage
      } else if (type === 'InputAudio') {
        let resultAudio: ChatMessageWithAudio = {
          type: "audio",
          audio: {
            data: dataContent as string,
            format: "mp3"
          }
        }
        return resultAudio
      } else if (type === 'Text') {
        let resultText: ChatMessageText = {
          type: "text",
          text: dataContent as string
        }
        return resultText
      }
      return undefined
    }).filter(item => item !== undefined)
    return {
      role: m.type,
      content: content
    }
  })
}

export async function createSubmitMessage(props: {
  files?: FileWithPreview[],
  message: string,
  resizeOptions?: ResizeOptions
}): Promise<ChatCompletionMessage> {
  const { files, message } = props;
  if (!files || !files.length) {
    let result: ChatCompletionMessage = {
      role: "user",
      content: message
    }
    return result;
  } else {
    let contentImagesAudios: ChatMessageContent[] = await Promise.all(files
      // only image files are supported
      .filter(file => file && file.type && (file.type.startsWith('audio/') || file.type.startsWith('image/')))
      .map(async (file: FileWithPreview) => {
        if (file.type.startsWith('audio/')) {
          let file_name = file.raw_file.name;
          // format is extracted from file name
          let format = file_name.split('.').pop();
          let submitData = file.base64?.split(',')[1];
          let resultAudio: ChatMessageWithAudio = {
            type: "input_audio",
            audio: {
              data: submitData as string,
              format: format as string
            }
          }
          return resultAudio
        } else {
          const blob = await resizeImage(file, props.resizeOptions);
          if (!blob) {
            throw new Error("resize failed");
          }
          const imageUrl = await blobToBase64(blob);
          if (!imageUrl) {
            throw new Error("base64 failed");
          }
          let resultImage: ChatMessageContentImage = {
            type: "image_url",
            image_url: {
              url: imageUrl as string
            }
          }
          return resultImage
        }
      }))
    let textMessage: ChatMessageText = {
      type: "text",
      text: message
    }
    let finalResult: ChatCompletionMessage = {
      role: "user",
      content: [...contentImagesAudios, textMessage]
    }
    return finalResult;
  }
}
export const createImageUrl = async (props: { file: FileWithPreview, resizeOptions?: ResizeOptions }) => {
  const { file, resizeOptions } = props;
  const blob = await resizeImage(file, resizeOptions);
  if (!blob) {
    throw new Error("resize failed");
  }
  const imageUrl = await blobToBase64(blob);
  if (!imageUrl) {
    throw new Error("base64 failed");
  }
  return imageUrl
}

export async function createInnerMessage(props: {
  files?: FileWithPreview[],
  message: string,
  resizeOptions?: ResizeOptions
}): Promise<InnerMessage> {
  const { files, message } = props;
  if (!files || !files.length) {
    return message;
  } else {
    let parts: MessageContentPart[] = await Promise.all(files
      // only image files are supported
      .filter(file => file && file.type && file.type.startsWith('image/'))
      .map(async (file): Promise<MessageContentPart> => {
        const blob = await resizeImage(file, props.resizeOptions);
        if (!blob) {
          throw new Error("resize failed");
        }
        const imageUrl = await blobToBase64(blob);
        if (!imageUrl) {
          throw new Error("base64 failed");
        }
        return [
          MessageContentType.ImageUrl,
          imageUrl as string,
          null
        ]
      }))
    parts.push(
      [
        MessageContentType.Text,
        message,
        null
      ]
    );
    return parts;
  }
}

export interface IResizeImageOptions {
  maxSize: number;
}

const resizeImage = async (file: FileWithPreview, options?: ResizeOptions): Promise<Blob | null> => {
  const size = options?.maxSize || 256;
  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d')

  if (!ctx) throw new Error("ctx is not available")

  let raw_file = file.raw_file;
  if (!(raw_file instanceof Blob)) {
    return null;
  }

  // Check if the file is an SVG
  if (raw_file.type === 'image/svg+xml') {
    const svgText = await raw_file.text();
    const parser = new DOMParser();
    const svgDoc = parser.parseFromString(svgText, 'image/svg+xml');
    const svgElement = svgDoc.documentElement;

    // Modify the width and height attributes
    svgElement.setAttribute('width', size.toString());
    svgElement.setAttribute('height', size.toString());

    const serializer = new XMLSerializer();
    const resizedSvgText = serializer.serializeToString(svgElement);
    return new Blob([resizedSvgText], { type: 'image/svg+xml' });
  }

  let bitmap = await createImageBitmap(raw_file)

  const { width, height } = bitmap

  // Check if both width and height are less than maxSize
  if (width < size && height < size) {
    return raw_file;
  }

  canvas.width = size
  canvas.height = size

  const ratio = Math.max(size / width, size / height)

  const x = (size - (width * ratio)) / 2
  const y = (size - (height * ratio)) / 2

  ctx.drawImage(bitmap, 0, 0, width, height, x, y, width * ratio, height * ratio)

  return new Promise(resolve => {
    canvas.toBlob(blob => {
      resolve(blob)
    })
  })
}

async function blobToBase64(blob: Blob): Promise<string | ArrayBuffer | null> {
  return new Promise((resolve, _) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result);
    reader.readAsDataURL(blob);
  });
}

export interface Message {
  model_name: string;        // Corresponding LangDB model
  thread_id?: string;       // Identifier of the thread to which this message belongs
  user_id: string;          // UUID
  content_type: MessageContentType;
  content?: string;
  content_array: MessageContentPart[];
  type: MessageType;        // Human / AI Message
}