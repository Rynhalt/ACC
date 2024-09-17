'use client'
import Link from "next/link";
import React, { useEffect, useState } from "react";
import "../../app/globals.css";
import FadeInSection from "./FadeInSection";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

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
        @import url('https://fonts.googleapis.com/css2?family=Julius+Sans+One&display=swap');
      </style>
      
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-4 sm:px-6 py-4 bg-black bg-opacity-50">
        <Link href="/">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F105f2061e4de4572989bc0746b5c0807%2F4bb7ad5681e3475d9391d4917efd2a98"
            alt="BreezeWear Logo"
            className="h-8 sm:h-12 w-auto"
          />
        </Link>
        {isMobile ? (
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white julius-sans">
            {isMenuOpen ? 'Close' : 'Menu'}
          </button>
        ) : (
          <div className="flex space-x-4 sm:space-x-6">
            <NavLink onClick={() => scrollToSection('what-is-acc')}>About</NavLink>
            <NavLink onClick={() => scrollToSection('how-it-works')}>How It Works</NavLink>
            <NavLink onClick={() => scrollToSection('testimonials')}>Testimonials</NavLink>
            <NavLink onClick={() => scrollToSection('contact')}>Contact</NavLink>
          </div>
        )}
      </nav>

      {isMobile && isMenuOpen && (
        <div className="fixed top-16 left-0 right-0 bg-black bg-opacity-90 z-40">
          <div className="flex flex-col items-center py-4">
            <NavLink onClick={() => scrollToSection('what-is-acc')}>About</NavLink>
            <NavLink onClick={() => scrollToSection('how-it-works')}>How It Works</NavLink>
            <NavLink onClick={() => scrollToSection('testimonials')}>Testimonials</NavLink>
            <NavLink onClick={() => scrollToSection('contact')}>Contact</NavLink>
          </div>
        </div>
      )}

      <header className="flex relative z-10 flex-col items-center px-4 sm:px-20 pt-40 sm:pt-80 pb-12 sm:pb-24 w-full text-4xl sm:text-8xl text-center text-white min-h-screen sm:min-h-[1142px] LP-in">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets%2F105f2061e4de4572989bc0746b5c0807%2Fd48b4ad7001a4ee4b65bf690b88a8f58"
          alt=""
          className="object-cover object-top absolute inset-0 w-full h-full"
        />
        
        <FadeInSection>
          <h1 className="relative pr-0 mb-0 max-w-full w-[740px] text-5xl sm:text-4xl md:text-6xl lg:text-8xl julius-sans Appear-in-1">
            Cool Down, <br></br> Power UP.
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