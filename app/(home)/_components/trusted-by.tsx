import Image from 'next/image';

const TrustedBy = () => {
  return (
    <section className="max-w-screen-xl w-full mx-auto py-10 px-3 lg:py-10 lg:px-16">
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-6">
        <div className="flex items-center justify-center">
          <Image
            alt="Company logo"
            src="./logoipsum.svg"
            height={140}
            width={28}
            className="w-full object-cover"
          />
        </div>
        <div className="flex items-center justify-center">
          <Image
            alt="Company logo"
            src="./logoipsum.svg"
            height={140}
            width={28}
            className="w-full object-cover"
          />
        </div>
        <div className="flex items-center justify-center">
          <Image
            alt="Company logo"
            src="./logoipsum.svg"
            height={140}
            width={28}
            className="w-full object-cover"
          />
        </div>
        <div className="flex items-center justify-center">
          <Image
            alt="Company logo"
            src="./logoipsum.svg"
            height={140}
            width={28}
            className="w-full object-cover"
          />
        </div>
        <div className="col-span-2 md:col-span-1 flex items-center justify-center">
          <Image
            alt="Company logo"
            src="./logoipsum.svg"
            height={140}
            width={28}
            className="w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
