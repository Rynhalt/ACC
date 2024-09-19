import React from "react";
import FadeInSection from "./FadeInSection";

interface TestimonialImageProps {
  src: string;
  alt: string;
  quote: string;
  author: string;
  className?: string;
}

const TestimonialUser: React.FC<TestimonialImageProps> = ({ src, alt, quote, author, className = "" }) => {
  return (
    <FadeInSection>
      <div className="flex flex-col max-w-[500px] mx-auto">
        <img
          loading="lazy"
          src={src}
          alt={alt}
          className={`object-contain rounded-none w-full ${className}`}
        />
        <div className="mt-4 p-4 bg-sky-300">
          <p className="text-lg sm:text-xl text-left ar-one-sans text-white">
            "{quote.split('<br />').map((line, index) => (
              <React.Fragment key={index}>
                {line}
                {index < quote.split('<br />').length - 1 && <br className="hidden sm:inline" />}
              </React.Fragment>
            ))}"
          </p>
          <p className="text-lg sm:text-xl text-right mt-4 ar-one-sans text-white">
            — {author.split('<br />').map((line, index) => (
              <React.Fragment key={index}>
                {line}
                {index < author.split('<br />').length - 1 && <br className="hidden sm:inline" />}
              </React.Fragment>
            ))}
          </p>
        </div>
      </div>
    </FadeInSection>
  );
};

export default TestimonialUser;