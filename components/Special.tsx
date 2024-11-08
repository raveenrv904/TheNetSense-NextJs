"use client";

import React from "react";
import SpecialCard from "./SpecialCard";
import { SPECIALSECTION } from "@/constants/index.constants";
import { motion, useInView } from "framer-motion"; // Import Framer Motion

const Special = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true }); // Hook to detect if in view

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full flex justify-center items-center my-5 mb-10 px-4"
    >
      <div className="flex flex-wrap justify-center sm:justify-start gap-5 shadow-customHover py-7 rounded-2xl max-w-[90%] sm:max-w-full">
        {SPECIALSECTION.map((item, index) => (
          <SpecialCard
            key={index}
            count={item.count}
            title={item.title}
            Icon={item.Icon}
            isLast={index + 1 === SPECIALSECTION.length}
          />
        ))}
      </div>
    </motion.section>
  );
};

export default Special;
