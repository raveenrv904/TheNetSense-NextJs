import { LucideIcon } from "lucide-react";
import React from "react";
import CountUp from "react-countup";

type Props = {
  Icon: LucideIcon;
  count: number;
  title: string;
  isLast?: boolean;
};

const SpecialCard = ({ Icon, count, title, isLast }: Props) => {
  return (
    <div
      className={`flex flex-col justify-center items-center px-4 sm:px-8 md:px-16 gap-5 sm:gap-2 ${
        !isLast ? "border-r-0 sm:border-r-[5px] border-r-gray-400" : ""
      }`}
    >
      <Icon className="text-primary w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />
      <p className="text-gray-500 font-bold text-[24px] sm:text-[30px] md:text-[35px]">
        <CountUp end={count} />
      </p>
      <h3 className="text-[#696969] font-semibold text-[18px] sm:text-[20px] md:text-[24px] text-center sm:text-left">
        {title}
      </h3>
    </div>
  );
};

export default SpecialCard;