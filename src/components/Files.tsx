import { XMarkIcon } from "@heroicons/react/24/solid";
import { FileWithPreview } from "../types";
interface FilesProps {
  files: FileWithPreview[];
  setFiles?: React.Dispatch<React.SetStateAction<FileWithPreview[]>>
}

export const Files = ({ files, setFiles }: FilesProps) => {
  const removeFile = (file: FileWithPreview) => () => {
    const newFiles = files.filter(f => f !== file);
    setFiles && setFiles(newFiles);
  };
  const sizePreview = !setFiles ? 'w-24 h-24': 'w-12 h-12' ;
  return <div className="flex flex-col w-[100%]">
    <aside className="flex flex-wrap mt-4">
      {files.map(file =>  {
        return (
        <div key={file.name} className="relative m-2">
          {setFiles && <button onClick={removeFile(file)} className="absolute right-1 top-1 -translate-y-1/2 translate-x-1/2 rounded-full font-bold bg-slate-400 opacity-80 hover:opacity-100 text-white  border-border p-1  hover:text-black  text-token-text-primary transition-colors">
            <XMarkIcon className="w-2 h-2" />
          </button>}
          <div key={`preview-${file.name}`} className="">
          {file.type === 'application/pdf' && (
              <embed src={file.preview} className={`${sizePreview} border border-border object-cover rounded-lg overflow-hidden`} type="application/pdf" />
            )}
            {file.type === 'text/plain' && (
              <iframe src={file.preview} className={`${sizePreview} border border-border object-cover rounded-lg overflow-hidden`}></iframe>
            )}
            {file.type.startsWith('image/') && (
                <img
                  src={file.preview}
                  alt={file.name}
                  object-fit="cover"
                  className={`${sizePreview} border border-border object-cover rounded-lg`}
                />
              )}
            {file.type.startsWith('audio/') && (
              <audio controls className="bg-black">
                <source src={file.base64} type={file.type} />
                Your browser does not support the audio element.
              </audio>
            )}
          </div>
        </div>
      )})}
    </aside>
  </div>
}
