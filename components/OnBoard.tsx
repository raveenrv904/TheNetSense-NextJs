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
          title="Use On Any Devices"
          desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the ."
          Icon={User}
          isLeft
        />
        <OnBoardCard
          title="User-Friendly Design"
          desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the ."
          Icon={User}
          isLeft
        />
        <OnBoardCard
          title="Fast & Reliable"
          desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the ."
          Icon={User}
          isLeft
        />
      </div>

      {/* <ContainerScroll /> */}
      <Image
        src={OnBoardImage}
        width={370}
        height={774}
        alt="Onboard Mobile Image"
        className="w-[400px] p-5 h-auto my-8 lg:my-0"
      />

      <div className="flex flex-col gap-6 sm:gap-8 lg:gap-32">
        <OnBoardCard
          title="Customizable Options"
          desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the ."
          Icon={User}
        />
        <OnBoardCard
          title="Cross-Platform Support"
          desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the ."
          Icon={User}
        />
        <OnBoardCard
          title="Efficient Performance"
          desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the ."
          Icon={User}
        />
      </div>
    </section>
  );
};

export default OnBoard;
