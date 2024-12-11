import { FileWithPreview } from '../types';

type Events = {
    langdb_chatSubmit: {
        inputText: string;
        files: FileWithPreview[];
    };
    langdb_chatSubmitSuccess: {};
    langdb_fileAdded: {
        files: FileWithPreview[];
    };
    langdb_speechRecognitionStart: {};
    langdb_speechRecognitionEnd: {};
};
export declare const emitter: import('mitt').Emitter<Events>;
export {};
