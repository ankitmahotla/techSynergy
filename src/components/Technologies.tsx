import vector from "../assets/vector.png";
import code from "../assets/code.png";
import setting from "../assets/setting.png";
import dataImg from "../assets/data.png";
import brush from "../assets/brush.png";
import mobile from "../assets/mobile.png";
import shapes from "../assets/shapes.png";
import TechnologyCard from "./TechnologyCard";
const data = [
  {
    imageUrl: code,
    title: "Custom Software Development",
    description:
      "Create custom software tailored for your unique needs, including front-end, and core back-end technology.",
  },
  {
    imageUrl: setting,
    title: "QA and Testing",
    description:
      "Create custom software tailored for your unique needs, including front-end, and core back-end technology.",
  },
  {
    imageUrl: dataImg,
    title: "AI and Data Science",
    description:
      "Use leading AI, machine learning, and data engineering technologies to unlock business value.",
  },
  {
    imageUrl: brush,
    title: "UX/UI Design",
    description:
      "Create beautiful, pixel-perfect, and easy-to-use designs that delight your end users.",
  },
  {
    imageUrl: mobile,
    title: "Mobile App Development",
    description:
      "Build performant, scalable, and secure mobile applications for iOS and Android devices.",
  },
  {
    imageUrl: shapes,
    title: "Platform and Infrastructure",
    description:
      "Ensure applications are secure, fault tolerant and highly available with our DevOps and Security engineers.",
  },
];

const Technologies = () => {
  return (
    <div className="p-5 md:p-10 xl:px-20">
      <div className="flex gap-4 justify-center mt-32">
        <img className="w-14 h-14 md:w-20 md:h-20" src={vector} alt="" />
        <div>
          <h1 className="font-medium text-2xl md:text-4xl">
            Empowering Your Digital Vision: Our
          </h1>
          <h1 className="font-medium text-2xl md:text-4xl">
            Comprehensive Tech Services.
          </h1>
        </div>
      </div>
      <div className="hidden md:grid grid-cols-3 gap-10 mt-20">
        {data.map((item, index) => (
          <TechnologyCard key={index} technology={item} />
        ))}
      </div>
      <div className="flex pb-4 md:hidden gap-4 overflow-x-auto no-scrollbar mt-10">
        {data.map((item, index) => (
          <div key={index} className="w-full min-w-56">
            {/* Updated the class to make all cards the same width */}
            <TechnologyCard technology={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;
