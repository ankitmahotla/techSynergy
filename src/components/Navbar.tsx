import logo from "../assets/logo.png";
import { FaAngleDown } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import Button from "./Button";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-5 md:p-10 xl:px-20">
      <img src={logo} className="w-12 h-12" alt="logo" />
      <div className="block md:hidden">
        <IoMenu size={25} />
      </div>
      <ul className="hidden md:flex gap-16 bg-[#F7F7FD] rounded-full px-8 py-4 font-medium text-[#3D3D3D]">
        <li className="text-[#3056D3]">Home</li>
        <li>About us</li>
        <li>Services</li>
        <li>Contact Us</li>
      </ul>

      <div className="hidden md:flex gap-3.5">
        <span className="flex items-center gap-1 text-sm">
          EN <FaAngleDown color="#424242" />
        </span>
        <Button color="#3171DE" content="Schedule a Call" />
      </div>
    </div>
  );
};

export default Navbar;
