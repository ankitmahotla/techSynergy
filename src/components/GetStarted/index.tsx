import picture from "../../assets/GetStarted.png";
import Button from "../Button";

const GetStarted = () => {
  return (
    <div className="p-5 md:p-10 xl:px-20">
      <div className="bg-[#4AC0F2] pt-28 justify-center text-center min-h-[560px] md:min-h-[632px] rounded-3xl px-14 md:px-0">
        <h2 className="text-white text-4xl md:text-5xl mb-10 md:mb-16">
          Ready to Transform Your Vision into Reality? <br /> Let's Get Started!
        </h2>
        <Button color="#FFFFFF" content="Schedule a Call" />
      </div>
      <div className="flex items-center justify-center -mt-24 sm:-mt-40 md:-mt-60 xl:-mt-72">
        <img src={picture} alt="Get Started Image" />
      </div>
    </div>
  );
};

export default GetStarted;
