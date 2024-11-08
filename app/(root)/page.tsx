import About from "@/components/About";
import Contact from "@/components/Contact";
import Faqs from "@/components/Faqs";
import Hero from "@/components/Hero";
import OnBoard from "@/components/OnBoard";
import Service from "@/components/Service";
import Special from "@/components/Special";
import React from "react";

const Home = () => {
  return (
    <>
      <Hero />
      <Special />
      <About />
      <Service />
      <Faqs />
      <OnBoard />
      <Contact />
    </>
  );
};

export default Home;
