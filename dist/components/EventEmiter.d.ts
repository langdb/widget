type Events = {
    langdb_chatSubmit: {
        inputText: string;
    };
    langdb_chatSubmitSuccess: {};
};
export declare const emitter: import('mitt').Emitter<Events>;
export {};
