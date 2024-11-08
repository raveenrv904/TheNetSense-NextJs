"use client";

import React from "react";
import Navbar from "./Navbar";
import { Settings } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion"; // Import framer motion

import HeroLogo from "./assets/Hero Img.png";

const Hero = () => {
  return (
    <>
      <Navbar />
      <header className="flex flex-col justify-center my-10 px-4 sm:px-6 md:px-8">
        <div className="flex flex-col-reverse lg:flex-row my-6 md:my-12 lg:my-20 items-center justify-center max-w-[86rem] mx-auto">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 space-y-5 text-center lg:text-left mb-8 lg:mb-0"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-base sm:text-lg w-fit flex items-center px-3 sm:px-4 lg:px-5 cursor-pointer py-1 rounded-full gap-2 bg-secondary mx-auto lg:mx-0"
            >
              <Settings className="text-primary w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
              <p className="text-primary font-semibold">
                Working For Your Success
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[60px] leading-tight font-semibold"
            >
              <h3>Custom Websites</h3>
              <h3>For Business Growth</h3>
              <h3 className="text-primary">with TheNetSense</h3>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <p className="font-medium text-gray-600 text-center lg:text-left text-sm sm:text-base md:text-lg lg:text-xl">
                At TheNetSense, we craft unique, high-converting websites
                designed to elevate your brand, boost engagement, and drive
                measurable growth. Let’s create an online presence that makes an
                impact.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center lg:justify-start"
            >
              <Link
                href={"/#about-us"}
                className="bg-primary text-white px-4 sm:px-5 py-2 sm:py-3 font-semibold tracking-wide rounded-full hover:border hover:bg-white hover:text-primary hover:border-primary transition-all duration-200 ease-in-out"
              >
                Discover More
              </Link>
              <Link
                href={"https://wa.me/+919092125904"}
                target="_blank"
                className="border border-primary text-primary px-4 sm:px-5 py-2 sm:py-3 font-semibold tracking-wide rounded-full bg-white hover:bg-primary hover:text-white transition-all duration-200 ease-in-out"
              >
                Get In Touch
              </Link>
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex-1 flex items-center justify-center mb-8 lg:mb-0"
          >
            <Image
              src={HeroLogo}
              width={500}
              height={300}
              alt="TheNetSense Hero Image"
              priority
              className="w-full max-w-[350px] sm:max-w-[350px] md:max-w-[450px] lg:max-w-[650px] object-contain"
            />
          </motion.div>
        </div>
      </header>
    </>
  );
};

export default Hero;
