'use client'
import React, { useEffect, useRef, useState } from 'react';
import FadeInSection from '../shared/FadeInSection';

const BeforeAfter: React.FC = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const percentage = (scrollTop / maxScroll) * 100;
      setScrollPercentage(Math.min(Math.max(percentage, 0), 100));
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
    <section className="py-16 bg-sky-300">
          <FadeInSection>
            <div className = "bg-sky h-28 display-flex justify-center align-center">Header</div>
            <div>
              <div className = "w-screen h-screen flex justify-center items-center sticky top-0">
                <img src="https://cdn.builder.io/api/v1/image/assets%2F105f2061e4de4572989bc0746b5c0807%2F445f610db8ec41599b8f7fb5ada94a09"/>
              </div>

              <div className = "w-screen h-screen flex justify-center items-center sticky top-0">
              <img src="https://cdn.builder.io/api/v1/image/assets%2F105f2061e4de4572989bc0746b5c0807%2Fe9ea3b42a593430abe36c313ca7a5d28"/>
              </div>

            </div>
            <div className = "bg-sky h-28 display-flex justify-center align-center">Footer</div>

            {/* <ParallaxImages
              image1="https://cdn.builder.io/api/v1/image/assets%2F105f2061e4de4572989bc0746b5c0807%2F445f610db8ec41599b8f7fb5ada94a09"
              image2="https://cdn.builder.io/api/v1/image/assets%2F105f2061e4de4572989bc0746b5c0807%2Fe9ea3b42a593430abe36c313ca7a5d28"
            /> */}
            {/* <div ref={containerRef} className="relative w-[75vw] h-auto">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F105f2061e4de4572989bc0746b5c0807%2F445f610db8ec41599b8f7fb5ada94a09"
                alt="After using the product"
                className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
                style={{ transform: `translateY(-${scrollPercentage}%)` }} // Update for vertical scroll effect
              />
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F105f2061e4de4572989bc0746b5c0807%2Fe9ea3b42a593430abe36c313ca7a5d28"
                alt="Before using the product"
                className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
                style={{ transform: `translateY(${scrollPercentage}%)` }} // Update for vertical scroll effect
              />
            </div> */}
            {/* <p className="text-right mt-2 text-sm ar-one-sans">
                *Data after 10 minutes of intense cardio
              </p> */}
          </FadeInSection>
    </section>
    </>
  );
};

export default BeforeAfter;