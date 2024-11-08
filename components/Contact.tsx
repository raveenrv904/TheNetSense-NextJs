"use client";

import { motion } from "framer-motion";
import React from "react";
import TitleSection from "./TitleSection";
import ContactCard from "./ContactCard";
import { Mail, Phone } from "lucide-react";
import Image from "next/image";
import ContactMiddle from "./assets/247.gif";

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="w-full px-4 py-20 md:px-8 lg:px-12 h-auto my-10 mt-0"
    >
      <TitleSection
        title="contact"
        description="Comprehensive solutions to elevate your online presence and drive business growth."
      />
      <div className="flex flex-col px-5 md:px-0 md:flex-row gap-10 justify-center items-center mt-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="h-[300px] w-full max-w-[374px]"
        >
          <ContactCard
            title="Email"
            name="raveenrv.in@gmail.com"
            icon={<Mail className="w-7 h-7 text-primary" />}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="shadow-custom hover:shadow-customHover transition-all duration-200 ease-in-out flex flex-col justify-center items-center h-[300px] w-full max-w-[374px] max-h-auto gap-3 rounded-md cursor-pointer p-3"
        >
          <div className="flex flex-col justify-center items-center h-full w-full rounded-md cursor-pointer">
            <Image
              src={ContactMiddle}
              width={100}
              height={100}
              alt="logo"
              className="w-full h-full"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: true }}
          className="h-[300px] w-full max-w-[374px]"
        >
          <ContactCard
            title="Phone"
            name="9092125904"
            icon={<Phone className="w-7 h-7 text-primary" />}
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;
