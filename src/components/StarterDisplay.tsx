import React from "react";
import { ConversationStarter } from "../dto/ConversationStarter";
import { Avatar } from "./Icons";

interface StarterDisplayProps {
  starters?: ConversationStarter[];
  onStarterClick: (prompt: string) => void;
}

export const StarterDisplay: React.FC<StarterDisplayProps> = ({
  starters,
  onStarterClick,
}) => {
  return (
    <div className="flex h-full self-center flex-1 flex-col justify-center items-center">
      <div className="flex flex-2 gap-3 flex-col justify-center items-center">
        <Avatar width={48} height={48} />
        <span className="font-bold">LangDB</span>
        <div className="flex flex-col justify-center items-center">
          <span className="text-sm">Easily build and deploy AI agents</span>
        </div>
      </div>
      <div className="flex p-8 justify-end items-end">
        <div className="flex flex-row gap-4">
          {starters &&
            starters.map((starter, index) => {
              return (
                <button
                  key={index}
                  onClick={() => {
                    onStarterClick(starter.prompt);
                  }}
                  className="bg-zinc-100 starter-button border bg-opacity-10 h-[101px] w-[160px] line-clamp-2 flex p-[12px] rounded-lg mb-2"
                >
                  <div className="">{starter.prompt}</div>
                </button>
              );
            })}
        </div>
      </div>
    </div>
  );
};