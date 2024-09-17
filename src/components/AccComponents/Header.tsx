'use client'
import Link from "next/link";
import React from "react";
import "../../app/globals.css";
import FadeInSection from "./FadeInSection";

const Header: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Julius+Sans+One&display=swap');
      </style>
      
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 py-4 bg-black bg-opacity-50">
        <Link href="/">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F105f2061e4de4572989bc0746b5c0807%2F4bb7ad5681e3475d9391d4917efd2a98"
            alt="BreezeWear Logo"
            className="h-12 w-auto"
          />
        </Link>
        <div className="flex space-x-6">
          <NavLink onClick={() => scrollToSection('what-is-acc')}>About</NavLink>
          <NavLink onClick={() => scrollToSection('how-it-works')}>How It Works</NavLink>
          <NavLink onClick={() => scrollToSection('testimonials')}>Testimonials</NavLink>
          <NavLink onClick={() => scrollToSection('contact')}>Contact</NavLink>
        </div>
      </nav>

      <header className="flex relative z-10 flex-col items-center px-20 pt-80 pb-24 w-full text-8xl text-center text-white min-h-[1142px] max-md:px-5 max-md:py-24 max-md:max-w-full max-md:text-4xl LP-in">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets%2F105f2061e4de4572989bc0746b5c0807%2Fd48b4ad7001a4ee4b65bf690b88a8f58"
          alt=""
          className="object-cover object-top absolute inset-0 size-full"
        />
        
        <FadeInSection>
          <h1 className="relative pr-0 mb-0 max-w-full w-[740px] max-md:mb-2.5 max-md:max-w-full max-md:text-4xl julius-sans Appear-in-1">
            Cool Down, Power UP.
          </h1>
        </FadeInSection>
      </header>
    </>
  );
};

const NavLink: React.FC<{ onClick: () => void; children: React.ReactNode }> = ({ onClick, children }) => (
  <button onClick={onClick} className="text-white hover:text-gray-300 transition-colors duration-200 julius-sans">
    {children}
  </button>
);

export default Header;