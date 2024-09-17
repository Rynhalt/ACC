import React from "react";
import FadeInSection from "./FadeInSection";

const GuaranteedImprovement: React.FC = () => {
  return (
    <>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Julius+Sans+One&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=AR+One+Sans:wght@400..700&display=swap');
      </style>

      <section id="testimonials" className="flex flex-col items-center px-4 sm:px-8 md:px-16 lg:px-20 pt-16 sm:pt-24 md:pt-32 pb-24 sm:pb-48 md:pb-72 w-full bg-sky-300">
        <FadeInSection>
          <h2 className="z-10 text-4xl sm:text-6xl md:text-8xl text-center text-white julius-sans">
            Cool Technology,<br />  Real Results.
          </h2>
        </FadeInSection>
        <FadeInSection>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets%2F105f2061e4de4572989bc0746b5c0807%2Fa7a2225a348f474e843be348fb59e102"
            alt="Construction improvement illustration"
            className="object-contain mt-8 sm:mt-12 max-w-full rounded-none aspect-[0.72] w-full sm:w-[80%] md:w-[500px]"
          />
          <div className="mt-8 sm:mt-10 text-white">
            <p className="text-xl sm:text-2xl text-left ar-one-sans">
              "BreezeWear keeps me cool, so <br className="hidden sm:inline" /> I can focus on what matters: <br className="hidden sm:inline" /> getting the job done."
            </p>
            <p className="text-xl sm:text-2xl text-right mt-4 ar-one-sans">
              — 30 years old,  <br className="hidden sm:inline" /> Electrician
            </p>
          </div>
        </FadeInSection>
        <div className="w-full mt-16 sm:mt-24 md:mt-32">
          <div className="flex flex-col md:flex-row gap-8 md:gap-5">
            <div className="w-full md:w-1/3">
              <FadeInSection>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets%2F105f2061e4de4572989bc0746b5c0807%2Fbc59c3a832b6462397dd22811192263e"
                  alt="Construction worker using ACC"
                  className="object-contain w-full rounded-none aspect-[0.55]"
                />
                <div className="mt-4 text-white">
                  <p className="text-xl sm:text-2xl text-left ar-one-sans">
                    "BreezeWear helps me stay focused and energized, even in the toughest conditions." 
                  </p>
                  <p className="text-xl sm:text-2xl text-right mt-4 ar-one-sans">
                    — 26 years old,  <br className="hidden sm:inline" />Construction Worker
                  </p>
                </div>
              </FadeInSection>
            </div>
            <div className="w-full md:w-1/3">
              <FadeInSection>
                <h2 className="z-10 text-4xl sm:text-6xl md:text-8xl text-left text-white julius-sans">
                  Visions:
                </h2>
                <p className="mt-4 sm:mt-6 md:mt-10 text-xl sm:text-2xl md:text-3xl text-right text-white ar-one-sans">
                  We are dedicated to advancing air-conditioned clothing technology, aiming for global adoption to significantly lower energy consumption for heat management. Our mission is to contribute to environmental sustainability and create a healthier, more comfortable world through innovative cooling solutions.
                </p>
              </FadeInSection>
            </div>
            <div className="w-full md:w-1/3 md:mt-[calc(100%-66.67%)]">
              <FadeInSection>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets%2F105f2061e4de4572989bc0746b5c0807%2F134d763c27bf47ffa6b5038aac21a483"
                  alt="ACC technology in use"
                  className="object-contain w-full rounded-none aspect-[0.62]"
                />
                <div className="mt-4 text-white">
                  <p className="text-xl sm:text-2xl text-left ar-one-sans">
                    "BreezeWear saved me when I was on the verge of quitting my job!"
                  </p>
                  <p className="text-xl sm:text-2xl text-right mt-4 ar-one-sans">
                    — 29 years old,  <br className="hidden sm:inline" />Warehouse Worker
                  </p>
                </div>
              </FadeInSection>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GuaranteedImprovement;
