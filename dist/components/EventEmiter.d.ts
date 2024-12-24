import { FileWithPreview } from '../types';
import { ModelUsage } from '../events';

type Events = {
    langdb_chatSubmit: {
        inputText: string;
        files: FileWithPreview[];
    };
    langdb_chatSubmitSuccess: {
        threadId: string | undefined;
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
};
export declare const emitter: import('mitt').Emitter<Events>;
export {};
