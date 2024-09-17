'use client';
import React, { useEffect, useState } from 'react';

import '../../app/globals.css'; // Import CSS file for styling

const Parallax: React.FC = () => {
 const [scrollY, setScrollY] = useState<number>(0);

 useEffect(() => {
   const handleScroll = (): void => {
     setScrollY(window.scrollY);
   };

   window.addEventListener('scroll', handleScroll);

   return () => {
     window.removeEventListener('scroll', handleScroll);
   };
 }, []);

 return (
   <div className="parallax-container">
     <div
       className="parallax-bg"
       style={{ transform: `translateY(${scrollY * 0.5}px)` }}
     />
     <div className="parallax-content">
       <h1>Welcome to the Parallax Effect</h1>
       <p>This is a simple example of a parallax effect in React.js</p>
     </div>
   </div>
 );
};

export default Parallax;