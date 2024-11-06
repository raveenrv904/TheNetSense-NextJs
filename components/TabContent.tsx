import Image, { StaticImageData } from "next/image";
import React from "react";
import { CircleCheckBig } from "lucide-react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";

type Props = {
  title: string;
  desc: string;
  features: Array<{ key: string; feature: string }>;
  pricing: StaticImageData;
  posters: Array<{ link: StaticImageData }>;
  link: string;
};

const TabContent = ({
  title,
  desc,
  features,
  pricing,
  posters,
  link,
}: Props) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  return (
    <div className="w-full flex flex-col lg:flex-row h-full p-3  pb-0 gap-8">
      <div className="flex-1">
        <h2 className="text-primary uppercase tracking-wide font-bold text-2xl">
          {title}
        </h2>
        <p className="text-black pt-3 text-sm text-justify lg:text-left lg:text-base font-medium tracking-wide">
          {desc}
        </p>

        <div className="lg:hidden flex justify-center items-center h-full my-8">
          <Slider
            className="w-[300px] h-[400px] md:w-[350px] md:h-[445px] shadow-customTabs"
            {...settings}
          >
            {posters.map((item, index) => (
              <div key={index} className="w-full h-[400px] md:h-[445px]">
                <Image
                  src={item.link}
                  width={100}
                  height={100}
                  className="w-full h-full object-cover"
                  alt="sample poster"
                />
              </div>
            ))}
          </Slider>
        </div>
        <h3 className="text-black text-lg lg:text-xl pl-3 pt-4">
          You Will Get:
        </h3>
        <div className="flex flex-row justify-between">
          <div className="pl-4 space-y-3 pt-3">
            {features.map((item, index) => (
              <div key={index} className="flex gap-3 items-center">
                <CircleCheckBig size={25} color="#e03a3c" strokeWidth={3} />
                <p className="text-black text-xs md:text-sm lg:text-base font-semibold">
                  {item.feature}
                </p>
              </div>
            ))}
          </div>
          <Image
            className="w-64 -mt-8 lg:-mt-32 hidden md:block lg:hidden"
            src={pricing}
            width={100}
            height={100}
            alt="pricing"
          />
        </div>

        <div className="w-full pt-6 lg:pt-10 flex flex-col-reverse md:flex-col md:items-start lg:flex-row justify-between items-center lg:items-start pl-0 lg:pl-8 gap-4">
          <Link href={link}>
            <button className="bg-primary hover:bg-red-800 transition-all duration-200 ease-in-out text-white font-semibold text-base px-6 py-3 tracking-wide rounded-full">
              Book Now
            </button>
          </Link>
          <Image
            className="w-64 -mt-8 lg:-mt-28 md:hidden lg:block"
            src={pricing}
            width={100}
            height={100}
            alt="pricing"
          />
        </div>
      </div>
      <div className="hidden lg:flex justify-center items-center h-full">
        <Slider
          className="w-[250px] lg:w-[350px] h-[350px] lg:h-[445px] "
          {...settings}
        >
          {posters.map((item, index) => (
            <div key={index} className="w-full h-[350px] lg:h-[445px] ">
              <Image
                src={item.link}
                width={100}
                height={100}
                className="w-full h-full object-cover"
                alt={`${title} Poster ${index}`}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TabContent;