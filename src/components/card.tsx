import Image from 'next/image';

interface cardprops {
  icon: string;
  title: string;
  description: string;
}
export const Card = ({ icon, title, description }: cardprops) => {
  return (
    <div className="max-w-[24rem] w-full p-[1.6rem] flex flex-col bg-[#1E201D] rounded-xl gap-4 max-h-[15rem] h-full">
      <span>
        <Image src={icon} width={20} height={20} alt="custom icons" />
      </span>
      <h2 className="font-semibold capitalize text-[1.2rem]">{title}</h2>
      <p className="text-[#909090] text-left tracking-wide leading text-sm text-pretty">
        {description}
      </p>
    </div>
  );
};
