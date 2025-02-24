import { FileWithPreview } from '../types';
import { ModelUsage } from '../events';

type Events = {
    langdb_chatTerminate: {
        threadId: string;
    };
    langdb_chatWindow: {
        widgetId: string;
        state: 'Processing' | 'SubmitStart' | 'SubmitEnd' | 'SubmitError';
        error?: any;
    };
    langdb_chatSubmit: {
        inputText: string;
        files: FileWithPreview[];
        searchToolEnabled?: boolean;
        otherTools?: string[];
    };
    langdb_chatSubmitSuccess: {
        threadId: string | undefined;
    };
    langdb_chatSubmitDone: {
        threadId: string | undefined;
    };
    langdb_chatSubmitError: {
        error: string;
    };
    langdb_usageStats: {
        usage: ModelUsage;
        threadId: string | undefined;
    };
    langdb_fileAdded: {
        files: FileWithPreview[];
    };
    langdb_speechRecognitionStart: {};
    langdb_speechRecognitionEnd: {};
    langdb_aiMessageClicked: {
        threadId: string | undefined;
        messageId: string | undefined;
        traceId: string | undefined;
    };
};
export declare const emitter: import('mitt').Emitter<Events>;
export {};
