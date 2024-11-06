import React from "react";

type Props = {
  title: string;
  description: string;
};

const TitleSection = ({ title, description }: Props) => {
  return (
    <div className="w-full text-center px-4 md:px-0 space-y-4">
      <h2 className="text-primary uppercase font-semibold text-2xl md:text-3xl lg:text-[35px]">
        {title}
      </h2>
      <p className="text-black capitalize text-sm md:text-base lg:text-lg mt-2 lg:mt-4">
        {description}
      </p>
    </div>
  );
};

export default TitleSection;
