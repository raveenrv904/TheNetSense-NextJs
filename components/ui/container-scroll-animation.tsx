/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useRef } from "react";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";
import Image from "next/image";

import OnBoardImage from "../assets/Onboard.png";

export const ContainerScroll = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const scaleDimensions = () => {
    return isMobile ? [0.8, 1] : [1.1, 1];
  };

  const rotate = useTransform(scrollYProgress, [0, 1], [20, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions());
  const translateY = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <div
      className="h-[50rem] md:h-[80rem] flex items-center justify-center relative p-5 md:p-7 lg:p-10"
      ref={containerRef}
    >
      <div
        className="relative"
        style={{
          perspective: "1000px",
        }}
      >
        <Card rotate={rotate} translateY={translateY} scale={scale} />
      </div>
    </div>
  );
};

export const Card = ({
  rotate,
  scale,
  translateY,
}: {
  rotate: MotionValue<number>;
  scale: MotionValue<number>;
  translateY: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
        translateY,
      }}
      className="w-[80vw] max-w-[300px] md:max-w-[370px] mx-auto"
    >
      <Image
        src={OnBoardImage}
        width={370}
        height={774}
        alt="Onboard Mobile Image"
        className="w-full h-auto my-8 lg:my-0"
      />
    </motion.div>
  );
};
