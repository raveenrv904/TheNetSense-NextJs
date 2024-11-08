"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQS } from "@/constants/index.constants";
import TitleSection from "./TitleSection";

const Faqs = () => {
  return (
    <section id="faqs">
      <TitleSection
        title="FAQS"
        description="Comprehensive solutions to elevate your online presence and drive business growth."
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 px-5 md:px-32 mt-16">
        {FAQS.map((item, index) => {
          return (
            <motion.div
              key={index}
              // In-view animation trigger
              whileInView={{ opacity: 1, y: 0 }} // Animation starts when the element enters the view
              initial={{ opacity: 0, y: 20 }} // Initial state before it comes into view
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut",
              }} // Staggered animation for each item
              viewport={{ once: true, amount: 0.5 }} // Trigger animation once when 50% of the item is in view
            >
              <Accordion className="" type="single" collapsible>
                <AccordionItem
                  className="mt-3 text-sm md:text-base"
                  value={`${index}`}
                >
                  <AccordionTrigger>{item.question}</AccordionTrigger>
                  <AccordionContent className="px-5 text-justify shadow-custom">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Faqs;
