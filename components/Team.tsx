"use client";

import React, { useRef } from "react";
import { TEAMS } from "@/constants/team.constant";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

import profile from "./assets/profile.jpg";
import cre from "./assets/cre.jpg";

const Team = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="team"
      ref={ref}
      className="py-7 sm:py-16 w-full flex flex-col justify-center items-center px-4 md:px-8 lg:px-12 my-7"
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : -20 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center mb-12 max-w-3xl mx-auto"
      >
        <h2 className="uppercase text-[23px] text-primary font-semibold lg:text-2xl mb-2">
          Meet Our Experts
        </h2>
        <h3 className="capitalize font-semibold text-[31px] tracking-wider mb-4">
          The Creative Minds Behind TheNetSense
        </h3>
        {/* <p className="text-gray-600 max-w-2xl mx-auto">
          Our dedicated team combines creativity and technical expertise to
          deliver exceptional digital solutions for your business
        </p> */}
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 max-w-4xl mx-auto"
      >
        {TEAMS.map(
          (
            member: {
              name: string;
              role: string;
            },
            index: number
          ) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-lg cursor-pointer shadow-customHover overflow-hidden hover:shadow-customTabsTitle transition-all duration-300"
            >
              <div className="relative h-72 w-full">
                <Image
                  src={member.name === "Raveen R V" ? profile : cre}
                  alt={`${index}`}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-primary text-sm">{member.role}</p>
              </div>
            </motion.div>
          )
        )}
      </motion.div>
    </section>
  );
};

export default Team;
