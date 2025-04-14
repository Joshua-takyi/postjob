import Image from 'next/image';
import { JSX } from 'react';

export const AiAndOptimization = (): JSX.Element => {
  return (
    <section className="bg-[#6DE754] h-full py-6 px-4 sm:py-8 md:py-12 lg:mt-[2.3rem]">
      <div className="flex flex-col-reverse md:flex-row gap-6 sm:gap-8 max-w-[70rem] mx-auto w-full items-center">
        <div className="flex flex-col gap-y-[1rem] max-w-full lg:max-w-[30rem] justify-center w-full">
          <h1 className="text-2xl sm:text-3xl md:text-[2.5rem] font-semibold text-[#000000] leading-tight sm:leading-[3rem] md:leading-[3.5rem]">
            Free AI cover letter generator powered by GPT
          </h1>
          <p className="md:text-sm text-xs  text-[#000000] font-normal leading-6 sm:leading-7 text-pretty">
            A free AI cover letter generator powered by GPT is a tool that uses artificial
            intelligence and natural language processing to help job seekers create customized and
            effective cover letters.
          </p>
          <button className="capitalize rounded-xl text-black border border-black hover:bg-black hover:text-white transition-colors duration-300 py-2 px-4 font-semibold w-full sm:w-auto sm:max-w-[10.9rem] text-sm sm:text-base">
            Try for free now
          </button>
        </div>

        <div className="w-full flex justify-center md:justify-end">
          <Image
            src={'/images/Illustration.png'}
            alt="AI Cover Letter Generator Illustration"
            width={500}
            height={500}
            priority={true}
            className="w-full max-w-[250px] sm:max-w-[300px] md:max-w-[350px] lg:max-w-[400px] h-auto object-contain"
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row w-full gap-6 sm:gap-8 max-w-[70rem] mx-auto mt-10 md:mt-16 items-center">
        <div className="w-full flex justify-center md:justify-start order-2 md:order-1">
          <Image
            src={'/images/Illustration2.png'}
            alt="Resume Keyword Optimization Illustration"
            width={500}
            height={500}
            priority={true}
            className="w-full max-w-[250px] sm:max-w-[300px] md:max-w-[350px] lg:max-w-[400px] h-auto object-contain"
          />
        </div>
        <div className="flex flex-col gap-y-[1rem] max-w-full lg:max-w-[30rem] justify-center order-1 md:order-2">
          <h1 className="text-2xl sm:text-3xl md:text-[2.5rem] font-semibold text-[#000000] leading-tight sm:leading-[3rem] md:leading-[3.5rem]">
            Optimize the keywords in your resume
          </h1>
          <p className="md:text-sm text-xs  text-[#000000] font-normal leading-6 sm:leading-7 text-pretty">
            Enhance your resume&apos;s visibility by optimizing keywords. Our tools help align your
            resume with job descriptions, increasing your chances of passing through applicant
            tracking systems.
          </p>
          <button className="capitalize rounded-xl text-black border border-black hover:bg-black hover:text-white transition-colors duration-300 py-2 px-4 font-semibold w-full sm:w-auto sm:max-w-[13.5rem] text-sm sm:text-base">
            Optimize your resume
          </button>
        </div>
      </div>
    </section>
  );
};
