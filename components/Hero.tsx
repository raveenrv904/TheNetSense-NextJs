import React from "react";
import Navbar from "./Navbar";
import { Settings } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import HeroLogo from "./assets/Hero Img.png";

const Hero = () => {
  return (
    <>
      <Navbar />
      <header className="flex flex-col justify-center my-10 px-4 sm:px-6 md:px-8">
        <div className="flex flex-col-reverse lg:flex-row my-6 md:my-12 lg:my-20 items-center justify-center max-w-6xl mx-auto">
          {/* Text Content */}
          <div className="flex-1 space-y-5 text-center lg:text-left mb-8 lg:mb-0">
            <div className="text-base sm:text-lg w-fit flex items-center px-3 sm:px-4 lg:px-5 cursor-pointer py-1 rounded-full gap-2 bg-secondary mx-auto lg:mx-0">
              <Settings className="text-primary w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
              <p className="text-primary font-semibold">
                Working For Your Success
              </p>
            </div>

            <div className="text-3xl sm:text-4xl md:text-5xl lg:text-[60px] leading-tight font-semibold">
              <h3>Maecenas Vitae</h3>
              <h3>Consectetur Led</h3>
              <h3 className="text-primary">Vestibulum Ante</h3>
            </div>

            <div>
              <p className="font-medium text-gray-600 text-center lg:text-left text-sm sm:text-base md:text-lg lg:text-xl">
                Nullam quis ante. Etiam sit amet orci eget eros faucibus
                tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec
                sodales sagittis magna.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center lg:justify-start">
              <Link
                href={"/#about-us"}
                className="bg-primary text-white px-4 sm:px-5 py-2 sm:py-3 font-semibold tracking-wide rounded-full hover:border hover:bg-white hover:text-primary hover:border-primary transition-all duration-200 ease-in-out"
              >
                Get Started
              </Link>
              <Link
                href={"/#contact-us"}
                className="border border-primary text-primary px-4 sm:px-5 py-2 sm:py-3 font-semibold tracking-wide rounded-full bg-white hover:bg-primary hover:text-white transition-all duration-200 ease-in-out"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Hero Image */}
          <div className="flex-1 flex items-center justify-center mb-8 lg:mb-0">
            <Image
              src={HeroLogo}
              width={500}
              height={300}
              alt="Hero main image"
              className="w-full max-w-[350px] sm:max-w-[350px] md:max-w-[450px] lg:max-w-[650px] object-contain"
            />
          </div>
        </div>
      </header>
    </>
  );
};

export default Hero;
