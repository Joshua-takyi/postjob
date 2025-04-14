import Image from 'next/image';

export const AiAndOptimization = () => {
  return (
    <section className="bg-[#6DE754] h-full py-6 px-4 sm:py-8 md:py-12 lg:mt-[2.3rem]">
      <div className="flex flex-col-reverse md:flex-row gap-6 sm:gap-8 max-w-[70rem] mx-auto w-full">
        <div className="flex flex-col gap-y-[1rem] max-w-full lg:max-w-[30rem] justify-center w-full order-1">
          <h1 className="text-2xl sm:text-3xl md:text-[2.5rem] font-semibold text-[#000000] leading-tight sm:leading-[3rem] md:leading-[3.5rem]">
            Free AI cover letter generator powered <span className="lg:hidden">by GPT</span>
            <span className="hidden lg:inline-block">by GPT</span>
          </h1>
          <button className="capitalize rounded-xl text-black border border-black hover:bg-black hover:text-white transition-colors duration-300 py-2 px-4 font-semibold w-full sm:w-auto sm:max-w-[10.9rem]">
            Try for free now
          </button>
          <p className="text-sm md:text-base text-[#000000] font-normal leading-6 md:leading-7 text-pretty">
            A free AI cover letter generator powered by GPT is a tool that uses artificial
            intelligence and natural language processing to help job seekers create customized and
            effective cover letters.
          </p>
        </div>
        <div className="w-full flex justify-center lg:justify-end order-2">
          <Image
            src={'/images/illustration.png'}
            alt="AI Cover Letter Generator Illustration"
            width={500}
            height={500}
            priority={true}
            className="w-full max-w-[300px] lg:max-w-[400px] h-auto object-contain"
          />
        </div>
      </div>{' '}
      <div className="flex flex-col md:flex-row w-full gap-6 sm:gap-8 max-w-[70rem] mx-auto mt-10 md:mt-16">
        <div className="w-full flex justify-center order-1 ``">
          <Image
            src={'/images/illustration2.png'}
            alt="Resume Keyword Optimization Illustration"
            width={500}
            height={500}
            priority={true}
            className="w-full max-w-[300px] lg:max-w-[400px] h-auto object-contain"
          />
        </div>
        <div className="flex flex-col gap-y-[1rem] max-w-full lg:max-w-[30rem] justify-center order-2 md:order-1">
          <h1 className="text-2xl sm:text-3xl md:text-[2.5rem] font-semibold text-[#000000] leading-tight sm:leading-[3rem] md:leading-[3.5rem]">
            Optimize the keywords in your resume
          </h1>
          <p className="text-sm md:text-base text-[#000000] font-normal leading-6 md:leading-7 text-pretty">
            A free AI cover letter generator powered by GPT is a tool that uses artificial
            intelligence and natural language processing to help job seekers create customized and
            effective cover letters.
          </p>
          <button className="capitalize rounded-xl text-black border border-black hover:bg-black hover:text-white transition-colors duration-300 py-2 px-4 font-semibold w-full sm:w-auto sm:max-w-[13.5rem]">
            optimize your resume
          </button>
        </div>
      </div>
    </section>
  );
};
