import mainBg from "../assets/Image/mainBG.png";
import Button from "./Button";

const Main = () => {
  return (
    <div className="md:p-10 xl:px-20">
      <div className="relative">
        <img
          src={mainBg}
          className="w-screen md:min-w-full aspect-[1] md:aspect-[16/9] lg:aspect-[2]"
        />
        <div className="absolute top-0 bottom-0 left-0 right-0 min-w-full bg-black bg-opacity-50 md:bg-gradient-to-r md:from-white md:to-white/10 md:rounded-3xl self-center pl-4 md:pl-0">
          <div className="flex flex-col items-start justify-center md:w-2/6 h-full">
            <span className="text-[#F3BC4C] text-xs md:text-xl">
              TECH SERVICES
            </span>
            <h1 className="text-white md:text-black text-4xl md:text-6xl font-semibold md:font-medium md:leading-20 mt-4">
              TechSynergy:
              <br /> Innovate, Create, Elevate
            </h1>
            <p className="text-white md:text-black text-sm md:text-lg font-medium my-6 xl:my-10">
              Unlocking Possibilities, One Code at a Time
            </p>
            <Button color="#66B066" content="See Projects" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
