
import { XMarkIcon } from "@heroicons/react/24/outline";
import { FileWithPreview, Preview } from "../types";
interface FilesProps {
  files: FileWithPreview[];
  setFiles?: React.Dispatch<React.SetStateAction<FileWithPreview[]>>
}

export const Thumbnails = ({ files }: { files: Preview[] }) => {
  return (<>{
    files.map((file, idx) => (
      <div key={idx} className="thumbnail m-2">
        <div className="thumbnailInner">
          <img src={file.preview} alt={file.preview} className="w-[150px]" />
        </div>

      </div>
    ))
  }</>)
}

export const Files = ({ files, setFiles }: FilesProps) => {
  const removeFile = (file: FileWithPreview) => () => {
    const newFiles = files.filter(f => f !== file);
    setFiles && setFiles(newFiles);
  };
  const sizePreview = !setFiles ? 'w-24 h-24': 'w-12 h-12' ;
  return <div className="flex flex-col w-[100%]">
    <aside className="flex flex-wrap mt-4">
      {files.map(file => (
        <div key={file.name} className="relative m-2">
          {setFiles && <button onClick={removeFile(file)} className="absolute right-1 top-1 -translate-y-1/2 translate-x-1/2 rounded-full bg-red-500 text-white  text-token-text-primary transition-colors hover:opacity-100 group-hover:opacity-100 md:opacity-0">
            <XMarkIcon className="w-4 h-4" />
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
                  className={`${sizePreview} border border-border object-cover rounded-lg`}
                />
              )}
          </div>
        </div>
      ))}
    </aside>
  </div>
}
