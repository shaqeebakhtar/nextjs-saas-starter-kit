import { Icons } from '@/components/icons';
import Image from 'next/image';
import Link from 'next/link';

const Testimonials = () => {
  return (
    <section className="max-w-screen-xl w-full mx-auto py-10 px-3 lg:py-20 lg:px-16">
      <h2 className="text-center text-3xl md:text-5xl font-bold font-title max-w-[820px] mx-auto leading-[1.15] md:leading-[1.15]">
        Public Cheers for Us!
      </h2>
      <p className="md:text-lg leading-6 text-center text-muted-foreground mx-auto max-w-[680px] mt-4">
        Over 1000+ people trust us
      </p>
      <div className="space-y-4 sm:columns-2 sm:gap-4 lg:columns-3 mt-10">
        {testimonials.map((testimonial, index) => (
          <Testimonial key={index} testimonial={testimonial} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;

const Testimonial = ({ testimonial }: { testimonial: { content: string } }) => {
  return (
    <div className="break-inside-avoid transition-all bg-white hover:shadow-md ring-1 ring-inset ring-gray-800/10 rounded-lg p-6">
      <Link href="#" target="_blank" className="flex flex-col">
        <p className="text-primary mb-6">{testimonial.content}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              alt="Person 1"
              draggable="false"
              className="w-12 h-12 rounded-full border"
              height="40"
              src="/placeholder.svg"
              width="40"
            />
            <div className="flex flex-col">
              <p className="font-title font-semibold text-primary">John Doe</p>
              <span className="text-sm text-muted-foreground">Co-founder</span>
            </div>
          </div>
          <Icons.twitter className="w-4 h-4" />
        </div>
      </Link>
    </div>
  );
};

const testimonials = [
  {
    content:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias dicta reprehenderit nobis quibusdam esse nam, suscipit facilis odit laudantium aperiam.',
  },

  {
    content:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias dicta reprehenderit nobis quibusdam esse nam odit laudantium aperiam.',
  },
  {
    content:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias dicta reprehenderit nobis quibusdam esse nam.facilis odit laudantium aperiam. facilis odit laudantium aperiam odit laudantium aperiam.',
  },
  {
    content:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias dicta reprehenderit nobis quibusdam esse nam.facilis.',
  },
  {
    content:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias dicta reprehenderit nobis quibusdam esse nam, suscipit facilis odit laudantium aperiam, suscipit.',
  },
  {
    content:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias dicta reprehenderit nobis quibusdam esse nam, suscipit facilis odit laudantium aperiam, suscipit facilis odit laudantium.',
  },
];
