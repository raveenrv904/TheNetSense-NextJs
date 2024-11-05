import Image from "next/image";
import React from "react";
import LogoBlack from "./assets/Logo Black.png";
import {
  OURSERVICES,
  SOCIALMEDIA,
  USEFULLINKS,
} from "@/constants/index.constants";
import Link from "next/link";

const Footer = () => {
  return (
    <section className="flex flex-col lg:flex-row lg:justify-between gap-10 px-4 lg:px-20 py-10 bg-gray-50">
      {/* Logo and Contact Info */}
      <div className="flex-1 flex flex-col items-start">
        <Image
          src={LogoBlack}
          alt="Footer Logo"
          className="w-48 lg:w-[353px]"
        />

        <div className="mt-4">
          <div className="text-sm lg:text-base space-y-2">
            <p className="font-bold">
              Email: <span className="font-medium">{process.env.EMAIL}</span>
            </p>
            <p className="font-bold">
              Phone:{" "}
              <span className="font-medium">+91 {process.env.PHONE}</span>
            </p>
          </div>

          <div className="flex gap-4 mt-4">
            {SOCIALMEDIA.map((item, index) => {
              const { icon: Icon } = item;
              return (
                <Link key={index} href={item.link}>
                  <Icon className="w-6 h-6 md:w-7 md:h-7 text-gray-600 hover:text-blue-600 transition-colors duration-200" />
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* Useful Links */}
      <div className="flex-1 mt-8 lg:mt-0">
        <h3 className="font-semibold text-lg lg:text-xl">Useful Links</h3>
        <div className="flex flex-col mt-4 space-y-1">
          {USEFULLINKS.map((item) => (
            <Link
              className="hover:font-semibold text-gray-500 transition-all duration-200 ease-in-out"
              href={item.link}
              key={item.link}
            >
              <p>{item.label}</p>
            </Link>
          ))}
        </div>
      </div>

      {/* Our Services */}
      <div className="flex-1 mt-8 lg:mt-0">
        <h3 className="font-semibold text-lg lg:text-xl">Our Services</h3>
        <div className="flex flex-col mt-4 space-y-1">
          {OURSERVICES.map((item) => (
            <Link
              className="hover:font-semibold text-gray-500 transition-all duration-200 ease-in-out"
              href={item.link}
              key={item.label}
            >
              <p>{item.label}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Footer;
