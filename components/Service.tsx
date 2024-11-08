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
      <div className="w-full overflow-hidden relative rounded-xl p-7 md:p-10 pb-7 md:pb-0 text-xl md:text-4xl font-bold text-white bg-white shadow-customTabs">
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
              feature: "Basic Content Management System (CMS)",
            },
            {
              key: "3",
              feature: "Search Engine Optimisation (SEO)",
            },
            {
              key: "4",
              feature: "Google Analytics Integration",
            },
            {
              key: "5",
              feature: "6 Month Technical Support",
            },
          ]}
          pricing={PrisingPoster}
          link="https://google.com"
          title="Web Development"
          desc="Our web development services are designed to create custom, high-performance websites that match your brand and goals. From integrated SEO to advanced analytics, we build sites that not only look great but also drive results and engage your audience."
        />
      </div>
    ),
  },

  {
    title: "App Development",
    value: "app development",
    content: (
      <div className="w-full overflow-hidden relative rounded-2xl p-7 md:p-10 pb-7 md:pb-0 text-xl md:text-4xl font-bold text-white bg-white shadow-customTabs">
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
              feature: "Basic Content Management System (CMS)",
            },
            {
              key: "3",
              feature: "Search Engine Optimisation (SEO)",
            },
            {
              key: "4",
              feature: "Google Analytics Integration",
            },
            {
              key: "5",
              feature: "6 Month Technical Support",
            },
          ]}
          pricing={PrisingPoster}
          link="https://google.com"
          title="App Development"
          desc="Our app development services bring your ideas to life with custom, user-friendly mobile applications. We design and build apps that enhance customer engagement, streamline your business processes, and support your digital growth. From concept to launch, we’re here to make sure your app performs seamlessly."
        />
      </div>
    ),
  },

  {
    title: "Other Enquiries",
    value: "others",
    content: (
      <div className="w-full overflow-hidden relative rounded-2xl p-7 md:p-10 pb-7 md:pb-0 bg-white shadow-customTabs">
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
              feature: "Technical Support for Existing Projects",
            },
            {
              key: "2",
              feature: "Troubleshooting and Bug Fixes",
            },
            {
              key: "3",
              feature: "Performance Optimization",
            },
            {
              key: "4",
              feature: "Website and App Updates",
            },
            {
              key: "5",
              feature: "Custom Enhancements and Features",
            },
          ]}
          pricing={PrisingPoster}
          link="https://google.com"
          title="Other Enquiries"
          desc="Need assistance with technical issues or updates? We’re here to help! Whether it’s resolving bugs, optimizing performance, or adding new features, our team offers reliable support to keep your digital assets running smoothly and efficiently."
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
