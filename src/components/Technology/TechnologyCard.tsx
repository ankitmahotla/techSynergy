interface Technology {
  imageUrl: string;
  title: string;
  description: string;
}

const TechnologyCard: React.FC<{ technology: Technology }> = ({
  technology,
}) => {
  return (
    <div className="shadow-lg rounded-3xl space-y-10 p-4 md:p-6 h-full">
      <img
        className="w-10 h-10 md:w-12 md:h-12"
        src={technology.imageUrl}
        alt={technology.title}
      />
      <div>
        <h3 className="text-[#3D3D3D] font-medium text-xl md:text-2xl">
          {technology.title}
        </h3>
        <p className="mt-3 text-[#525252] text-xs md:text-base font-normal">
          {technology.description}
        </p>
      </div>
    </div>
  );
};

export default TechnologyCard;
