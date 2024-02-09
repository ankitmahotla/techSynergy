import React from "react";

interface Crew {
  title: string;
  imageUrl: string;
}

interface CrewAvatarProps {
  member: Crew;
}

const CrewAvatar: React.FC<CrewAvatarProps> = ({ member }) => {
  return (
    <div className="flex flex-col items-center">
      <img
        className="w-40 h-40 md:w-52 md:h-52"
        src={member.imageUrl}
        alt={`${member.title} Avatar`}
      />
      <h3 className="w-1/2 text-base md:text-lg lg:text-lg text-center font-medium">
        {member.title}
      </h3>
    </div>
  );
};

export default CrewAvatar;
