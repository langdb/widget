import { UserCircleIcon } from "@heroicons/react/24/outline";
import { ChatMessage } from "../../dto/ChatMessage";
import { Persona } from "../../dto/PersonaOptions";
import { AvatarItem } from "./AvatarItem";
import { Files } from "../Files";

export const HumanMessage: React.FC<{ msg: ChatMessage; persona?: Persona }> = ({ msg, persona }) => {
  const { message, files } = msg;
  if (msg.content_array && msg.content_array.length > 0) {
    return (
      <div className="flex items-center gap-2 mb-2">
        <div className="flex flex-col">
          <div className="rounded-lg flex flex-col p-2 gap-2 human-message">
            {msg.content_array.map((item, index) => {
              let contentPart = item;
              let type = contentPart[0] as string; ///=== "Text" ? "Text" : contentPart[0] === "InputAudio" ? "InputAudio" : "ImageUrl";
              let content = contentPart[1];

              if (type === "ImageUrl") {
                return (
                  <div key={index} className="flex flex-col">
                    <img src={content} />
                  </div>
                )
              } else if (type === 'InputAudio') {
                return <audio controls className="my-2" >
                  <source src={`data:audio/mpeg;base64,${content}`} type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
              } else {
                return (
                  <div key={index} className="flex flex-col">
                    {content}
                  </div>
                )
              }
            })}
          </div>
        </div>
        {!persona ? <AvatarItem className="h-6 w-6 rounded-full" name={"User"} /> : (persona.url ? <AvatarItem name={persona.name} imageUrl={persona.url} className="h-6 w-6 rounded-full" /> : <UserCircleIcon className="h-6 w-6 rounded-full" />)}
      </div>
    )
  }
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