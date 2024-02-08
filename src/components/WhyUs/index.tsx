import NavigationButtons from "../NavigationButtons";
import WhyUsCard from "./WhyUsCard";
import { useRef } from "react";

const data = [
  {
    id: 1,
    title: "Expertise Across the Tech Spectrum",
    description:
      "Our team consists of seasoned developers, designers, and experts who excel in various areas of technology.",
    bgColor: "white",
  },
  {
    id: 2,
    title: "Proven Track Record of Success:",
    description:
      "Our portfolio is a testament to our ability to deliver impactful results.",
    bgColor: "#62AE6E",
  },
  {
    id: 3,
    title: "Collaborative Approach, Transparent Communication:",
    description: "We believe in working hand-in-hand with our clients.",
    bgColor: "white",
  },
  {
    id: 4,
    title: "Tailored Solutions for Your Unique Needs:",
    description: "We understand that no two projects are alike.",
    bgColor: "#3171DE",
  },
];

const WhyUs = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleNext = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  const handlePrev = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };
  return (
    <div className="p-5 md:p-10 xl:px-20">
      <div className="bg-[#F7F7FD] rounded-2xl p-10">
        <h1 className="my-6 mb-10 text-center text-[#3D3D3D] text-2xl md:text-4xl font-medium">
          Choose Us: Your Path to Innovation and <br />
          <span className="text-[#3171DE]">Success</span>
        </h1>
        <div
          className="flex gap-10 overflow-x-auto no-scrollbar py-4"
          ref={containerRef}
        >
          {data.map((item) => (
            <WhyUsCard key={item.id} item={item} />
          ))}
        </div>
        <NavigationButtons
          onPrev={handlePrev}
          onNext={handleNext}
          bgColor="white"
        />
      </div>
    </div>
  );
};

export default WhyUs;
