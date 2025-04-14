import Image from 'next/image';
import { JSX } from 'react';

interface CardProps {
  icon: string;
  title: string;
  description: string;
}

export const Card = ({ icon, title, description }: CardProps): JSX.Element => {
  return (
    <div className="max-w-[24rem] w-full p-4 md:p-[1.6rem] flex flex-col bg-[#1E201D] rounded-xl gap-4 h-full">
      {/* Icon container */}
      <span>
        <Image src={icon} width={20} height={20} alt={`${title} icon`} />
      </span>
      {/* Title */}
      <h2 className="font-semibold capitalize text-[1.2rem]">{title}</h2>
      {/* Description */}
      <p className="text-[#909090] text-left tracking-wide leading text-sm text-pretty">
        {description}
      </p>
    </div>
  );
};
