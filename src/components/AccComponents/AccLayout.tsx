'use client'
import React, { useEffect, useState } from "react";
import BeforeAfter from "./BeforeAfter";
import Contact from "./Contact";
import GuaranteedImprovement from "./GuaranteedImprovement";
import Header from "./Header";
import LoadingAnimation from "./LoadingAnimation";
import PathForBetterWork from "./PathForBetterWork";
import WhatIsAcc from "./WhatIsAcc";


const AccLayout: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [loadingState, setLoadingState] = useState<'loading' | 'fading' | 'complete'>('loading');

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);

    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);

  const handleAnimationComplete = () => {
    setLoadingState('fading');
    setTimeout(() => {
      setLoadingState('complete');
    }, 1000); // Adjust this value to match your desired fade-out duration
  };

  return (
    <div className="relative min-h-screen">
      {loadingState !== 'complete' && (
        <div className={`fixed inset-0 z-50 transition-opacity duration-1000 ${loadingState === 'fading' ? 'opacity-0' : 'opacity-100'}`}>
          <LoadingAnimation companyName="REGALCORE" onAnimationComplete={handleAnimationComplete} />
        </div>
      )}
      <div className={`transition-opacity duration-1000 ${loadingState === 'complete' ? 'opacity-100' : 'opacity-0'}`}>
        <head>
          <link rel="icon" href="https://cdn.builder.io/api/v1/image/assets%2F105f2061e4de4572989bc0746b5c0807%2F1eb5b9c7fef443f098cbcbba80d89655" sizes="any" />
          <title>BreezeWear - Revolutionary Air-Conditioned Clothing</title>
          <meta name="description" content="Experience the future of comfort with BreezeWear. Our innovative air-conditioned clothing keeps you cool in extreme heat, perfect for construction and outdoor work." />
          <meta property="og:title" content="BreezeWear - Stay Cool, Work Better" />
          <meta property="og:description" content="Discover BreezeWear: Advanced air-conditioned clothing for ultimate comfort in challenging work environments." />
          <meta property="og:image" content="https://cdn.builder.io/api/v1/image/assets%2F105f2061e4de4572989bc0746b5c0807%2F2c5a08ef043740ccb80bb67a906e2274" />
          <meta property="og:image:alt" content="BreezeWear air-conditioned clothing in action" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://regalcore.org" />
          <style>{`
            @media (max-width: 767px) {
              html {
                scroll-behavior: smooth;
                scroll-snap-type: y proximity;
              }
            }
          `}</style>
        </head>
        <main className={`flex overflow-y-scroll h-screen flex-col bg-white w-full ${isMobile ? '' : 'snap-y snap-mandatory'}`}>
          <div className={isMobile ? '' : 'snap-always snap-center'}>
            <Header />
          </div>
          <div className={isMobile ? '' : 'snap-always snap-center'}>
            <WhatIsAcc />
          </div>
          <div className={isMobile ? '' : 'snap-always snap-center'}>
            <PathForBetterWork />
          </div>
          <div className={isMobile ? '' : 'snap-always snap-center'}>
            <BeforeAfter />
          </div>
          <div className={isMobile ? '' : 'snap-always snap-center'}>
            <GuaranteedImprovement />
          </div>
          <div className={isMobile ? '' : 'snap-always snap-center'}>
            <Contact />
          </div>
        </main>
      </div>
    </div>
  );
};

export default AccLayout;
