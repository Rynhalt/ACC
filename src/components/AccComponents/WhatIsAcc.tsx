import React from "react";
import FadeInSection from "./FadeInSection";

const WhatIsAcc: React.FC = () => {
  return (
    <>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Julius+Sans+One&display=swap');
      @import url('https://fonts.googleapis.com/css2?family=AR+One+Sans:wght@400..700&display=swap');
    </style>

    <section className="z-10 px-6 w-full bg-black max-md:px-5 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-2/5 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col self-stretch my-auto text-center text-white max-md:mt-10 max-md:max-w-full">
            <FadeInSection>
            <h2 className="text-8xl max-md:max-w-full max-md:text-4xl julius-sans Appear-in-1">
            Why Choose BreezeWear?
            </h2>
            </FadeInSection>
            <FadeInSection>
            <p className="self-center mt-28 text-3xl max-md:mt-10 max-md:max-w-full ar-one-sans Appear-in-2">
              BreezeWear is a revolutionary, air-conditioned clothing technology from Japan. Built to tackle extreme heat, it uses advanced cooling systems to provide relief and comfort, especially for those working in tough environments like construction. Stay cool, stay productive.


            </p>
            </FadeInSection>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-3/5 max-md:ml-0 max-md:w-full">
        
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a5d7ae75c0a721737c063e4f09eec4cd35bb70e399f23a742d6d868f59c51699?placeholderIfAbsent=true&apiKey=105f2061e4de4572989bc0746b5c0807"
            alt="Air-conditioned clothing illustration"
            className="object-contain mt-0 w-full aspect-[0.77] max-md:mt-10 max-md:max-w-full"
          />
        </div>
      </div>
    </section>  
    </>
  );
};

export default WhatIsAcc;
