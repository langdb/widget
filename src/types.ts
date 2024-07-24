export interface MessageRequest {
  model_name: string;
  message: InnerMessage;
  thread_id?: string;
  user_id: string;          // UUID
  parameters: object;
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
}


// Define the ImageDetail enum
export enum ImageDetail {
  Auto = "Auto",
  Low = "Low",
  High = "High",
}

export type FileWithPreview = File & { preview: string };

export async function createInnerMessage(props: {
  files?: FileWithPreview[],
  message: string,
  resizeOptions?: ResizeOptions
}): Promise<InnerMessage> {
  const { files, message } = props;
  if (!files || !files.length) {
    return message;
  } else {
    let parts: MessageContentPart[] = await Promise.all(files.map(async (file): Promise<MessageContentPart> => {

      // const base64Str = await convertToBase64(file);
      const blob = await resizeImage(file, props.resizeOptions);
      if (!blob) {
        throw new Error("resize failed");
      }
      const imageUrl = await blobToBase64(blob);
      if (!imageUrl) {
        throw new Error("base64 failed");
      }
      console.log(imageUrl);
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
  canvas.width = size
  canvas.height = size

  const bitmap = await createImageBitmap(file)
  const { width, height } = bitmap

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