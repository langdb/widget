import mitt from 'mitt';
import { FileWithPreview } from '../types';

type Events = {
  langdb_chatSubmit: { inputText: string, files: FileWithPreview[] };
  langdb_chatSubmitSuccess: {},
  langdb_fileAdded: { files: FileWithPreview[] };
};

export const emitter = mitt<Events>();

