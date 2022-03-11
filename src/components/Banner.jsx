import Image from 'next/image';
import React from 'react';

const Banner = () => {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
      <Image src="/img/banner.webp" layout="fill" objectFit="cover" alt="Banner" />
      <div className="absolute top-1/2 w-full text-center">
        <p className="mt-12 mb-3 text-sm font-semibold text-white sm:text-3xl">
          Let your curiosity do the booking
        </p>
        <button className="shadow:md my-3 rounded-full bg-white px-10 py-4 font-semibold text-purple-700 transition duration-150 hover:bg-gray-100 hover:shadow-xl active:scale-90">
          I&apos;m flexible
        </button>
      </div>
    </div>
  );
};

export default Banner;
