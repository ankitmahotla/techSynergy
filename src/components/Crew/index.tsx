import Button from "../Button";
import first from "../../assets/Crew/1.png";
import second from "../../assets/Crew/2.png";
import third from "../../assets/Crew/3.png";
import fourth from "../../assets/Crew/4.png";
import fifth from "../../assets/Crew/5.png";
import CrewAvatar from "./CrewAvatar";
import vector from "../../assets/vector.png";
import greenVector from "../../assets/greenvector.svg";

const data = [
  {
    id: 1,
    imageUrl: first,
    title: "Software Developers",
  },
  {
    id: 2,
    imageUrl: second,
    title: "QA Engineers",
  },
  {
    id: 3,
    imageUrl: third,
    title: "UX Designers",
  },
  {
    id: 4,
    imageUrl: fourth,
    title: "Data Scientists",
  },
  {
    id: 5,
    imageUrl: fifth,
    title: "Project Managers",
  },
];

const Crew = () => {
  return (
    <div className="flex flex-col items-center justify-center p-5 md:p-10 xl:px-20">
      <div className="flex items-center space-x-8 md:-space-x-10">
        <img className="hidden md:flex" src={greenVector} />
        <div className="flex justify-center -space-x-8 lg:-space-x-14 flex-wrap md:flex-nowrap">
          {data.map((member) => (
            <CrewAvatar key={member.id} member={member} />
          ))}
        </div>
        <img className="hidden md:flex w-20 h-20" src={vector} alt="" />
      </div>
      <h2 className="my-8 md:my-12 font-medium text-2xl md:text-4xl">
        Let's Form Your Crew
      </h2>
      <Button content="Schedule a Call" />
    </div>
  );
};

export default Crew;
