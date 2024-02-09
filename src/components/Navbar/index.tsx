import logo from "../../assets/Logo/logo.png";
import { FaAngleDown } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import Button from "../Button";

const Navbar = () => {
  return (
    <nav
      className="flex items-center justify-between text-base p-5 md:p-10 xl:px-20"
      role="navigation"
    >
      <img src={logo} className="w-12 h-12" alt="logo" />
      <div className="block md:hidden">
        <IoMenu size={25} aria-label="Menu" />
      </div>
      <ul
        className="hidden md:flex md:gap-6 lg:gap-16 bg-[#F7F7FD] rounded-full px-8 py-4 font-medium text-[#3D3D3D]"
        role="menu"
      >
        <li role="menuitem" className="text-[#3056D3]">
          Home
        </li>
        <li role="menuitem">About us</li>
        <li role="menuitem">Services</li>
        <li role="menuitem">Contact Us</li>
      </ul>

      <div className="hidden md:flex gap-3.5">
        <span className="flex items-center gap-1 text-sm">
          EN <FaAngleDown color="#424242" />
        </span>
        <Button />
      </div>
    </nav>
  );
};

export default Navbar;
