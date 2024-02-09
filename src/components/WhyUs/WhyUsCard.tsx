interface WhyUsCardProps {
  item: {
    title: string;
    description: string;
    bgColor: string;
  };
}

const WhyUsCard: React.FC<WhyUsCardProps> = ({ item }) => {
  const textColor = item.bgColor !== "white" ? "white" : "#3D3D3D";

  return (
    <div
      className="min-w-64 md:min-w-96 shadow-lg rounded-3xl p-8"
      style={{ backgroundColor: item.bgColor }}
    >
      <h2
        className={`text-base md:text-2xl font-medium mb-2 text-${textColor}`}
      >
        {item.title}
      </h2>
      <p className={`text-xs md:text-base text-${textColor}`}>
        {item.description}
      </p>
    </div>
  );
};

export default WhyUsCard;
