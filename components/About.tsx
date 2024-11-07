import { ABOUTFEATURES1, ABOUTFEATURES2 } from "@/constants/index.constants";
import { CircleCheck, CircleUser, Phone } from "lucide-react";
import React from "react";

import AboutMain from "./assets/about-main.png";
import AboutSec from "./assets/about sec.png";

import Image from "next/image";

const About = () => {
  return (
    <section className="w-full flex flex-col-reverse lg:flex-row justify-center items-center px-4 py-10 md:px-8 lg:px-12 space-y-10 lg:space-y-0 lg:space-x-6 h-auto my-10 mt-0">
      <div className="space-y-5 lg:flex-1 text-center lg:text-left lg:ml-20">
        <h2 className="uppercase  text-[23px] text-primary font-semibold lg:text-2xl">
          More About Us
        </h2>
        <h3 className="capitalize font-semibold text-[31px] tracking-wider">
          Voluptas enim suscipit temporibus
        </h3>
        <p className="capitalize font-light text-base tracking-wide">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo.
        </p>
        <div className="my-7 flex flex-col md:flex-row gap-5 justify-center lg:justify-start">
          <div className="space-y-2">
            {ABOUTFEATURES1.map((value, index) => (
              <div
                key={index}
                className="flex items-center gap-2 justify-center lg:justify-start"
              >
                <CircleCheck className="text-primary" />
                <p className="font-normal tracking-wide">{value}</p>
              </div>
            ))}
          </div>
          <div className="space-y-2">
            {ABOUTFEATURES2.map((value, index) => (
              <div
                key={index}
                className="flex items-center gap-2 justify-center lg:justify-start"
              >
                <CircleCheck className="text-primary" />
                <p className="tracking-wide">{value}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-10 items-center justify-center lg:justify-start">
          <div className="flex items-center gap-2">
            <CircleUser className="text-primary w-12 h-12" />
            <div>
              <h4 className="text-lg text-black font-medium">Raveen R V</h4>
              <p className="text-primary text-sm">CEO & Founder</p>
            </div>
          </div>
          <div className="flex items-center gap-3 px-5 py-2 rounded-[5px] shadow-lg">
            <Phone fill="#e03a3c" className="text-primary w-7 h-7" />
            <div>
              <p className="text-gray-400 font-medium">Call Us Anytime</p>
              <p className="font-bold tracking-wide">+91 {process.env.PHONE}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:flex-1 !mb-10 lg:!mb-0 flex justify-center items-center">
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
      </div>
    </section>
  );
};

export default About;
