import { ChatMessage } from "../../dto/ChatMessage";

export const HumanMessage: React.FC<{ msg: ChatMessage; avatar: any }> = ({ msg, avatar: Avatar }) => (
  <div className="flex items-center gap-2 mb-2">
    <div className="rounded-lg p-2 human-message">
      {msg.message}
    </div>
    <Avatar className="h-6 w-6 rounded-full" />
  </div>
);