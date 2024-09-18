
'use client'
import React from "react";
import FadeInSection from "./FadeInSection";

const PathForBetterWork: React.FC = () => {
  return (
    <>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Julius+Sans+One&display=swap');
    </style>

    <section id="how-it-works" className="flex flex-col px-4 sm:px-16 pt-12 sm:pt-24 pb-12 mt-0 w-full bg-sky-300">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-5">
          <div className="flex flex-col w-full lg:w-2/5">
            <div className="flex flex-col text-center text-white">
              <FadeInSection>
                <h2 className="text-4xl sm:text-6xl lg:text-8xl julius-sans text-left">
                The Innovation Behind ACC:
                </h2>
              </FadeInSection>
              <div className="flex flex-col mt-12 lg:mt-48 max-w-full text-3xl sm:text-4xl lg:text-5xl">
                <FadeInSection>
                  <div className="flex flex-col items-center">
                    <p className="julius-sans mb-4">Patented Technology</p>
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2F105f2061e4de4572989bc0746b5c0807%2Fff661357cf284e9788b3ad1e0c2e10f8"
                      alt="Patented Technology"
                      className="w-full max-w-[369px]"
                    />
                  </div>
                </FadeInSection>
                <FadeInSection>
                  <div className="flex flex-col items-center mt-12 lg:mt-[271px]">
                    <p className="julius-sans mb-4 text-center">
                      DETACHABLE/<br /> <br /> fans
                    </p>
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2F105f2061e4de4572989bc0746b5c0807%2Fa1f4f9278491485b8297eba6db4fc594"
                      alt="Detachable/Washable fans"
                      className="w-full max-w-[369px]"
                    />
                  </div>
                </FadeInSection>
              </div>
            </div>
          </div>
          <div className="hidden lg:flex flex-col ml-5 w-[17%]">
            {/* Placeholder for potential future content */}
          </div>
          <div className="flex flex-col w-full lg:w-[42%] lg:ml-5">
            <div className="flex flex-col mt-12 lg:mt-[187px]">
              <FadeInSection>
                <div className="flex flex-col items-center">
                  <p className="text-3xl sm:text-4xl lg:text-5xl text-center text-white julius-sans mb-4">
                    Accelerates <br /> Sweat Evaporation
                  </p>
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F105f2061e4de4572989bc0746b5c0807%2F5b9fcdefc01e4e6bada454517973f56a"
                    alt="Accelerates Sweat Evaporation"
                    className="w-full max-w-[500px]"
                  />
                </div>
              </FadeInSection>
              
              <div className="flex flex-col mt-12 lg:mt-56 w-full">
                <FadeInSection>
                  <div className="flex flex-col items-center">
                    <p className="text-3xl sm:text-4xl lg:text-5xl text-center text-white julius-sans mb-4">
                      ENHANCED AIRFLOW
                    </p>
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2F105f2061e4de4572989bc0746b5c0807%2Fda27a00e857542c1a94b83cf81a4075d"
                      alt="Enhanced Airflow"
                      className="w-full max-w-[500px]"
                    />
                  </div>
                </FadeInSection>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default PathForBetterWork;
