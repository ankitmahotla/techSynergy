import { IoChevronForward, IoChevronBack } from "react-icons/io5";

const NavigationButtons = ({ bgColor = "#F7F7FD" }) => {
  return (
    <div className="flex items-center justify-center gap-6 mt-4 md:mt-6 ">
      <div
        style={{ backgroundColor: bgColor }}
        className=" text-[#292D32] text-xl md:text-4xl rounded-full p-2"
      >
        <IoChevronBack />
      </div>
      <div
        style={{ backgroundColor: bgColor }}
        className=" text-[#292D32] text-xl md:text-4xl rounded-full p-2"
      >
        <IoChevronForward />
      </div>
    </div>
  );
};

export default NavigationButtons;
