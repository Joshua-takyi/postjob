import { Card } from './card';
export default function Hero() {
  return (
    <main className="lg:px-[10.13rem] w-full lg:mt-[4.4rem] p-3">
      <div className="flex justify-center flex-col items-center  lg:px-[8rem] gap-3 ">
        <h1 className="text-[#6DE754]  font-bold lg:text-[6rem] text-[1.7rem] ">
          Win your dream job <br />
        </h1>
        <span className="capitalize text-center  font-bold lg:text-[6rem] text-[1.7rem] ">
          with postjob
        </span>
        <p className="lg:max-w-2xl text-sm  w-full text-balance text-center lg:leading-7 lg:tracking-wide text-[#909090]">
          Submit better job app — 10x faster. AI cover letter generator, resume keyword checker,
          outreach message writer, and more. Powered by GPT
        </p>
        <div className="max-w-[35rem]  w-full p-1 border border-[#909090] rounded-xl shadow-md lg:mt-10 mt-5">
          <div className="flex items-center gap-2">
            <input
              type="email"
              placeholder="Your Email"
              className="flex-1 px-4 py-2  focus:outline-none  rounded-xl bg-transparent "
            />
            <button className=" cursor-pointer lg:px-6  py-2 bg-[#6DE754] font-bold rounded-xl text-sm  text-black transition-all  hover:scale-105 focus:outline-none focus:ring-2 ">
              Start For Free
            </button>
          </div>
        </div>
        <section>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:my-[3.1rem] md:my-5 mt-3 place-items-center gap-5">
            <Card
              icon="/icons/file.png"
              title="AI Cover Letter Generator"
              description="The AI Cover Letter Generator is a tool that uses artificial intelligence algorithms to create personalized cover letters for job applicants."
            />
            <Card
              icon="/icons/maximize.png"
              title="Resume Scanner"
              description="A resume scanner is a software application that uses optical character recognition (OCR) technology to extract and analyze data from resumes."
            />
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
