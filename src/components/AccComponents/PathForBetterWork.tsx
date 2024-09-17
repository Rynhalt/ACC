
'use client'
import React from "react";
import FadeInSection from "./FadeInSection";

const PathForBetterWork: React.FC = () => {


  return (
    <>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Julius+Sans+One&display=swap');
    </style>

    <section  id="how-it-works" className="flex flex-col px-16 pt-24 pb-12 mt-0 w-full bg-sky-300 max-md:px-5 max-md:max-w-full">
      <div className="max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-2/5 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col text-center text-white max-md:mt-10 max-md:max-w-full">
              <FadeInSection>
              <h2  className="text-8xl max-md:max-w-full max-md:text-4xl julius-sans text-left">
              Why BreezeWear Works:
              </h2>
              </FadeInSection>
              <div className="flex flex-col self-end mt-48 mr-14 max-w-full text-5xl w-[369px] max-md:mt-10 max-md:mr-2.5 max-md:text-4xl">
                <FadeInSection>
                <p  className="self-end max-md:text-4xl julius-sans">Patented Technology</p>
                <img
                src = "https://cdn.builder.io/api/v1/image/assets%2F105f2061e4de4572989bc0746b5c0807%2Fff661357cf284e9788b3ad1e0c2e10f8" ></img>
                </FadeInSection>
                <FadeInSection>
                <p  className="self-start mt-[271px] max-md:mt-10 max-md:text-4xl julius-sans">
                  DETACHABLE/<br></br>Washable <br /> fans
                </p>
                <img
                src="https://cdn.builder.io/api/v1/image/assets%2F105f2061e4de4572989bc0746b5c0807%2Fa1f4f9278491485b8297eba6db4fc594"
                ></img>
                </FadeInSection>
                {/* <FadeInSection>
                <p className="self-center mt-96 max-md:mt-10 max-md:text-4xl julius-sans">
                  OPTIMAL COOLING
                </p>
                </FadeInSection> */}
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[17%] max-md:ml-0 max-md:w-full">
            {/* <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/54a2c254c7bde881d3e520fa214dfbe350c968773016e5a39267b7df0afa13d8?placeholderIfAbsent=true&apiKey=105f2061e4de4572989bc0746b5c0807"
              alt="ACC technology illustration"
              className="object-contain shrink-0 self-stretch my-auto max-w-full aspect-[0.16] rounded-[100px] w-[283px] max-md:mt-10"
            /> */}
          </div>
          <div className="flex flex-col ml-5 w-[42%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow mt-[187px] max-md:mt-10 max-md:max-w-full">
              <FadeInSection>
              <p className="self-start text-5xl text-center text-white max-md:text-4xl julius-sans">
                Accelerates <br /> Sweat Evaporation
              </p>
              <img
              src = "https://cdn.builder.io/api/v1/image/assets%2F105f2061e4de4572989bc0746b5c0807%2F5b9fcdefc01e4e6bada454517973f56a"
              ></img>
              </FadeInSection>
              
              <div className="flex flex-col pl-1.5 mt-56 w-full max-md:mt-10 max-md:max-w-full">
                <FadeInSection>
                <p className="self-start ml-3.5 text-5xl text-center text-white max-md:ml-2.5 max-md:text-4xl julius-sans">
                  ENHANCED AIRFLOW
                </p>
                <img
                src = "https://cdn.builder.io/api/v1/image/assets%2F105f2061e4de4572989bc0746b5c0807%2Fda27a00e857542c1a94b83cf81a4075d"
                ></img>
                </FadeInSection>
                <div className="flex flex-wrap gap-10 mt-80 max-md:mt-10 max-md:max-w-full">
                  <div className="flex flex-col grow shrink-0 basis-0 w-fit max-md:max-w-full" />
                </div>
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
