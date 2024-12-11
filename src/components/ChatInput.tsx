import { ArrowUpIcon, PaperClipIcon } from "@heroicons/react/24/outline";
import { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { FileWithPreview } from "../types";
import { Files } from "./Files";
import { emitter } from "./EventEmiter";

export const ChatInput: React.FC<{
  onSubmit: (inputText: string, files: FileWithPreview[]) => Promise<void>;
  currentInput: string;
  className?: string;
  setCurrentInput: (input: string) => void,
}> = ({ onSubmit, currentInput, setCurrentInput, className }) => {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    setFiles(prevFiles => [
      ...prevFiles,
      ...acceptedFiles.map(file => ({
        preview: URL.createObjectURL(file),
        raw_file: file,
        ...file,
        type: file.type,
      }))
    ]);
  }, []);

  useEffect(() => {
    const handleFileAdded = ({ files }: { files: FileWithPreview[] }) => {
      setFiles(prevFiles => [
        ...prevFiles,
        ...files
      ]);
    };
    emitter.on('langdb_fileAdded', handleFileAdded);
    return () => {
      emitter.off('langdb_fileAdded', handleFileAdded);
    };
  }, []);
  const [files, setFiles] = useState<FileWithPreview[]>([]);
  const { getRootProps, isDragActive, open, getInputProps } = useDropzone({
    onDrop,
    noClick: true,
    noKeyboard: true,
    accept: {
      "image/*": [],
    },
  });



  return <div className="langdb-chat-input bg-inherit sticky bottom-0 pt-1 px-4">
    {files && files.length > 0 && <Files files={files} setFiles={setFiles} />}
    <form {...getRootProps()} onSubmit={(e) => {
      e.preventDefault();
      let currentFiles = files;
      setFiles([]);
      onSubmit(currentInput, currentFiles);
    }}
      className={`langdb-input-container flex items-center p-2 rounded-full mb-3 ${className}`}>
      {isDragActive && (
        <div className="absolute gap-20 flex-col inset-0 bg-black bg-opacity-50 flex justify-center items-center text-white text-xl z-50">
          <div className="flex flex-col justify-center items-center text-xs">
            <span className="font-bold">Add anything</span>
            <span>Drop any file here to add it to conversation</span>
          </div>
        </div>
      )}
      <input {...getInputProps()} className="hidden" />
      <button type="button" onClick={(e) => {
        e.stopPropagation();
        e.preventDefault();
        open();
      }} className="flex items-center justify-center h-8 w-8 rounded-full text-token-text-primary ml-1.5">
        <PaperClipIcon className="h-6 w-6" />
      </button>
      <input
        type="text"
        value={currentInput}
        onChange={(e) => setCurrentInput(e.target.value)}
        placeholder="Type your message..."
        className="langdb-input flex-1 p-2 ring-0 focus:ring-0 focus:outline-none"
      />
      <button
        type="submit"
        className="send-button ml-2 p-2 rounded-full"
        disabled={!currentInput}
      >
        <ArrowUpIcon className="h-5 w-5" />
      </button>
    </form>
  </div>
};