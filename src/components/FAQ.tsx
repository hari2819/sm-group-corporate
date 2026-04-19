import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "What is the 'Conceive, Create, Complete' methodology?",
    answer: "This is our foundational bedrock. First, we 'Conceive' by deeply understanding your organizational challenges. We then 'Create' durable, customized strategies. Finally, we 'Complete' the cycle by flawlessly executing the plan to deliver focused, specialized results.",
    value: "item-1",
  },
  {
    question: "Do you offer services for international enterprises?",
    answer: "Yes, absolutely. Our Sales & Marketing and Corporate Advisory clusters are specifically equipped to handle international business feasibility studies, market expansion, and cross-border restructuring.",
    value: "item-2",
  },
  {
    question: "Can SM Group handle end-to-end recruitment?",
    answer: "Yes. Our HR & Headhunting division manages the entire talent acquisition lifecycle, from entry-level recruitment up to specialized executive headhunting, ensuring you find eminent professionals for your team.",
    value: "item-3",
  },
  {
    question: "How does your Retainer Partnership work?",
    answer: "Our Retainer Partnership is our most preferred model. It provides you with ongoing, dedicated support across multiple business clusters, acting as your single-source solution for continuous corporate growth and compliance.",
    value: "item-4",
  },
  {
    question: "Do you provide IT and Cybersecurity solutions?",
    answer: "Yes, our Engineering & IT cluster provides comprehensive software development, cloud computing infrastructure, and robust cybersecurity protocols to safeguard your vital corporate data.",
    value: "item-5",
  },
];

export const FAQ = () => {
  return (
    <section
      id="faq"
      className="container py-24 sm:py-32"
    >
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Frequently Asked{" "}
          <span className="bg-gradient-to-r from-[#172554] to-[#61DAFB] text-transparent bg-clip-text">
            Questions
          </span>
        </h2>
        <p className="text-xl text-muted-foreground md:w-3/4 mx-auto">
          Clear answers to help you understand how SM Group can drive your corporate success.
        </p>
      </div>

      <Accordion
        type="single"
        collapsible
        className="w-full max-w-4xl mx-auto space-y-4"
      >
        {FAQList.map(({ question, answer, value }: FAQProps) => (
          <AccordionItem
            key={value}
            value={value}
            className="border border-primary/10 rounded-lg px-6 bg-muted/20 hover:bg-muted/40 transition-all duration-300"
          >
            <AccordionTrigger className="text-left text-[#172554] dark:text-white font-semibold text-lg hover:no-underline hover:text-[#61DAFB] transition-colors py-4">
              {question}
            </AccordionTrigger>

            <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-4">
              {answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <h3 className="font-medium mt-12 text-center text-muted-foreground">
        Still have questions?{" "}
        <a
          rel="noreferrer noopener"
          href="#team"
          className="text-[#61DAFB] hover:text-[#172554] dark:hover:text-white transition-colors border-b border-[#61DAFB] pb-1"
        >
          Contact our partners directly
        </a>
      </h3>
    </section>
  );
};