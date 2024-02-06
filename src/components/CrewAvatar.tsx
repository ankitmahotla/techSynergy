const CrewAvatar = ({ member }) => {
  return (
    <div className="flex flex-col items-center">
      <img className="w-40 h-40 md:w-52 md:h-52" src={member.imageUrl} alt="" />
      <h3 className="w-1/2 text-base md:text-lg lg:text-lg text-center font-medium">
        {member.title}
      </h3>
    </div>
  );
};

export default CrewAvatar;
