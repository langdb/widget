import { ArrowUpIcon, PaperClipIcon } from "@heroicons/react/24/outline";

export const ChatInput: React.FC<{
  onSubmit: (inputText: string) => Promise<void>;
  currentInput: string;
  className?: string;
  setCurrentInput: (input: string) => void,
  onFileIconClick?: () => void;
}> = ({ onSubmit, currentInput, setCurrentInput, className, onFileIconClick }) => (
  <form onSubmit={(e) => {
    e.preventDefault();
    onSubmit(currentInput);
  }}
    className={`langdb-input-container flex items-center p-2 rounded-full mb-3 ${className}`}>
    {onFileIconClick && <button type="button" onClick={(e) => {
      e.stopPropagation();
      e.preventDefault();
      onFileIconClick();
    }} className="flex items-center justify-center h-8 w-8 rounded-full text-token-text-primary ml-1.5">
      <PaperClipIcon className="h-6 w-6" />
    </button>}
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
);