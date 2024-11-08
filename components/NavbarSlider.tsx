import React from "react";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import Image from "next/image";

import Logo from "./assets/nav logo.png";
import { NAVLINKS } from "@/constants/index.constants";
import Link from "next/link";
import { MessageCircle } from "lucide-react";

const NavbarSlider = () => {
  return (
    <div className="md:hidden mr-7 md:mr-10">
      <Sheet>
        <SheetTrigger>
          <HamburgerMenuIcon className="w-7 h-7 font-semibold" />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>
              <Image
                src={Logo}
                height={35}
                width={200}
                alt="Navbar slider logo"
              />
            </SheetTitle>
            <SheetDescription>
              <div className="flex flex-col gap-3 text-xl mt-6 text-left">
                {NAVLINKS.map((item, index) => (
                  <Link
                    href={item.link}
                    key={index}
                    className="hover:font-semibold transition-all  duration-200 ease-in-out hover:text-primary"
                  >
                    <p>{item.title}</p>
                  </Link>
                ))}
              </div>

              <div className="mt-8">
                <Link href={"/#somethinf"}>
                  <button className="flex hover:bg-red-600 hover:shadow-customHover transition-all duration-300 ease-in-out items-center gap-1 font-semibold rounded-[4px] text-white bg-primary px-3 md:px-4 py-2 text-xs md:text-base">
                    <MessageCircle />
                    <p>Get In Touch</p>
                  </button>
                </Link>
              </div>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default NavbarSlider;
