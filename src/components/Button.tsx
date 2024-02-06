const Button = ({ color = "#3171DE", content }) => {
  const textColor = color === "white" ? "#5E5DEF" : "white";
  return (
    <button
      className="text-white rounded-full p-3 px-6 text-sm md:text-base font-normal md:font-medium"
      style={{ backgroundColor: color, color: textColor }}
    >
      {content}
    </button>
  );
};

export default Button;
