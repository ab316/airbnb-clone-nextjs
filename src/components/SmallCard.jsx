import Image from 'next/image';

const SmallCard = ({location, img, distance, bgColor}) => {
  return (
    <div
      className={`flex h-[30rem] transform cursor-pointer flex-col items-center space-x-0 rounded-xl`}
      style={{backgroundColor: bgColor || 'gray'}}>
      <div className="relative h-1/2 w-full">
        <Image src={img} alt={location} layout="fill" objectFit="cover" className="rounded-t-xl" />
      </div>

      <div className="mt-5 h-1/2 w-full px-5 text-white">
        <h2 className="text-3xl font-semibold">{location}</h2>
        <h3 className="text-xl font-light">{distance}</h3>
      </div>
    </div>
  );
};

export default SmallCard;
