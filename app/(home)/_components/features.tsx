import Image from 'next/image';

const Features = () => {
  return (
    <section className="max-w-screen-xl w-full mx-auto py-10 px-3 lg:py-16 lg:px-16">
      <h2 className="text-center text-3xl md:text-5xl font-bold font-title max-w-[820px] mx-auto leading-[1.15] md:leading-[1.15]">
        Everything you need in one place
      </h2>
      <p className="md:text-lg leading-6 text-center text-muted-foreground mx-auto max-w-[680px] mt-4">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo iusto eos
        perferendis, nam maxime eum molestiae sint quod veritatis hic.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-11 grid-rows-2 gap-3 mt-10">
        <div className="flex flex-col justify-between gap-5 bg-gray-50 w-full md:col-span-6 rounded-md ring-1 ring-inset ring-gray-800/5 p-4">
          <div className="relative rounded-md overflow-hidden">
            <div className="absolute left-0 bottom-0 right-0 h-20 bg-gradient-to-b from-gray-50/5 to-gray-100" />
            <Image
              alt="Feature Image"
              draggable="false"
              className="w-full object-cover bg-center rounded-sm aspect-video"
              height="100"
              src="/placeholder.svg"
              width="100"
            />
          </div>
          <div className="space-y-1">
            <h4 className="font-title text-lg leading-6 font-semibold">
              Feature title 1
            </h4>
            <p className="text-sm text-muted-foreground">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam
              iste optio exercitationem?
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-5 bg-gray-50 w-full md:col-span-5 rounded-md ring-1 ring-inset ring-gray-800/5 p-4">
          <div className="relative rounded-md overflow-hidden">
            <div className="absolute left-0 bottom-0 right-0 h-20 bg-gradient-to-b from-gray-50/5 to-gray-100" />
            <Image
              alt="Feature Image"
              draggable="false"
              className="w-full object-cover bg-center rounded-sm aspect-video md:aspect-[3/2.05]"
              height="100"
              src="/placeholder.svg"
              width="100"
            />
          </div>
          <div className="space-y-1">
            <h4 className="font-title text-lg leading-6 font-semibold">
              Feature title 2
            </h4>
            <p className="text-sm text-muted-foreground">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam
              iste optio exercitationem?
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-5 bg-gray-50 w-full md:col-span-5 rounded-md ring-1 ring-inset ring-gray-800/5 p-4">
          <div className="relative rounded-md overflow-hidden">
            <div className="absolute left-0 bottom-0 right-0 h-20 bg-gradient-to-b from-gray-50/5 to-gray-100" />
            <Image
              alt="Feature Image"
              draggable="false"
              className="w-full object-cover bg-center rounded-sm aspect-video md:aspect-[3/2.05]"
              height="100"
              src="/placeholder.svg"
              width="100"
            />
          </div>
          <div className="space-y-1">
            <h4 className="font-title text-lg leading-6 font-semibold">
              Feature title 3
            </h4>
            <p className="text-sm text-muted-foreground">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam
              iste optio exercitationem?
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-5 bg-gray-50 w-full md:col-span-6 rounded-md ring-1 ring-inset ring-gray-800/5 p-4">
          <div className="relative rounded-md overflow-hidden">
            <div className="absolute left-0 bottom-0 right-0 h-20 bg-gradient-to-b from-gray-50/5 to-gray-100" />
            <Image
              alt="Feature Image"
              draggable="false"
              className="w-full object-cover bg-center rounded-sm aspect-video"
              height="100"
              src="/placeholder.svg"
              width="100"
            />
          </div>
          <div className="space-y-1">
            <h4 className="font-title text-lg leading-6 font-semibold">
              Feature title 4
            </h4>
            <p className="text-sm text-muted-foreground">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam
              iste optio exercitationem?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
