import { UserCircleIcon } from "@heroicons/react/24/outline";
import { ChatMessage } from "../../dto/ChatMessage";
import { Persona } from "../../dto/PersonaOptions";
import { AvatarItem } from "./AvatarItem";

export const HumanMessage: React.FC<{ msg: ChatMessage; persona?: Persona }> = ({ msg, persona }) => (
  <div className="flex items-center gap-2 mb-2">
    <div className="rounded-lg p-2 human-message">
      {msg.message}
    </div>
    {!persona ? <AvatarItem className="h-6 w-6 rounded-full" name={"User"} /> : ( persona.url ? <AvatarItem name={persona.name} imageUrl={persona.url} className="h-6 w-6 rounded-full" /> : <UserCircleIcon className="h-6 w-6 rounded-full"/>)}
  </div>
);