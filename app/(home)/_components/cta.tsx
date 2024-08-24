import { Button, buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const Cta = () => {
  return (
    <section className="bg-gray-50 w-full mx-auto py-10 px-3 lg:py-20 lg:px-16 flex flex-col items-center">
      <h2 className="text-center text-3xl md:text-5xl font-bold font-title max-w-[820px] mx-auto leading-[1.15] md:leading-[1.15]">
        People are already using this Nextjs Starter kit
      </h2>
      <p className="md:text-lg md:leading-6 text-center text-muted-foreground mx-auto max-w-[680px] mt-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis,
        tempore reiciendis quibusdam dolor porro quae harum.
      </p>
      <Link
        href="#"
        className={cn(
          buttonVariants({ variant: 'default' }),
          'px-8 h-10 mt-8 rounded-full'
        )}
      >
        Start for FREE
      </Link>
    </section>
  );
};

export default Cta;
