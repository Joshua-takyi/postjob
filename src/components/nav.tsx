'use client';
import Image from 'next/image';
import BtnComponent from './button';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
const navMenu = [
  {
    id: 1,
    name: 'ai cover letter generator',
  },
  {
    id: 2,
    name: 'Resume template',
  },
  {
    id: 3,
    name: 'Pricing',
  },
];

// Menu toggle button component for mobile
const MenuToggle = ({ toggle, isOpen }: { toggle: () => void; isOpen: boolean }) => (
  <button
    onClick={toggle}
    className="flex flex-col justify-center items-center lg:hidden"
    aria-label={isOpen ? 'Close menu' : 'Open menu'}
    aria-expanded={isOpen}
  >
    <motion.div
      animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
      className="w-6 h-0.5 bg-current mb-1.5"
      transition={{ duration: 0.2 }}
    />
    <motion.div
      animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
      className="w-6 h-0.5 bg-current mb-1.5"
      transition={{ duration: 0.2 }}
    />
    <motion.div
      animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
      className="w-6 h-0.5 bg-current"
      transition={{ duration: 0.2 }}
    />
  </button>
);

const { outlineBtn, primaryBtn } = BtnComponent();
export const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Close menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('header');
      if (header) {
        // Split multiple classes and toggle them individually
        // header.classList.toggle('bg-transparent', window.scrollY > 0);
        header.classList.toggle('bg-black', window.scrollY > 0);
        // header.classList.toggle('transition-all ', window.scrollY > 0);
        // header.classList.toggle('linear ', window.scrollY > 0);
        // header.classList.toggle('shadow-md', window.scrollY > 0);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when component unmounts
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="md:px-[6rem] p-4 sticky  top-0 z-50 bg-black transition-all ease-in">
      <div className="flex justify-between items-center">
        <nav className="flex items-center gap-2">
          {' '}
          <span>
            <Image
              src="/images/logo.png"
              width={30}
              height={30}
              alt="logo"
              aria-label="image logo"
              // className="lazyload"
              // loading="lazy"
            />
          </span>
          <h1 className="text-sm font-semibold capitalize">postjob</h1>
          <div className="hidden lg:block">
            {navMenu.map((menu) => (
              <Link
                href={'/'}
                key={menu.id}
                className="mx-4 text-sm font-semibold capitalize hover:underline underline-offset-4 decoration-[#6DE754] decoration-2 transition-all"
                aria-label={menu.name}
              >
                {menu.name}
              </Link>
            ))}
          </div>
        </nav>
        <div className="flex items-center gap-4">
          <span className="hidden lg:block">{outlineBtn({ text: 'sign in' })}</span>
          <span className="hidden lg:block">{primaryBtn({ text: 'get started' })}</span>
          <MenuToggle toggle={toggleMenu} isOpen={isOpen} />
        </div>
      </div>

      {/* Mobile Navigation Menu with Framer Motion */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden overflow-hidden "
          >
            <motion.div
              className="flex flex-col  bg-opacity-90 backdrop-blur-md mt-4 rounded-xl py-6 px-4 shadow-lg"
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <div className="flex flex-col space-y-4 mb-6">
                {navMenu.map((menu) => (
                  <motion.div
                    key={menu.id}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -20, opacity: 0 }}
                    transition={{ duration: 0.3, delay: menu.id * 0.1 }}
                  >
                    <Link
                      href={'/'}
                      className="block text-lg font-semibold capitalize px-2 py-2 hover:bg-[#6DE754] rounded-lg  transition-all"
                      aria-label={menu.name}
                      onClick={() => setIsOpen(false)}
                    >
                      {menu.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
              <motion.div
                className="flex flex-col gap-4 px-2"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.4 }}
              >
                <div className="w-full">{outlineBtn({ text: 'sign in' })}</div>
                <div className="w-full">{primaryBtn({ text: 'get started' })}</div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
