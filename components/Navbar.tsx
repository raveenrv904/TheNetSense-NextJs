import React from "react";
import Logo from "./assets/nav logo.png";
import Image from "next/image";
import { NAVLINKS } from "@/constants/index.constants";
import Link from "next/link";
import { MessageCircle } from "lucide-react";
import NavbarSlider from "./NavbarSlider";

const Navbar = () => {
  return (
    <nav className="flex flex-wrap justify-between items-center shadow-customTabs mt-5 mx-5 md:mx-10 px-4 md:px-5 py-3 cursor-pointer rounded-full">
      {/* Logo */}
      <div className="ml-5 md:ml-10 flex-shrink-0">
        <Link href={"/"}>
          <Image src={Logo} width={150} height={30} alt="Main Logo" />
        </Link>
      </div>

      {/* Links */}
      <div className="hidden md:flex flex-grow justify-center gap-4 lg:gap-10">
        {NAVLINKS.map((item, index) => (
          <Link
            href={item.link}
            key={index}
            className="hover:font-semibold transition-all duration-200 ease-in-out hover:text-primary text-sm md:text-base"
          >
            <p>{item.title}</p>
          </Link>
        ))}
      </div>

      {/* Button */}
      <div className="hidden md:flex mr-5 md:mr-10 flex-shrink-0">
        <Link href={"/#somethinf"}>
          <button className="flex hover:bg-red-600 hover:shadow-customHover transition-all duration-300 ease-in-out items-center gap-1 font-semibold rounded-[4px] text-white bg-primary px-3 md:px-4 py-2 text-xs md:text-base">
            <MessageCircle />
            <p>Get In Touch</p>
          </button>
        </Link>
      </div>

      <div className="flex justify-center items-center mt-2">
        <NavbarSlider />
      </div>
    </nav>
  );
};

export default Navbar;
