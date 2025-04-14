import Image from 'next/image';

export const ResumeDesignSection = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-8">
      <div className="max-w-[70rem] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 py-6 md:py-[2.1rem]">
        {/* Text Section */}
        <div className="flex flex-col gap-4 md:gap-[1.3rem] justify-center text-center md:text-left">
          <h5 className="text-[1.8rem] sm:text-[2.2rem] md:text-[2.6rem] font-semibold leading-tight">
            Free resume design <br className="hidden md:block" /> templates
          </h5>
          <p className="text-[#909090] text-sm sm:text-base max-w-full md:max-w-[30rem] mx-auto md:mx-0">
            By following these design tips, you can create a <br className="hidden md:block" />
            professional and effective resume that will help you stand{' '}
            <br className="hidden md:block" /> out to recruiters and hiring managers.
          </p>
          <div className="flex justify-center md:justify-start">
            <button className="capitalize rounded-xl border border-[#6DE754] py-2 px-4 font-semibold max-w-full sm:max-w-[12rem]">
              create an account
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full flex justify-center md:justify-end">
          <Image
            src={'/images/illustration3.png'}
            alt="illustration"
            width={700}
            height={700}
            priority={true}
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};
