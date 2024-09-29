import React from "react";
import FadeInSection from "./FadeInSection";

interface TestimonialImageProps {
  src: string;
  alt: string;
  quote: string;
  author: string;
  className?: string;
}

const TestimonialUser: React.FC<TestimonialImageProps> = ({
  src,
  alt,
  quote,
  author,
  className = "",
}) => {
  return (
    <FadeInSection>
      <div className="flex flex-col max-w-[400px] mx-auto">
        <img
          loading="lazy"
          src={src}
          alt={alt}
          className={`object-cover rounded-none w-full h-[700px] ${className}`} // Increased height from 200px to 300px
        />
        <div className="max-w-[400px] mt-4 p-4 bg-sky-50 box-border">
          <p className="break-words text-xl sm:text-3xl text-left ar-one-sans text-black">
            "{quote.split('<br />').map((line, index) => (
              <React.Fragment key={index}>
                {line}
                {index < quote.split('<br />').length - 1 && (
                  <br className="hidden sm:inline" />
                )}
              </React.Fragment>
            ))}"
          </p>
          <p className="break-words text-xl sm:text-3xl text-right mt-4 ar-one-sans text-black">
            —{" "}
            {author.split('<br />').map((line, index) => (
              <React.Fragment key={index}>
                {line}
                {index < author.split('<br />').length - 1 && (
                  <br className="hidden sm:inline" />
                )}
              </React.Fragment>
            ))}
          </p>
        </div>
      </div>
    </FadeInSection>
  );
};

export default TestimonialUser;
