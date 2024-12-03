import mitt from 'mitt';

type Events = {
  langdb_chatSubmit: { inputText: string };
  langdb_chatSubmitSuccess: {}
};

export const emitter = mitt<Events>();

