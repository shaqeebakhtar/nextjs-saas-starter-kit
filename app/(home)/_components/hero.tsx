import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="max-w-screen-xl w-full mx-auto py-10 px-3 lg:py-20 lg:px-16">
      <h1 className="text-center font-title font-bold text-4xl leading-[1.15] md:text-6xl md:leading-[1.15]">
        Heading for the landing page of a{' '}
        <span className="bg-gradient-to-r from-violet-700 via-fuchsia-600 to-blue-600 bg-clip-text text-transparent">
          Nextjs Starter kit
        </span>
      </h1>
      <p className="text-center text-xl text-muted-foreground mx-auto max-w-2xl mt-4">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo iusto eos
        perferendis, nam maxime eum molestiae sint quod veritatis hic.
      </p>
      <div className="flex items-center gap-4 mt-6 justify-center">
        <Link
          href="#"
          className={cn(
            buttonVariants({ variant: 'default' }),
            'rounded-full px-6 h-10'
          )}
        >
          Start for FREE
        </Link>
        <Link
          href="#"
          className={cn(
            buttonVariants({ variant: 'outline' }),
            'rounded-full px-6 h-10 transition-all bg-gray-100 hover:bg-gray-200'
          )}
        >
          Live Demo
        </Link>
      </div>
      {/* <div className="relative">
        <div className="absolute w-full right-0 h-40 max-w-xs bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-pink-500 opacity-20 blur-3xl" />
        <div className="absolute w-full left-0 h-40 max-w-xs bg-gradient-to-r from-green-500 via-blue-500 to-violet-600 opacity-20 blur-3xl" />
      </div> */}
      <div className="relative max-w-screen-lg mx-2 rounded-xl aspect-video md:mx-auto mt-16 backdrop-blur-sm bg-gray-400/5 p-2 ring-2 ring-inset ring-gray-200/50 lg:rounded-2xl lg:p-3 shadow-[4px_20px_40px_-8px_rgba(0,0,0,0.1)]">
        <Image
          alt="App Demo"
          draggable="false"
          className="w-full h-full object-cover bg-center rounded-sm"
          height="100"
          src="/placeholder.svg"
          width="100"
        />
      </div>
    </section>
  );
};

export default Hero;
