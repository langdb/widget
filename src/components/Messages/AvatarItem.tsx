// Avatar.tsx
import React from 'react';

interface AvatarProps {
  imageUrl?: string;
  name: string;
  className?: string;
}

export const AvatarItem: React.FC<AvatarProps> = ({ imageUrl, name, className }) => {
  const getInitial = (name: string) => {
    return name.charAt(0).toUpperCase();
  };

  return (
    <div className={`avatar ${className}`}>
      {imageUrl ? (
        <img src={imageUrl} alt={name} className="h-full w-full rounded-full object-cover" />
      ) : (
        <div className="h-full w-full rounded-full bg-gray-500 flex items-center justify-center text-white">
          {getInitial(name)}
        </div>
      )}
    </div>
  );
};

