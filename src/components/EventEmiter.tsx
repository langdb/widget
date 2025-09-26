import mitt from "mitt";
import { FileWithPreview } from "../types";
import { ModelUsage } from "../events";

type Events = {
  langdb_chatTerminate: { threadId: string; widgetId: string };
  langdb_refreshMessage: { threadId: string };
  langdb_chatWindow: {
    widgetId: string;
    state: "Processing" | "SubmitStart" | "SubmitEnd" | "SubmitError";
    error?: any;
    threadId?: string;
    messageId?: string;
    traceId?: string;
    runId?: string;
  };

  langdb_input_chatSubmit: {
    inputText: string;
    files: FileWithPreview[];
    searchToolEnabled?: boolean;
    otherTools?: string[];
  };
  langdb_usageStats: {
    usage: ModelUsage;
    threadId: string | undefined;
    widgetId: string | undefined;
  };
  langdb_input_fileAdded: { files: FileWithPreview[] };
  langdb_input_speechRecognitionStart: Record<string, never>;
  langdb_input_speechRecognitionEnd: Record<string, never>;
  langdb_aiMessageClicked: {
    threadId: string | undefined;
    messageId: string | undefined;
    traceId: string | undefined;
    widgetId: string | undefined;
    runId: string | undefined;
  };
  langdb_chat_scrollToBottom: {
    threadId: string | undefined;
    widgetId: string | undefined;
  };
  langdb_clearChat: { threadId?: string; widgetId?: string };
  langdb_newMessageAdded: {
    threadId?: string;
    messageId?: string;
  };
};

export const emitter = mitt<Events>();
