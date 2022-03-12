import Image from 'next/image';
import React from 'react';

const Banner = () => {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
      <Image src="/img/banner.webp" layout="fill" objectFit="cover" alt="Banner" />
      <div className="absolute top-1/2 w-full text-center xl:top-2/3">
        <p className="mt-12 mb-3 text-sm font-semibold text-white sm:text-3xl md:text-4xl lg:text-5xl xl:mt-2">
          Let your curiosity do the booking
        </p>
        <button className="shadow:md my-3 rounded-full bg-white  py-2 px-5 font-semibold text-purple-700 transition duration-150 hover:bg-gray-100 hover:shadow-xl active:scale-90 sm:px-10 sm:py-4">
          I&apos;m flexible
        </button>
      </div>
    </div>
  );
};

export default Banner;
