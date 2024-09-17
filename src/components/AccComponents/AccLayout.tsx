'use client'
import React, { useEffect, useState } from "react";
import Contact from "./Contact";
import GuaranteedImprovement from "./GuaranteedImprovement";
import Header from "./Header";
import PathForBetterWork from "./PathForBetterWork";
import WhatIsAcc from "./WhatIsAcc";

const AccLayout: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);

    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="https://cdn.builder.io/api/v1/image/assets%2F105f2061e4de4572989bc0746b5c0807%2F1eb5b9c7fef443f098cbcbba80d89655" sizes="any" />
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
          <GuaranteedImprovement />
        </div>
        <div className={isMobile ? '' : 'snap-always snap-center'}>
          <Contact />
        </div>
      </main>
    </html>
  );
};

export default AccLayout;
