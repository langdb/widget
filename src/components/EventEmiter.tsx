import mitt from 'mitt';
import { FileWithPreview } from '../types';
import { ModelUsage } from '../events';

type Events = {
  langdb_chatSubmit: { inputText: string, files: FileWithPreview[] };
  langdb_chatSubmitSuccess: { threadId: string | undefined };
  langdb_usageStats: { usage: ModelUsage, threadId: string | undefined };
  langdb_fileAdded: { files: FileWithPreview[] };
  langdb_speechRecognitionStart: {};
  langdb_speechRecognitionEnd: {};
  langdb_aiMessageClicked: { threadId: string | undefined, messageId: string | undefined, traceId: string | undefined };
};

export const emitter = mitt<Events>();

