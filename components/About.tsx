"use client";

import { ABOUTFEATURES1, ABOUTFEATURES2 } from "@/constants/index.constants";
import { CircleCheck, Phone } from "lucide-react";
import React from "react";
import AboutMain from "./assets/about-main.png";
import AboutSec from "./assets/about sec.png";
import Image from "next/image";
import Profile from "./assets/profile.jpg";
import { motion, useInView } from "framer-motion";

const About = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      ref={ref}
      className="w-full flex flex-col-reverse lg:flex-row justify-center items-center px-4 py-10 md:px-8 lg:px-12 space-y-10 lg:space-y-0 lg:space-x-6 h-auto my-10 mt-0"
    >
      {/* Text and Features Section */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -50 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="space-y-5 lg:flex-1 text-center lg:text-left lg:ml-20"
      >
        <h2 className="uppercase text-[23px] text-primary font-semibold lg:text-2xl">
          More About Us
        </h2>
        <h3 className="capitalize font-semibold text-[31px] tracking-wider">
          Your Digital Growth Partner
        </h3>
        <p className="font-light text-base tracking-wide">
          At TheNetSense, we’re dedicated to helping businesses succeed online.
          Our team specializes in creating customized websites that not only
          look great but also help you reach your goals. We’re here to make your
          digital presence shine.
        </p>

        {/* Features List */}
        <div className="my-7 flex flex-col md:flex-row gap-5 justify-center lg:justify-start">
          {[ABOUTFEATURES1, ABOUTFEATURES2].map((features, idx) => (
            <div key={idx} className="space-y-2">
              {features.map((value, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 justify-center lg:justify-start"
                >
                  <CircleCheck className="text-primary" />
                  <p className="font-normal tracking-wide">{value}</p>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Contact Information */}
        <div className="flex flex-col md:flex-row gap-10 items-center justify-center lg:justify-start">
          <div className="flex items-center gap-2">
            <Image
              src={Profile}
              width={100}
              height={100}
              alt="Founder Profile"
              className="w-12 h-12 rounded-full shadow-customTabsTitle"
            />
            <div>
              <h4 className="text-lg text-black font-medium">Raveen R V</h4>
              <p className="text-primary text-sm">CEO & Founder</p>
            </div>
          </div>
          <div className="flex items-center gap-3 px-5 py-2 rounded-[5px] shadow-lg">
            <Phone fill="#e03a3c" className="text-primary w-7 h-7" />
            <div>
              <p className="text-gray-400 font-medium">Call Us Anytime</p>
              <p className="font-bold tracking-wide">+91 9092125904</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Images Section */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : 50 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="lg:flex-1 !mb-10 lg:!mb-0 flex justify-center items-center"
      >
        <div className="relative">
          <Image
            className="shadow-customHover"
            src={AboutMain}
            width={506}
            height={350}
            alt="About Main Image"
          />
          <div className="p-2 absolute top-1/2 -translate-y-1/2 -left-10 md:-left-16 bg-white shadow-customHover">
            <Image
              src={AboutSec}
              width={200}
              height={200}
              alt="About Secondary Image"
              className="w-32 h-32 sm:w-56 sm:h-56"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
