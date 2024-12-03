import mitt from 'mitt';

type Events = {
  langdb_chatSubmit: { inputText: string };
  langdb_chatSubmitSuccess: {}
};

const emitter = mitt<Events>();

export default emitter;