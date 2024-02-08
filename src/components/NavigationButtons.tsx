import { IoChevronForward, IoChevronBack } from "react-icons/io5";

interface NavigationButtonsProps {
  onPrev: () => void;
  onNext: () => void;
  bgColor?: string;
}

const NavigationButtons: React.FC<NavigationButtonsProps> = ({
  onPrev,
  onNext,
  bgColor = "#F7F7FD",
}) => {
  return (
    <div className="flex items-center justify-center gap-6 mt-4 md:mt-6 ">
      <div
        style={{ backgroundColor: bgColor }}
        className=" text-[#292D32] text-xl md:text-4xl rounded-full p-2 cursor-pointer"
        onClick={onPrev}
      >
        <IoChevronBack />
      </div>
      <div
        style={{ backgroundColor: bgColor }}
        className=" text-[#292D32] text-xl md:text-4xl rounded-full p-2 cursor-pointer"
        onClick={onNext}
      >
        <IoChevronForward />
      </div>
    </div>
  );
};

export default NavigationButtons;
