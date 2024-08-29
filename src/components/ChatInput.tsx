import { ArrowUpIcon } from "@heroicons/react/24/outline";

export const ChatInput: React.FC<{ onSubmit: (e: React.FormEvent) => void; currentInput: string; setCurrentInput: (input: string) => void }> = ({ onSubmit, currentInput, setCurrentInput }) => (
  <form onSubmit={onSubmit} className="langdb-input-container flex items-center p-2 rounded-lg">
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