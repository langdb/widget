import { PaperClipIcon } from "@heroicons/react/24/outline";
import { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { FileWithPreview } from "../types";
import { Files } from "./Files";
import { emitter } from "./EventEmiter";

export const SoundWaveIcon = () => {
  return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.5 4C8.67157 4 8 4.67157 8 5.5V18.5C8 19.3284 8.67157 20 9.5 20C10.3284 20 11 19.3284 11 18.5V5.5C11 4.67157 10.3284 4 9.5 4Z" fill="currentColor"></path><path d="M13 8.5C13 7.67157 13.6716 7 14.5 7C15.3284 7 16 7.67157 16 8.5V15.5C16 16.3284 15.3284 17 14.5 17C13.6716 17 13 16.3284 13 15.5V8.5Z" fill="currentColor"></path><path d="M4.5 9C3.67157 9 3 9.67157 3 10.5V13.5C3 14.3284 3.67157 15 4.5 15C5.32843 15 6 14.3284 6 13.5V10.5C6 9.67157 5.32843 9 4.5 9Z" fill="currentColor"></path><path d="M19.5 9C18.6716 9 18 9.67157 18 10.5V13.5C18 14.3284 18.6716 15 19.5 15C20.3284 15 21 14.3284 21 13.5V10.5C21 9.67157 20.3284 9 19.5 9Z" fill="currentColor"></path></svg>
}

export const ChatInput: React.FC<{
  onSubmit: (inputText: string, files: FileWithPreview[]) => Promise<void>;
  currentInput: string;
  className?: string;
  setCurrentInput: (input: string) => void,
}> = ({ onSubmit, currentInput, setCurrentInput, className }) => {


  const [isListening, setIsListening] = useState(false);
  const [error, setError] = useState("");
  const [isSupportingSpeechRecognition, setIsSupportingSpeechRecognition] = useState(false);
  useEffect(() => {
    // Check if the browser supports SpeechRecognition
    if (!("webkitSpeechRecognition" in window || "SpeechRecognition" in window)) {
      setIsSupportingSpeechRecognition(false);
    } else {
      setIsSupportingSpeechRecognition(true);
    }
  }, []);
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
    emitter.on('langdb_speechRecognitionStart', () => {
      setIsListening(true);
      setError('');
    });
    emitter.on('langdb_speechRecognitionEnd', () => {
      setIsListening(false);
    });
    return () => {
      emitter.off('langdb_fileAdded', handleFileAdded);
      emitter.off('langdb_speechRecognitionStart', () => {
        setIsListening(true);
        setError('');
      });
      emitter.off('langdb_speechRecognitionEnd', () => {
        setIsListening(false);
      });
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


  const startListening = useCallback( () => {
    if (!("webkitSpeechRecognition" in window || "SpeechRecognition" in window)) {
      setError("Speech recognition is not supported in this browser.");
      return;
    }

    const SpeechRecognition =
      window.SpeechRecognition || (window as any).webkitSpeechRecognition;

    const recognition = new SpeechRecognition();
    recognition.lang = "en-US"; // Set language
    recognition.interimResults = false; // Final results only
    recognition.continuous = false; // Stop automatically after one phrase

    recognition.onstart = () => {
      emitter.emit('langdb_speechRecognitionStart', {});
    };

    recognition.onresult = (event: any) => {
      const speechResult = event.results[0][0].transcript;
      onSubmit(speechResult, files);
    };

    recognition.onerror = (event: any) => {
      setError(event.error);
    };

    recognition.onend = () => {
      emitter.emit('langdb_speechRecognitionEnd', {});
    };

    recognition.start();
  }, []);


  return <div className="langdb-chat-input bg-inherit sticky bottom-0 pt-1 px-4">
    {files && files.length > 0 && <Files files={files} setFiles={setFiles} />}
    {error && <div className="text-red-500">{error}</div>}
    {isListening && <div className="animate-pulse text-xs m-2">Listening...</div>}
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
        disabled={isListening}
        onChange={(e) => setCurrentInput(e.target.value)}
        placeholder="Type your message..."
        className="langdb-input flex-1 p-2 ring-0 focus:ring-0 focus:outline-none"
      />
      {isSupportingSpeechRecognition && <button
        type="button"
        disabled={isListening}
        onClick={(e) => {
          e.stopPropagation();
          e.preventDefault();
          startListening();
        }}
        className="send-button ml-2 rounded-full hover:cursor-pointer"
      >
        <SoundWaveIcon />
      </button>}
    </form>
  </div>
};