
'use client'
import React from "react";
import FadeInSection from "./FadeInSection";

const ImageWithCaption: React.FC<{ title: string; imageSrc: string; altText: string; caption: string }> = ({
  title,
  imageSrc,
  altText,
  caption
}) => (
  <div className="flex flex-col items-center mt-12 lg:mt-24">
    <p className="text-3xl sm:text-4xl lg:text-5xl text-center text-white julius-sans mb-8 w-full">
      {title}
    </p>
    <img
      src={imageSrc}
      alt={altText}
      className="w-full max-w-[500px]"
    />
    <p className="text-base mt-6 ar-one-sans text-left w-full text-white">{caption}</p>
  </div>
);

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
              <div className="flex flex-col mt-12 lg:mt-24 max-w-full">
                <FadeInSection>
                  <ImageWithCaption
                    title="Patented Technology"
                    imageSrc="https://cdn.builder.io/api/v1/image/assets%2F105f2061e4de4572989bc0746b5c0807%2Fff661357cf284e9788b3ad1e0c2e10f8"
                    altText="Patented Technology"
                    caption="The patented technology integrates small yet powerful fans that draw in and circulate outside air within the garment. This airflow promotes continuous sweat evaporation, effectively lowering body temperature."
                  />
                </FadeInSection>
                <FadeInSection>
                  <ImageWithCaption
                    title="DETACHABLE fans"
                    imageSrc="https://cdn.builder.io/api/v1/image/assets%2F105f2061e4de4572989bc0746b5c0807%2Fa1f4f9278491485b8297eba6db4fc594"
                    altText="Detachable/Washable fans"
                    caption="The clothing features easily detachable fans, allowing for simple removal before washing the garment. The detachable design ensures maintenance is convenient and hassle-free, extending the garment's usability."
                  />
                </FadeInSection>
                <FadeInSection>
                  <ImageWithCaption
                    title="Durability and Flexibility"
                    imageSrc="https://cdn.builder.io/api/v1/image/assets%2F105f2061e4de4572989bc0746b5c0807%2F18ed4fceabb24d0d9091786061f7512e"
                    altText="Lightweight Design"
                    caption="Designed for demanding environments, the clothing not only boosts cooling performance but also offers rugged durability. It's suitable for industries where maintaining worker efficiency is critical."
                  />
                </FadeInSection>
              </div>
            </div>
          </div>
          <div className="hidden lg:flex flex-col ml-5 w-[17%]">
            {/* Placeholder for potential future content */}
          </div>
          <div className="flex flex-col w-full lg:w-[42%] lg:ml-5">
            <div className="flex flex-col mt-12 lg:mt-24">
              <FadeInSection>
                <ImageWithCaption
                  title="Evaporative Cooling"
                  imageSrc="https://cdn.builder.io/api/v1/image/assets%2F105f2061e4de4572989bc0746b5c0807%2F5b9fcdefc01e4e6bada454517973f56a"
                  altText="Accelerates Sweat Evaporation"
                  caption="The clothing utilizes the natural process of sweat evaporation to cool the body. This process mimics the body's physiological cooling, addressing the limitation that humans lack a natural air circulation system. The continuous evaporation of sweat ensures the optimal cooling state for the wearer, helping prevent heat-related fatigue."
                />
              </FadeInSection>
              
              <FadeInSection>
                <ImageWithCaption
                  title="ENHANCED AIRFLOW"
                  imageSrc="https://cdn.builder.io/api/v1/image/assets%2F105f2061e4de4572989bc0746b5c0807%2Fda27a00e857542c1a94b83cf81a4075d"
                  altText="Enhanced Airflow"
                  caption="An adjustable cord inside the collar creates a directed air passage that maximizes cooling efficiency. This airflow, combined with the garment's design, helps regulate body temperature even in high-heat environments."
                />
              </FadeInSection>

              <FadeInSection>
                <ImageWithCaption
                  title="Effective Across Conditions"
                  imageSrc="https://cdn.builder.io/api/v1/image/assets%2F105f2061e4de4572989bc0746b5c0807%2F26cd0483ef2e4a92a7ecb1f8f94d2d74"
                  altText="Rechargeable Battery"
                  caption="The cooling effect varies based on environmental factors such as temperature and humidity, making it adaptable to diverse climates. The garment's design minimizes unnecessary sweating and reduces energy consumption, while providing consistent cooling based on the wearer's needs."
                />
              </FadeInSection>

              <FadeInSection>
                <ImageWithCaption
                  title="Health and Energy Benefits"
                  imageSrc="https://cdn.builder.io/api/v1/image/assets%2F105f2061e4de4572989bc0746b5c0807%2F90d1d8a7a9f04a58b3ea7bfbe1764c01"
                  altText="Adjustable Settings"
                  caption="By maintaining an optimal skin surface cooling, the clothing reduces the risk of heat-related issues, such as dehydration, fatigue, and heat rash. It conserves energy by reducing unnecessary sweating, resulting in less physical strain and fewer breaks, thereby increasing overall work efficiency."
                />
              </FadeInSection>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default PathForBetterWork;
