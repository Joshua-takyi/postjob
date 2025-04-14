import { Instagram, Twitter, Linkedin } from 'lucide-react'; // Import icons from Lucide React
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const footerNav = [
    {
      id: 1,
      header: 'Platform',
      nav: [
        { label: 'Plans and Prices', href: '/', icon: null },
        { label: 'AI Create Letters', href: '/', icon: null },
        { label: 'AI Resume Checker', href: '/', icon: null },
        { label: 'Resume Templates', href: '/', icon: null },
        { label: 'Sell Template', href: '/', icon: null },
        { label: 'Blog', href: '/blog', icon: null },
      ],
    },
    {
      id: 2,
      header: 'Features',
      nav: [
        { label: 'AI Cover Letter', href: '/', icon: null },
        { label: 'Resume Keywords Optimizer', href: '/', icon: null },
        { label: 'ATS Resume Checker', href: '/', icon: null },
      ],
    },
    {
      id: 3,
      header: 'Resources',
      nav: [
        { label: '4 AI Tools for Applying a Job', href: '/', icon: null },
        {
          label: 'How to Optimize Resume Keywords',
          href: '/',
          icon: null,
        },
        {
          label: 'Why You Should Use Chat GPT for Resume Creation',
          href: '/',
          icon: null,
        },
        {
          label: 'What Should You Include in a Cover Letter',
          href: '/',
          icon: null,
        },
      ],
    },
    {
      id: 4,
      header: 'Support',
      email: 'support@gmail.com',
      nav: [
        {
          label: 'Instagram',
          href: '',
          icon: <Instagram size={16} aria-hidden="true" />,
        },
        {
          label: 'Twitter',
          href: '',
          icon: <Twitter size={16} aria-hidden="true" />,
        },
        {
          label: 'LinkedIn',
          href: '',
          icon: <Linkedin size={16} aria-hidden="true" />,
        },
      ],
    },
  ];
  return (
    <footer className="bg-[#6DE754] w-full text-black">
      <div className="max-w-[70rem] mx-auto py-8 md:py-[2.6rem] px-4 flex flex-col items-center">
        <div className="flex flex-col gap-y-[0.4rem] md:px-[2.3rem] max-w-[25.3rem]">
          <h5 className="text-2xl lg:text-[3.5rem] font-semibold text-center">What&apos;s next</h5>
          <p className="text-sm text-balance font-normal text-center">
            Submit better job app — 10x faster. AI cover letter generator, resume keyword checker,
            outreach message writer, and more. Powered by GPT
          </p>
          <Link href="/register" className="mx-auto">
            <button className="capitalize rounded-xl border border-black py-2 px-4 font-semibold max-w-[12.9rem] mt-[1.3rem] hover:bg-black hover:text-white transition-colors">
              Try for free
            </button>
          </Link>
        </div>

        <div className="mt-10 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {footerNav.map((section) => (
            <div key={section.id} className="mb-4">
              <h6 className="font-semibold text-lg capitalize mb-3">{section.header}</h6>
              {section.email && <p className="text-sm font-normal mb-2">{section.email}</p>}
              <ul className="mt-2 space-y-2">
                {section.nav.map((item, index) => (
                  <li key={index}>
                    {item.href ? (
                      <Link
                        href={item.href}
                        className="flex items-center gap-2 text-sm hover:underline"
                      >
                        {item.icon && <span className="flex items-center">{item.icon}</span>}
                        <span>{item.label}</span>
                      </Link>
                    ) : (
                      <span className="flex items-center gap-2 text-sm">
                        {item.icon && <span className="flex items-center">{item.icon}</span>}
                        <span>{item.label}</span>
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* separator */}
        <div className="h-[0.5px] w-full bg-black" />
      </div>

      {/* Copyright section */}
      <div className="max-w-[70rem] mx-auto py-4 px-4 text-center text-sm">
        © {currentYear} PostJob. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
