"use client";
import React from "react";
import TitleSection from "./TitleSection";
import { Tabs } from "./ui/tabs";
import TabContent from "./TabContent";

import PrisingPoster from "./assets/price.png";

import { motion, useInView } from "framer-motion";

// import Support from "./assets/Posters/common/support.png";

// Web Development Poster
import WPoster1 from "./assets/Posters/web/4.png";
import WPoster2 from "./assets/Posters/web/1.png";
import WPoster3 from "./assets/Posters/web/2.png";
import WPoster4 from "./assets/Posters/web/3.png";

import APoster from "./assets/Posters/common/app.png";

export const tabs = [
  {
    title: "Web Development",
    value: "web development",
    content: (
      <div className="w-full overflow-hidden relative rounded-xl p-7 md:p-10 pb-7 md:pb-0 text-xl md:text-4xl font-bold text-white bg-white shadow-customTabs">
        <TabContent
          posters={[
            {
              link: WPoster1,
            },
            {
              link: WPoster2,
            },
            {
              link: WPoster3,
            },
            {
              link: WPoster4,
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
          link="https://forms.gle/CDMuhzhC43F468Fs7"
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
              link: APoster,
            },
            {
              link: WPoster2,
            },
            {
              link: WPoster3,
            },
            {
              link: WPoster4,
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
          link="https://forms.gle/CDMuhzhC43F468Fs7"
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
              link: WPoster2,
            },
            {
              link: WPoster3,
            },
            {
              link: WPoster4,
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
          link="https://forms.gle/CDMuhzhC43F468Fs7"
          title="Other Enquiries"
          desc="Need assistance with technical issues or updates? We’re here to help! Whether it’s resolving bugs, optimizing performance, or adding new features, our team offers reliable support to keep your digital assets running smoothly and efficiently."
        />
      </div>
    ),
  },
];

const Service = () => {
  // Use the useInView hook to trigger animations when the section is in view
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="services">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.95 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <TitleSection
          title="Services"
          description="Comprehensive solutions to elevate your online presence and drive business growth."
        />
      </motion.div>

      <motion.div
        className="px-5 h-[86rem] sm:h-[85rem] md:h-[70rem] lg:h-[50rem] [perspective:1000px] relative flex flex-col max-w-5xl mx-auto w-full items-start justify-start my-10"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -50 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <Tabs tabs={tabs} />
      </motion.div>
    </section>
  );
};

export default Service;
