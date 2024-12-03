type Events = {
    langdb_chatSubmit: {
        inputText: string;
    };
    langdb_chatSubmitSuccess: {};
};
declare const emitter: import('mitt').Emitter<Events>;
export default emitter;
