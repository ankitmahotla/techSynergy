import { useState } from "react";
import Button from "./Button";
import { GrFormNextLink } from "react-icons/gr";

const Footer = () => {
  const [email, setEmail] = useState("");
  return (
    <div className="p-5 md:p-10 xl:px-20 mt-10">
      <div className="flex justify-between ">
        <div className="font-medium text-base text-[#0A142F]">
          <h3 className="mb-3">Product</h3>
          <ul className="font-light space-y-2">
            <li>Employee database</li>
            <li>Payroll</li>
            <li>Absences</li>
            <li>Time Tracking</li>
            <li>Shift Planner</li>
            <li>Recruiting</li>
          </ul>
        </div>
        <div className="font-medium text-base text-[#0A142F]">
          <h3 className="mb-3">Information</h3>
          <ul className="font-light space-y-2">
            <li>FAQ</li>
            <li>Blog</li>
            <li>Support</li>
          </ul>
        </div>
        <div className="hidden md:block font-medium text-base text-[#0A142F]">
          <h3 className="mb-3">Company</h3>
          <ul className="font-light space-y-2">
            <li>About us</li>
            <li>Careers</li>
            <li>Contact us</li>
            <li>Lift Media</li>
          </ul>
        </div>
        <div className="hidden md:flex flex-col justify-center bg-[#f4f5f9] max-w-[369px] max-h-[261px] p-6 rounded-3xl">
          <h3 className="text-base font-normal">Subscribe</h3>
          <div className="flex items-center -space-x-8 my-4">
            <input
              type="email"
              value={email}
              className="p-3 rounded-3xl focus:outline-none"
              placeholder="Email Address"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button content={<GrFormNextLink size={24} />} />
          </div>
          <p className="text-xs font-light">
            Hello, we are Lift Media. Our goal is to translate the positive
            effects from revolutionizing how companies engage with their clients
            & their team.
          </p>
        </div>
      </div>
      <div className="block md:hidden font-medium text-base text-[#0A142F] mt-10">
        <h3 className="mb-3">Company</h3>
        <ul className="font-light space-y-2">
          <li>About us</li>
          <li>Careers</li>
          <li>Contact us</li>
          <li>Lift Media</li>
        </ul>
      </div>
      <div className="flex md:hidden flex-col justify-center bg-[#f4f5f9] p-6 rounded-3xl mt-10">
        <h3 className="text-base font-normal">Subscribe</h3>
        <div className="flex items-center -space-x-8 my-4">
          <input
            type="email"
            value={email}
            className="p-3 rounded-3xl focus:outline-none"
            placeholder="Email Address"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button content={<GrFormNextLink size={24} />} />
        </div>
        <p className="text-xs font-light">
          Hello, we are Lift Media. Our goal is to translate the positive
          effects from revolutionizing how companies engage with their clients &
          their team.
        </p>
      </div>
    </div>
  );
};

export default Footer;
