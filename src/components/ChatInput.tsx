import React from 'react';

interface ChatInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export const ChatInput: React.FC<ChatInputProps> = ({ value, onChange, onSubmit }) => {
  return (
    <form onSubmit={onSubmit} className="message-form flex items-center p-2 bg-white border-t border-gray-300">
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Type your message..."
        className="message-input flex-1 p-2 border border-gray-300 rounded-lg"
      />
      <button type="submit" className="send-button ml-2 p-2 bg-blue-500 text-white rounded-lg">
        Send
      </button>
    </form>
  );
};