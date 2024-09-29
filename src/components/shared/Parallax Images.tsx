import React, { useRef } from 'react';

interface ParallaxImagesProps {
  image1: string;
  image2: string;
}

const ParallaxImages: React.FC<ParallaxImagesProps> = ({ image1, image2 }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      className="position-relative overflow-hidden"
      style={{ height: '100vh' }}
    >
      <img
        src={image1}
        alt="First Image"
        className="w-full h-full object-cover"
      />
      <img
        src={image2}
        alt="Second Image"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default ParallaxImages;
