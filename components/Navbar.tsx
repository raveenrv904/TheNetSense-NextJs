"use client";

import React from "react";
import Logo from "./assets/nav logo.png";
import Image from "next/image";
import { NAVLINKS } from "@/constants/index.constants";
import Link from "next/link";
import { MessageCircle } from "lucide-react";
import NavbarSlider from "./NavbarSlider";
import { motion } from "framer-motion"; // Import Framer Motion

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex mt-5 flex-wrap justify-between items-center shadow-customTabs mx-5 md:mx-10 px-4 md:px-5 py-3 cursor-pointer rounded-full"
    >
      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="ml-5 md:ml-10 flex-shrink-0"
      >
        <Link href={"/"}>
          <Image src={Logo} width={150} height={30} alt="Main Logo" priority />
        </Link>
      </motion.div>

      {/* Links */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="hidden md:flex flex-grow justify-center gap-4 lg:gap-10"
      >
        {NAVLINKS.map((item, index) => (
          <Link
            href={item.link}
            key={index}
            className="hover:font-semibold transition-all duration-200 ease-in-out hover:text-primary text-sm md:text-base"
          >
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
            >
              {item.title}
            </motion.p>
          </Link>
        ))}
      </motion.div>

      {/* Button */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="hidden md:flex mr-5 md:mr-10 flex-shrink-0"
      >
        <Link href={"https://wa.me/+919092125904"} target="_blank">
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: "#FF4040" }}
            className="flex hover:bg-red-600 hover:shadow-customHover transition-all duration-300 ease-in-out items-center gap-1 font-semibold rounded-[4px] text-white bg-primary px-3 md:px-4 py-2 text-xs md:text-base"
          >
            <MessageCircle />
            <p>Get In Touch</p>
          </motion.button>
        </Link>
      </motion.div>

      {/* Navbar Slider */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="flex justify-center items-center mt-2"
      >
        <NavbarSlider />
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
