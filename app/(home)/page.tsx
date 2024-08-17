import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import Navbar from './_components/navbar';

const Home = () => {
  return (
    <>
      <Navbar />
      <main>
        <section className="max-w-screen-xl w-full mx-auto py-10 px-3 lg:py-20 lg:px-16">
          <h1 className="text-center font-title font-bold text-4xl leading-[1.15] md:text-6xl md:leading-[1.15]">
            Heading for the best landing of a
            <span className="bg-gradient-to-r from-violet-700 via-fuchsia-600 to-blue-600 bg-clip-text text-transparent block">
              Nextjs Starter kit
            </span>
          </h1>
          <p className="text-center mx-auto max-w-xl mt-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo iusto
            eos perferendis, nam maxime eum molestiae sint quod veritatis hic.
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
              View Demo
            </Link>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
