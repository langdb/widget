import { UserCircleIcon } from "@heroicons/react/24/outline";
import { ChatMessage } from "../../dto/ChatMessage";
import { Persona } from "../../dto/PersonaOptions";
import { AvatarItem } from "./AvatarItem";
import { Files } from "../Files";

export const HumanMessage: React.FC<{ msg: ChatMessage; persona?: Persona }> = ({ msg, persona }) => {
  const { message, files } = msg;
  return (
    <div className="flex items-center gap-2 mb-2">
      <div className="flex flex-col">
        {files && files.length > 0 && <Files files={files} />}
        <div className="rounded-lg p-2 human-message">
          {message}
        </div>
      </div>
      {!persona ? <AvatarItem className="h-6 w-6 rounded-full" name={"User"} /> : (persona.url ? <AvatarItem name={persona.name} imageUrl={persona.url} className="h-6 w-6 rounded-full" /> : <UserCircleIcon className="h-6 w-6 rounded-full" />)}
    </div>
  )
};