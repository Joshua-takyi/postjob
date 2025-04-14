import { Card } from './card';
import { JSX } from 'react';

export default function Hero(): JSX.Element {
  return (
    <main className="lg:px-[10.13rem] w-full lg:mt-[4.4rem] p-3">
      <div className="flex justify-center flex-col items-center lg:px-[8rem] gap-3">
        {/* Main Headline */}
        <h1 className="text-[#6DE754] text-center font-bold text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl">
          Win your dream job
        </h1>
        <span className="capitalize text-center font-bold text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl">
          with postjob
        </span>

        {/* Description */}
        <p className="lg:max-w-2xl w-full text-balance text-center text-sm md:text-base lg:leading-7 lg:tracking-wide text-[#909090]">
          Submit better job app — 10x faster. AI cover letter generator, resume keyword checker,
          outreach message writer, and more. Powered by GPT
        </p>

        {/* Email Input and Signup Button */}
        <div className="max-w-[35rem] w-full p-1 border border-[#909090] rounded-xl shadow-md lg:mt-10 mt-5">
          <div className="flex items-center gap-2">
            <input
              type="email"
              placeholder="Your Email"
              // Added responsive text size for input
              className="flex-1 px-4 py-2 text-[16px] md:text-base focus:outline-none rounded-xl bg-transparent"
            />
            <button
              // Added responsive text size for button
              className="cursor-pointer px-4 lg:px-6 py-2 bg-[#6DE754] font-bold rounded-xl text-sm md:text-base text-black transition-all hover:scale-105 focus:outline-none focus:ring-2"
            >
              Start For Free
            </button>
          </div>
        </div>

        {/* Feature Cards Section */}
        <section className="w-full">
          {/* Grid layout for cards, responsive columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:my-[3.1rem] md:my-5 mt-5 place-items-center  gap-5">
            {/* Card 1 */}
            <Card
              icon="/icons/file.png"
              title="AI Cover Letter Generator"
              description="The AI Cover Letter Generator is a tool that uses artificial intelligence algorithms to create personalized cover letters for job applicants."
            />
            {/* Card 2 */}
            <Card
              icon="/icons/maximize.png"
              title="Resume Scanner"
              description="A resume scanner is a software application that uses optical character recognition (OCR) technology to extract and analyze data from resumes."
            />
            {/* Card 3 */}
            <Card
              icon="/icons/radio.png"
              title="AI Cover Letter Generator"
              description="The AI Cover Letter Generator is a tool that uses artificial intelligence algorithms to create personalized cover letters for job applicants."
            />
          </div>
        </section>
      </div>
    </main>
  );
}
