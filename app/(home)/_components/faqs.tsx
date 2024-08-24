import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const Faqs = () => {
  return (
    <section className="max-w-screen-xl w-full mx-auto py-10 px-3 lg:py-20 lg:px-16 flex flex-col lg:flex-row gap-8">
      <div>
        <h2 className="text-center lg:text-left text-3xl md:text-5xl font-bold font-title max-w-[820px] leading-[1.15] md:leading-[1.15]">
          Frequently asked questions
        </h2>
        <p className="md:text-lg md:leading-6 text-center lg:text-left text-muted-foreground mx-auto max-w-[680px] mt-4">
          Stuck on something? We&apos;re here to help with all your questions
          and answer in one place.
        </p>
      </div>
      <div className="w-full max-w-lg mx-auto">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Commonly asked question</AccordionTrigger>
            <AccordionContent>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias
              fugiat ducimus beatae, eum eos nulla. Lorem ipsum dolor sit amet.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Commonly asked question</AccordionTrigger>
            <AccordionContent>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias
              fugiat ducimus beatae, eum eos nulla. Lorem ipsum dolor sit amet.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Commonly asked question</AccordionTrigger>
            <AccordionContent>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias
              fugiat ducimus beatae, eum eos nulla. Lorem ipsum dolor sit amet.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>Commonly asked question</AccordionTrigger>
            <AccordionContent>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias
              fugiat ducimus beatae, eum eos nulla. Lorem ipsum dolor sit amet.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>Commonly asked question</AccordionTrigger>
            <AccordionContent>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias
              fugiat ducimus beatae, eum eos nulla. Lorem ipsum dolor sit amet.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger>Commonly asked question</AccordionTrigger>
            <AccordionContent>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias
              fugiat ducimus beatae, eum eos nulla. Lorem ipsum dolor sit amet.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default Faqs;
