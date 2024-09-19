import React from "react";
import { siteContent } from "../../content/siteContent";
import FadeInSection from "../shared/FadeInSection";
import TestimonialImage from "../shared/TestimonialUser";

const Testimonial: React.FC = () => {
  const { title, testimonials } = siteContent.guaranteedImprovement;

  return (
    <>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Julius+Sans+One&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=AR+One+Sans:wght@400..700&display=swap');
      </style>

      <section id="testimonials" className="flex flex-col items-center px-4 sm:px-8 md:px-16 lg:px-20 pt-16 sm:pt-24 md:pt-32 pb-24 sm:pb-48 md:pb-72 w-full bg-sky-300">
        <FadeInSection>
          <h2 className="z-10 text-4xl sm:text-6xl md:text-8xl text-center text-white julius-sans">
            {title.split('<br/>').map((line, index) => (
              <React.Fragment key={index}>
                {line}
                {index < title.split('<br/>').length - 1 && <br />}
              </React.Fragment>
            ))}
          </h2>
        </FadeInSection>
        
        <div className="flex justify-center w-full">
          <TestimonialImage
            src={testimonials[0].image.src}
            alt={testimonials[0].image.alt}
            quote={testimonials[0].quote}
            author={testimonials[0].author}
            className="mt-8 sm:mt-12 max-w-full aspect-[0.72] w-full sm:w-[80%] md:w-[500px] mx-auto"
          />
        </div>

        <div className="w-full mt-16 sm:mt-24 md:mt-32">
          <div className="flex flex-col md:flex-row gap-8 md:gap-5">
            <div className="w-full md:w-1/3">
              <TestimonialImage
                src={testimonials[1].image.src}
                alt={testimonials[1].image.alt}
                quote={testimonials[1].quote}
                author={testimonials[1].author}
                className="w-full aspect-[0.55]"
              />
            </div>
            <div className="w-full md:w-1/3">
              {/* Commented out vision section */}
            </div>
            <div className="w-full md:w-1/3 md:mt-[calc(100%-66.67%)]">
              <TestimonialImage
                src={testimonials[2].image.src}
                alt={testimonials[2].image.alt}
                quote={testimonials[2].quote}
                author={testimonials[2].author}
                className="w-full aspect-[0.55]"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
