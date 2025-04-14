import { Card } from './card';

export const AboutSection2 = () => {
  return (
    <section className=" lg:px-[8rem] lg:py-[2.2rem] p-3">
      <div className="flex flex-col  gap-2 lg:px-[8rem]">
        <h4 className="lg:text-[2.8rem] text-[1.8rem] text-center font-semibold tracking-tight lg:leading-16">
          Spend less time <br /> looking for work
        </h4>
        <p className="text-[#909090]  text-center text-pretty lg:py-[0.8rem]">
          We&apos;ll help you through the hardest part of <br />
          your job search.
        </p>
        <div className="flex justify-center font-semibold">
          <button className=" border-[0.5px] border-[#6DE754] cursor-pointer capitalize  py-2 px-4 w-[22rem] rounded-xl">
            Create an account
          </button>
        </div>
        <div className="grid-cols-1  md:grid-cols-3 grid gap-4 lg:mt-[1.8rem] place-items-center">
          <Card
            icon="/icons/file.png"
            title="cover letter"
            description="A cover letter is a document that accompanies a job application and is written to introduce the applicant to the employer."
          />
          <Card
            icon="/icons/mail.png"
            title="resignation letter"
            description="A resignation letter is a formal document that an employee writes to inform their employer of their decision to leave the company."
          />
          <Card
            icon="/icons/git-pull-request.png"
            title="connection request"
            description="A connection request is a message sent on a social networking site, such as LinkedIn, requesting to connect with another user."
          />
          <Card
            icon="/icons/send.png"
            title="outreach emails"
            description="Outreach emails are messages sent by individuals or businesses to introduce themselves, establish a connection, or propose a collaboration."
          />
          <Card
            icon="/icons/grid.png"
            title="resume optimization"
            description="Smart Personalization refers to the use of data and technology to deliver tailored experiences and content to individual customers or users."
          />
          <Card
            icon="/icons/codesandbox.png"
            title="resume design"
            description="A resume scanner is a software application that uses optical character recognition (OCR) technology to extract and analyze data from resumes."
          />
        </div>
      </div>
    </section>
  );
};
