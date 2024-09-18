'use client'
import Link from "next/link";
import React, { useState } from "react";
import "../../app/globals.css";
import FadeInSection from "./FadeInSection";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      <style>
        {`
        @import url('https://fonts.googleapis.com/css2?family=Julius+Sans+One&display=swap');
        .menu-transition {
          transition: max-height 0.3s ease-in-out, opacity 0.3s ease-in-out;
          max-height: 0;
          opacity: 0;
          overflow: hidden;
        }
        .menu-open {
          max-height: 300px;
          opacity: 1;
        }
        `}
      </style>
      
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-4 sm:px-6 py-4 bg-black bg-opacity-50">
        <Link href="/">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F105f2061e4de4572989bc0746b5c0807%2F4bb7ad5681e3475d9391d4917efd2a98"
            alt="BreezeWear Logo"
            className="h-8 sm:h-12 w-auto"
          />
        </Link>
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white julius-sans">
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      <div className={`fixed top-16 right-4 bg-black bg-opacity-90 z-40 menu-transition ${isMenuOpen ? 'menu-open' : ''} rounded-lg shadow-lg`}>
        <div className="flex flex-col items-start py-4 px-6">
          <NavLink onClick={() => scrollToSection('what-is-acc')}>About</NavLink>
          <NavLink onClick={() => scrollToSection('how-it-works')}>How It Works</NavLink>
          <NavLink onClick={() => scrollToSection('testimonials')}>Testimonials</NavLink>
          <NavLink onClick={() => scrollToSection('contact')}>Contact</NavLink>
        </div>
      </div>

      <header className="flex relative z-10 flex-col items-center px-4 sm:px-8 md:px-16 lg:px-20 pt-20 sm:pt-40 md:pt-60 lg:pt-80 pb-12 sm:pb-24 w-full text-2xl sm:text-4xl md:text-6xl lg:text-8xl text-center text-white min-h-screen sm:min-h-[1142px]">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets%2F105f2061e4de4572989bc0746b5c0807%2Fd48b4ad7001a4ee4b65bf690b88a8f58"
          alt=""
          className="object-cover object-top absolute inset-0 w-full h-full"
        />
        
        <FadeInSection>
          <h1 className="relative pr-0 mb-0 max-w-full w-full sm:w-[740px] text-3xl sm:text-4xl md:text-5xl lg:text-8xl julius-sans Appear-in-1">
            Cool Down, <br /> Power UP.
          </h1>
        </FadeInSection>
      </header>
    </>
  );
};

const NavLink: React.FC<{ onClick: () => void; children: React.ReactNode }> = ({ onClick, children }) => (
  <button onClick={onClick} className="text-white hover:text-gray-300 transition-colors duration-200 julius-sans py-2">
    {children}
  </button>
);

export default Header;