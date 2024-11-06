import { LucideIcon } from "lucide-react";
import React from "react";

type Props = {
  title: string;
  desc: string;
  Icon: LucideIcon;
  isLeft?: boolean;
};

const OnBoardCard = ({ title, desc, Icon, isLeft }: Props) => {
  return (
    <>
      {!isLeft && (
        <div className="flex flex-col md:flex-row  items-center gap-5">
          <div className="">
            <div className="bg-secondary p-5 rounded-full">
              <Icon className="text-primary w-10 h-10" />
            </div>
          </div>
          <div className="flex flex-col md:block text-center md:text-left">
            <h3 className="font-semibold text-xl">{title}</h3>
            <p className="max-w-[400px] text-sm">{desc}</p>
          </div>
        </div>
      )}
      {isLeft && (
        <div className="flex flex-col-reverse md:flex-row  items-center gap-5">
          <div className="">
            <h3 className="font-semibold text-xl text-center md:text-right">
              {title}
            </h3>
            <p className="max-w-[400px] text-sm text-center md:text-right">
              {desc}
            </p>
          </div>
          <div className="flex flex-col md:block text-center md:text-left">
            <div className="bg-secondary p-5 rounded-full">
              <Icon className="text-primary w-10 h-10" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default OnBoardCard;
