import { CheckIcon, ClipboardDocumentIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

export const CopyToClipboard: React.FC<{ content: string } & React.HTMLAttributes<HTMLDivElement>> = ({ content, className, ...restProps }) => {
    const [copied, setCopied] = useState(false);
  
    const handleCopy = (event: React.MouseEvent<HTMLDivElement>) => {
      event.preventDefault();
      navigator.clipboard.writeText(content);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    };
  
    return (
      <div className={`items-center flex flex-row text-xs ${className}`} onClick={handleCopy} {...restProps}>
        {copied ? (
          <CheckIcon className="h-4 ml-2 text-green animate-fadeIn" />
        ) : (
          <ClipboardDocumentIcon className="h-4 ml-2" />
        )}
      </div>
    );
  };