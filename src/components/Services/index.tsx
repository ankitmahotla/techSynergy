import frontendLogo from "../../assets/ServicesImg/monitor.png";
import backendLogo from "../../assets/ServicesImg/simcard.png";
import dataLogo from "../../assets/ServicesImg/driver.png";
import ServiceCard from "./ServiceCard";

interface Service {
  imageUrl: string;
  title: string;
  description: string;
}

const data: Service[] = [
  {
    imageUrl: frontendLogo,
    title: "Front-end",
    description:
      "Our frontend developers understand the delicate balance between aesthetics and functionality.",
  },
  {
    imageUrl: backendLogo,
    title: "Back-end",
    description:
      " Our backend developers are the architects of efficiency and security. They design and build the databases and APIs.",
  },
  {
    imageUrl: dataLogo,
    title: "Data Analysts",
    description:
      "Our data analytics team is a blend of mathematicians, statisticians, and technology enthusiasts.",
  },
];

const Services: React.FC = () => {
  return (
    <div className="p-5 md:p-10 xl:px-20 mt-10">
      <h2 className="md:text-center text-[#3D3D3D] text-4xl font-medium">
        We have multidisciplinary teams to meet any{" "}
        <span className="text-[#3171DE]">challenge</span>.
      </h2>
      <div className="space-y-6 md:space-y-0 md:flex gap:2 justify-around shadow-lg rounded-3xl p-5 lg:p-8 mt-10 md:mt-20">
        {data.map((item, index) => (
          <ServiceCard key={index} service={item} />
        ))}
      </div>
    </div>
  );
};

export default Services;
