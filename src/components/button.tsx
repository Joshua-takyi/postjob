export default function BtnComponent() {
  const defaultStyling =
    'rounded-xl px-5 py-2  hover:scale-105 transition-all duration-200 max-w-[9rem] w-full hover:cursor-pointer';

  const outlineBtn = ({ text }: { text: string }) => {
    return (
      <button
        className={`${defaultStyling} border-[0.5px] border-[#6DE754] bg-transparent capitalize font-bold`}
      >
        {text}
      </button>
    );
  };

  const primaryBtn = ({ text }: { text: string }) => {
    return (
      <button className={`${defaultStyling} bg-[#6DE754] text-black capitalize font-bold`}>
        {text}
      </button>
    );
  };

  return {
    outlineBtn,
    primaryBtn,
  };
}
