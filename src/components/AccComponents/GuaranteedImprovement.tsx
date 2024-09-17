import React from "react";
import FadeInSection from "./FadeInSection";

const GuaranteedImprovement: React.FC = () => {
  return (
    <>

    <style>
    @import url('https://fonts.googleapis.com/css2?family=Julius+Sans+One&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=AR+One+Sans:wght@400..700&display=swap');
    </style>

    <section id="testimonials" className="flex flex-col items-center px-20 pt-32 pb-72 mt-0 w-full bg-sky-300 max-md:px-5 max-md:py-24 max-md:max-w-full">
      <FadeInSection>
      <h2 className="z-10 ml-12 text-8xl text-center text-white max-md:max-w-full max-md:text-4xl julius-sans">
      Cool Technology,<br />  Real Results.
      </h2>
      </FadeInSection>
      <FadeInSection>
      
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets%2F105f2061e4de4572989bc0746b5c0807%2Fa7a2225a348f474e843be348fb59e102"
        alt="Construction improvement illustration"
        className="object-contain mt-0 ml-11 max-w-full rounded-none aspect-[0.72] w-[500px] max-md:mt-0 max-md:w-[80%]"
      />
            <p className=" text-2xl text-left text-white mt-10 max-md:mt-20 max-md:max-w-full ar-one-sans">
            "BreezeWear keeps me cool, so <br></br> I can focus on what matters: <br></br> getting the job done."
            </p>
            <br></br>
            <p className=" text-2xl text-right text-white max-md:mt-10 max-md:max-w-full ar-one-sans">
            — 30 years old,  <br></br> Electrician
            </p>


      </FadeInSection>
      <div className="self-end mt-32 mb-0 w-full max-w-[1717px] max-md:mt-10 max-md:mb-2.5 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          
          <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
            <FadeInSection>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets%2F105f2061e4de4572989bc0746b5c0807%2Fbc59c3a832b6462397dd22811192263e"
              alt="Construction worker using ACC"
              className="object-contain grow w-full rounded-none aspect-[0.55] mt-[628px] max-md:mt-10 max-md:max-w-full"
            />
            <p className=" text-2xl text-left text-white max-md:mt-10 max-md:max-w-full ar-one-sans">
            "BreezeWear helps me stay focused and energized, even in the toughest conditions." 
            </p>
            <br></br>
            <p className=" text-2xl text-right text-white max-md:mt-10 max-md:max-w-full ar-one-sans">
            — 26 years old,  <br></br>Construction Worker
            </p>
            </FadeInSection>
          </div>
          
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <FadeInSection>
            <h2 className="z-10 ml-12 text-8xl text-left text-white max-md:max-w-full max-md:text-4xl julius-sans">
            Visions:
            </h2>
            <p className="mt-10 text-3xl text-right text-white max-md:mt-10 max-md:max-w-full ar-one-sans">
            We are dedicated to advancing air-conditioned clothing technology, aiming for global adoption to significantly lower energy consumption for heat management. Our mission is to contribute to environmental sustainability and create a healthier, more comfortable world through innovative cooling solutions.
            </p>
            </FadeInSection>
          </div>
          
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <FadeInSection>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets%2F105f2061e4de4572989bc0746b5c0807%2F134d763c27bf47ffa6b5038aac21a483"
              alt="ACC technology in use"
              className="object-contain w-full rounded-none aspect-[0.62] max-md:mt-10 max-md:max-w-full"
            />
            <p className=" text-2xl text-left text-white mt-10 max-md:mt-20 max-md:max-w-full ar-one-sans">
            "BreezeWear saved me when I was on the verge of quitting my job!"
            </p>
            <br></br>
            <p className=" text-2xl text-right text-white max-md:mt-10 max-md:max-w-full ar-one-sans">
            — 29 years old,  <br></br>Warehouse Worker
            </p>
            </FadeInSection>
          </div>
          
        </div>
      </div>
    </section>
    
    
    
    </>
  );
};

export default GuaranteedImprovement;
