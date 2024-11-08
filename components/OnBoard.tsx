import React from "react";

// import { ContainerScroll } from "./ui/container-scroll-animation";
import OnBoardCard from "./OnBoardCard";
import { User } from "lucide-react";
import Image from "next/image";

import OnBoardImage from "./assets/Onboard.png";

const OnBoard = () => {
  return (
    <section className="flex mt-32 md:mt-0 flex-col lg:flex-row justify-center items-center mx-5 lg:mx-10 py-10 lg:py-20">
      <div className="flex flex-col gap-6 sm:gap-8 lg:gap-32">
        <OnBoardCard
          title="Built-in SEO Optimization"
          desc="Enhance your website's visibility with built-in SEO tools that improve rankings and help attract the right audience to grow your business."
          Icon={User}
          isLeft
        />
        <OnBoardCard
          title="Google Analytics Integration"
          desc="Track your website’s performance, understand user behavior, and make data-driven decisions with seamless Google Analytics integration."
          Icon={User}
          isLeft
        />
        <OnBoardCard
          title="Fast & Reliable Hosting"
          desc="Enjoy high-speed, reliable hosting with free storage and security, ensuring your site is always accessible and performs efficiently."
          Icon={User}
          isLeft
        />
      </div>

      <Image
        src={OnBoardImage}
        width={370}
        height={774}
        alt="Onboard Mobile Image"
        className="w-[400px] p-5 h-auto my-8 lg:my-0"
      />

      <div className="flex flex-col gap-6 sm:gap-8 lg:gap-32">
        <OnBoardCard
          title="Free Domain Registration"
          desc="Get started with ease – our package includes free domain registration, so your brand has a professional online presence from day one."
          Icon={User}
        />
        <OnBoardCard
          title="Cross-Platform Compatibility"
          desc="Your website will be optimized to perform seamlessly across all devices and platforms, giving your users a smooth experience everywhere."
          Icon={User}
        />
        <OnBoardCard
          title="Customizable Design Options"
          desc="Stand out with fully customizable design options tailored to reflect your brand identity and meet your specific business goals."
          Icon={User}
        />
      </div>
    </section>
  );
};

export default OnBoard;
