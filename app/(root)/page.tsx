import About from "@/components/About";
import Contact from "@/components/Contact";
import Faqs from "@/components/Faqs";
import Hero from "@/components/Hero";
import OnBoard from "@/components/OnBoard";
import Projeccts from "@/components/Projeccts";
import Service from "@/components/Service";
import Special from "@/components/Special";
import Team from "@/components/Team";
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
      <Projeccts />
      <Team />
      <Contact />
    </>
  );
};

export default Home;
