import { FileWithPreview } from '../types';

interface FilesProps {
    files: FileWithPreview[];
    setFiles?: React.Dispatch<React.SetStateAction<FileWithPreview[]>>;
}
export declare const Files: ({ files, setFiles }: FilesProps) => import("react/jsx-runtime").JSX.Element;
export {};
