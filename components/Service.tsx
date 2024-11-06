"use client";
import React from "react";
import TitleSection from "./TitleSection";
import { Tabs } from "./ui/tabs";
import TabContent from "./TabContent";

import PrisingPoster from "./assets/price.png";
import TabPoster from "./assets/Poster.png";

export const tabs = [
  {
    title: "Web Development",
    value: "web development",
    content: (
      <div className="w-full overflow-hidden relative  rounded-xl p-7 md:p-10 pb-7 md:pb-0 text-xl md:text-4xl font-bold text-white bg-white shadow-customTabs">
        <TabContent
          posters={[
            {
              link: TabPoster,
            },
            {
              link: TabPoster,
            },
            {
              link: TabPoster,
            },
            {
              link: TabPoster,
            },
          ]}
          features={[
            {
              key: "1",
              feature: "Customised Website With Customised Features",
            },
            {
              key: "2",
              feature: "Free Basic Content Management System (CMS)",
            },
            {
              key: "3",
              feature: "Free Search Engine Optimisation (SEO)",
            },
            {
              key: "4",
              feature: "Free Google Analytics Integration",
            },
            {
              key: "5",
              feature: "6 Month Free Technical Support",
            },
          ]}
          pricing={PrisingPoster}
          link="https://google.com"
          title="Web Development"
          desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
        />
      </div>
    ),
  },
  {
    title: "App Development",
    value: "app development",
    content: (
      <div className="w-full overflow-hidden relative  rounded-2xl p-7 md:p-10 pb-7 md:pb-0  text-xl md:text-4xl font-bold text-white bg-white shadow-customTabs">
        <TabContent
          posters={[
            {
              link: TabPoster,
            },
            {
              link: TabPoster,
            },
            {
              link: TabPoster,
            },
            {
              link: TabPoster,
            },
          ]}
          pricing={PrisingPoster}
          features={[
            {
              key: "1",
              feature: "Customised Website With Customised Features",
            },
            {
              key: "2",
              feature: "Free Basic Content Management System (CMS)",
            },
            {
              key: "3",
              feature: "Free Search Engine Optimisation (SEO)",
            },
            {
              key: "4",
              feature: "Free Google Analytics Integration",
            },
            {
              key: "5",
              feature: "6 Month Free Technical Support",
            },
          ]}
          link="https://google.com"
          title="Web Development"
          desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
        />
      </div>
    ),
  },
  {
    title: "Other Enquires",
    value: "others",
    content: (
      <div className="w-full overflow-hidden  relative  rounded-2xl p-7 md:p-10 pb-7 md:pb-0  bg-white shadow-customTabs">
        <TabContent
          posters={[
            {
              link: TabPoster,
            },
            {
              link: TabPoster,
            },
            {
              link: TabPoster,
            },
            {
              link: TabPoster,
            },
          ]}
          pricing={PrisingPoster}
          features={[
            {
              key: "1",
              feature: "Customised Website With Customised Features",
            },
            {
              key: "2",
              feature: "Free Basic Content Management System (CMS)",
            },
            {
              key: "3",
              feature: "Free Search Engine Optimisation (SEO)",
            },
            {
              key: "4",
              feature: "Free Google Analytics Integration",
            },
            {
              key: "5",
              feature: "6 Month Free Technical Support",
            },
          ]}
          link="https://google.com"
          title="Web Development"
          desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
        />
      </div>
    ),
  },
];

const Service = () => {
  return (
    <section>
      <TitleSection
        title="Services"
        description="Comprehensive solutions to elevate your online presence and drive business growth."
      />
      <div className="px-5 h-[86rem] sm:h-[85rem] md:h-[70rem]  lg:h-[50rem] [perspective:1000px] relative  flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-10">
        <Tabs tabs={tabs} />
      </div>
    </section>
  );
};

export default Service;
