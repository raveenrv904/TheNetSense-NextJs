"use client";

import React from "react";
import SpecialCard from "./SpecialCard";
import { SPECIALSECTION } from "@/constants/index.constants";

const Special = () => {
  return (
    <section className="w-full flex justify-center items-center my-5 mb-10 px-4">
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
    </section>
  );
};

export default Special;
