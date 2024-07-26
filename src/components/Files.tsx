import { useCallback } from "react";
import { FileWithPreview } from "../types";
import { useDropzone } from "react-dropzone";
import { MinusIcon } from "./Icons";
interface FilesProps {
  files: FileWithPreview[];
  setFiles: React.Dispatch<React.SetStateAction<FileWithPreview[]>>
}

export const Thumbnails = ({ files }: { files: FileWithPreview[] }) => {
  return (<>{
    files.map(file => (
      <div key={file.name} className="thumbnail m-2">
        <div className="thumbnailInner">
          <img src={file.preview} alt={file.name} className="w-[150px]" />
        </div>

      </div>
    ))
  }</>)
}

export const Files = ({ files, setFiles }: FilesProps) => {

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setFiles(prevFiles => [...prevFiles, ...acceptedFiles.map(file => Object.assign(file, {
      preview: URL.createObjectURL(file)
    }))]);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const removeFile = (file: FileWithPreview) => () => {
    const newFiles = files.filter(f => f !== file);
    setFiles(newFiles);
  };
  return <div className="flex flex-col w-[100%] dropzone border">

    <div {...getRootProps()} className="flex items-center justify-center p-4 border-2 border-dashed border-gray-400 rounded-lg cursor-pointer hover:border-gray-500">
      <input {...getInputProps()} />
      <p className="text-gray-600">Drag & drop images, or click to select files</p>
    </div>
    <aside className="flex flex-wrap mt-4">
      {files.map(file => (
        <div key={file.name} className="relative m-2">
          <button onClick={removeFile(file)} className="absolute top-0 right-0 p-1 bg-red-500 rounded-full text-white">
            <MinusIcon className="w-4 h-4" />
          </button>
          <div className="border p-1 rounded-lg">
            <img src={file.preview} alt={file.name} className="w-32 h-32 object-cover rounded-lg" />
          </div>
        </div>
      ))}
    </aside>
  </div>
}
