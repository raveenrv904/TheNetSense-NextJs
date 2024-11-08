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
    <div className="">
      <TitleSection
        title="FAQS"
        description="Comprehensive solutions to elevate your online presence and drive business growth."
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 px-5 md:px-32 mt-16">
        {FAQS.map((item, index) => {
          return (
            <Accordion key={index} className="" type="single" collapsible>
              <AccordionItem
                className="mt-3 text-sm md:text-base"
                value={`${index}`}
              >
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <div className="">
                  <AccordionContent className="px-5 text-justify  shadow-custom">
                    {item.answer}
                  </AccordionContent>
                </div>
              </AccordionItem>
            </Accordion>
          );
        })}
      </div>
    </div>
  );
};

export default Faqs;
