import Button from "../Button";
import greenVector from "../../assets/greenvector.svg";
import {
  google,
  lg,
  microsoft,
  samsung,
  slack,
  sony,
} from "../../assets/TrustedByLogos";

const TrustedBy = () => {
  return (
    <div className="p-5 md:p-10 xl:px-20">
      <div className="bg-[#F7F7FD] rounded-2xl p-10">
        <div className="flex relative">
          <img
            className="hidden md:flex"
            src={greenVector}
            alt="Green Vector Background"
          />
          <div className="md:absolute top-0 left-0 right-0 bottom-0">
            <h2 className="text-center text-2xl md:text-4xl font-medium pt-6">
              Trusted by Leading Organizations
            </h2>
            <p className="text-center text-xl font-medium mt-8 text-[#525252]">
              Our 4,000+ team has expertise in almost <br /> every programming
              language.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap md:flex-no-wrap gap-4 md:gap-6 overflow-hidden items-center justify-center mt-10 md:mt-16 md:p-10">
          <img
            src={samsung}
            className="max-w-20 md:max-w-44 max-h-14"
            alt="Samsung Logo"
          />
          <img
            src={microsoft}
            className="max-w-20 md:max-w-44 max-h-14"
            alt="Microsoft Logo"
          />
          <img
            src={google}
            className="max-w-20 md:max-w-44 max-h-14"
            alt="Google Logo"
          />
          <img
            src={slack}
            className="max-w-20 md:max-w-44 max-h-14"
            alt="Slack Logo"
          />
          <img
            src={lg}
            className="max-w-20 md:max-w-44 max-h-14"
            alt="LG Logo"
          />
          <img
            src={sony}
            className="max-w-20 md:max-w-44 max-h-14"
            alt="Sony Logo"
          />
        </div>
        <div className="flex items-center justify-center">
          <Button color="#3171DE" content="Our full repertoire" />
        </div>
      </div>
    </div>
  );
};

export default TrustedBy;
