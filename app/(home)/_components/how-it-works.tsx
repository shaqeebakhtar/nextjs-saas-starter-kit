import { CircleIcon } from 'lucide-react';

const HowItWorks = () => {
  return (
    <section className="max-w-screen-xl w-full mx-auto py-10 px-3 lg:py-20 lg:px-16">
      <h2 className="text-center text-3xl md:text-5xl font-bold font-title max-w-[820px] mx-auto leading-[1.15] md:leading-[1.15]">
        How it works?
      </h2>
      <p className="md:text-lg md:leading-6 text-center text-muted-foreground mx-auto max-w-[680px] mt-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi incidunt
        consectetur architecto ipsum quos ipsa aperiam provident vel et minima!
      </p>
      <div className="mt-10 grid grid-cols-3 gap-3">
        <Step />
        <Step />
        <Step />
        <Step />
        <Step />
        <Step />
      </div>
    </section>
  );
};

export default HowItWorks;

const Step = () => {
  return (
    <div className="relative overflow-hidden bg-white p-6 rounded-sm ring-1 ring-inset ring-gray-800/10">
      <span className="select-none text-7xl font-black absolute -top-2.5 -right-2.5 text-muted-foreground opacity-10 font-title">
        03
      </span>
      <div className="inline-flex items-center justify-center rounded-full p-1.5 w-8 h-8 ring-1 ring-inset ring-gray-800/10">
        <CircleIcon className="text-violet-700 w-4 h-4" strokeWidth={1.75} />
      </div>
      <p className="font-medium text-lg mt-3">How it works</p>
      <p className="text-muted-foreground text-sm mt-3">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium
        doloribus magni quibusdam deleniti!
      </p>
    </div>
  );
};
