import Image from 'next/image';

export const Midsec = () => {
  return (
    <section className=" p-3 lg:p-[2.7rem] ">
      <div className=" bg-[#6DE754]  rounded-xl">
        <h2 className="text-5xl font-semibold text-center text-black py-[1.5rem] lg:py-[3.1rem] text-[1.4rem]">
          Submit Better job <br /> applications
        </h2>

        <div className="flex flex-col justify-center">
          {/* SLOGAN   */}
          <h3 className="lg:text-[8.4rem] text-[2rem] text-center text-black font-semibold">
            10x faster
          </h3>
          <p className=" text-balance  leading-5 text-black  text-center text-[0.9rem] pb-5">
            AI cover letter gene rator, resume keyword checker, outreach <br /> message writer, and
            more. Powered by GPT
          </p>
        </div>

        <div className="relative px-[2.8rem]">
          <Image
            src="/images/image-9.png"
            width={1000}
            quality={100}
            height={1000}
            className="w-full h-full"
            alt="an image representing the chart"
          />
          <Image
            src="/images/logo.png"
            width={55}
            height={55}
            alt="logo"
            aria-label="image logo"
            className="absolute top-10 left-15"
          />
          <Image
            alt="an image representing the overlay"
            src="/images/Overlay.png"
            width={1000}
            quality={100}
            height={1000}
            className="w-full h-full absolute top-0 left-0 opacity-50"
          />
        </div>
      </div>
    </section>
  );
};
