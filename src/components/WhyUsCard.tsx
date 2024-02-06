const WhyUsCard = ({ item }) => {
  const textColor = item.bgColor !== "white" ? "white" : "#3D3D3D";
  return (
    <div
      className="min-w-60 md:min-w-96 shadow-lg rounded-3xl p-8"
      style={{ backgroundColor: item.bgColor }}
    >
      <h2
        className="text-base md:text-2xl font-medium mb-2"
        style={{ color: textColor }}
      >
        {item.title}
      </h2>
      <p className="text-xs md:text-base" style={{ color: textColor }}>
        {item.description}
      </p>
    </div>
  );
};

export default WhyUsCard;
