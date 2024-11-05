import React, { ReactNode } from "react";

type Props = {
  title: "Email" | "Phone";
  name: string | undefined;
  icon: ReactNode;
};

const ContactCard = ({ title, name, icon }: Props) => {
  return (
    <div className="shadow-custom hover:shadow-customHover transition-all duration-200 ease-in-out flex flex-col justify-center items-center h-[300px] w-full max-w-[374px] max-h-auto gap-3 rounded-md cursor-pointer p-4 md:p-6">
      <div className="w-16 h-16 border-dashed hover:border-[2px] transition-all duration-200 ease-in-out border-primary bg-secondary flex justify-center items-center rounded-full">
        {icon}
      </div>
      <h3 className="font-bold uppercase tracking-wider text-lg text-center">
        {title}
      </h3>
      {title === "Email" ? (
        <p className="font-medium tracking-wide text-center">{name}</p>
      ) : (
        <p className="font-medium tracking-wide text-center">+91 {name}</p>
      )}
    </div>
  );
};

export default ContactCard;