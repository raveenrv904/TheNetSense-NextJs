import React from "react";
import TitleSection from "./TitleSection";
import ContactCard from "./ContactCard";
import { Mail, Phone } from "lucide-react";
import Image from "next/image";

import ContactMiddle from "./assets/247.gif";

const Contact = () => {
  return (
    <section className="w-full px-4 py-20 md:px-8 lg:px-12 h-auto my-10">
      <TitleSection
        title="contact"
        description="Comprehensive solutions to elevate your online presence and drive business growth."
      />
      <div className="flex flex-col px-5 md:px-0 md:flex-row gap-10 justify-center items-center mt-16">
        <ContactCard
          title="Email"
          name={process.env.EMAIL}
          icon={<Mail className="w-7 h-7 text-primary" />}
        />
        <div className="shadow-custom hover:shadow-customHover transition-all duration-200 ease-in-out flex flex-col justify-center items-center h-[300px] w-full max-w-[374px] max-h-auto gap-3 rounded-md cursor-pointer p-3 ">
          <div className=" flex flex-col justify-center items-center h-full w-full rounded-md cursor-pointer ">
            <Image
              src={ContactMiddle}
              width={100}
              height={100}
              alt="logo"
              className="w-full h-full"
            />
          </div>
        </div>
        <ContactCard
          title="Phone"
          name={process.env.PHONE}
          icon={<Phone className="w-7 h-7 text-primary" />}
        />
      </div>
    </section>
  );
};

export default Contact;
