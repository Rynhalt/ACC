// src/components/AccComponents/HeaderDemo.tsx
'use client'
import Link from "next/link";
import React, { useState } from "react";
import "../../app/globals.css";
import { siteContent } from "../../content/siteContent";
import FadeInSection from "../shared/FadeInSection";
import ModelViewer from "../shared/ModelViewer"; // Adjust the import path as necessary

const HeaderDemo: React.FC = () => {
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
        .header-gradient::after {
          content: '';
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          height: 100%;
          background: linear-gradient(to top, rgba(0,0,0,1.5) 10%, rgba(0,0,0,0) 50%);
          pointer-events: none;
        }
        @media (max-width: 767px) {
          .header-gradient::after {
            background: linear-gradient(to top, rgba(0,0,0,1.5) 10%, rgba(0,0,0,0) 50%);
          }
        }
        `}
      </style>
      
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-4 sm:px-6 py-4">
      <Link href="/">
          <img
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
          {siteContent.header.navLinks.map((link, index) => (
            <NavLink key={index} onClick={() => scrollToSection(link.section)}>{link.text}</NavLink>
          ))}
        </div>
      </div>

      <header className="flex relative z-10 flex-col items-center px-4 sm:px-8 md:px-16 lg:px-20 pt-20 sm:pt-40 md:pt-60 lg:pt-80 pb-12 sm:pb-24 w-full text-2xl sm:text-4xl md:text-6xl lg:text-8xl text-center text-white min-h-screen">
        <ModelViewer /> {/* Ensure this is a self-closing tag */}
        <FadeInSection>
          <h1 className="relative pr-0 mb-0 max-w-full w-full sm:w-[740px] text-3xl sm:text-4xl md:text-5xl lg:text-8xl julius-sans Appear-in-1">
            {siteContent.header.title}
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

export default HeaderDemo;