interface ButtonProps {
  color?: string;
  content?: string | JSX.Element;
}

const Button: React.FC<ButtonProps> = ({
  color = "#3171DE",
  content = "Schedule a Call",
}) => {
  const textColor = color === "#FFFFFF" ? "#5E5DEF" : "#FFFFFF"; // Adjusted condition
  return (
    <button
      className="text-white rounded-full p-3 px-6 text-xs md:text-sm lg:text-base font-normal md:font-medium"
      style={{ backgroundColor: color, color: textColor }}
    >
      {typeof content === "string" ? <span>{content}</span> : content}
    </button>
  );
};

export default Button;
