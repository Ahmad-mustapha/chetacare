import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const heroBg = "/assets/hero-bg.png"; 
const heroMockup = "/assets/iphone.png"; 

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); 
        }
      },
      { threshold: 0.1 } 
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      // FIX: Changed to items-stretch, removed bottom padding (pb-0), and kept top padding so the image can touch the floor.
      className={`relative w-full lg:min-h-[34.566rem] flex items-stretch pt-[1.875rem] pb-0 px-4 lg:pt-16 lg:pb-0 lg:px-0 transition-opacity duration-[800ms] ease-in-out ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      style={{
        backgroundImage: `url('${heroBg}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Green Overlay */}
      <div className="absolute inset-0 bg-[#1A7A4A]/80 z-0 pointer-events-none"></div>

      {/* FIX: Changed items-center to items-stretch so columns take full height */}
      <div className="container-wide w-full max-w-[90rem] h-full flex flex-col lg:flex-row items-stretch gap-5 mx-auto z-10 relative">
        
        {/* Left Column: Text */}
        {/* FIX: Added pb-12 lg:pb-16 here so the text still has breathing room at the bottom, even though the section doesn't */}
        <div className="flex flex-col justify-center items-start w-full lg:w-1/2 gap-4 lg:gap-8 mt-8 lg:mt-0 relative z-20 pb-12 lg:pb-16">
          <div className="flex flex-col gap-4 lg:gap-8 w-full">
            <h1 className="text-white font-normal text-[2.25rem] md:text-[3.125rem] lg:text-[4.375rem] leading-[2.5rem] lg:leading-[4.6875rem] tracking-tight lg:tracking-[-0.125rem]">
              Smarter Monitoring for <span className="text-brand-stable">Hypertension</span> & <span className="text-brand-stable">Diabetes</span>
            </h1>

            <p className="text-white text-[1rem] lg:text-[1.25rem] font-normal leading-relaxed">
              Chetacare is building Africa’s predictive chronic disease management
              infrastructure, starting with <strong>hypertension</strong> and <strong>diabetes</strong>.
            </p>
          </div>

          {/* Buttons Container (Frame 21) */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-[1rem] z-20">
            
            {/* Primary Button (Dark) */}
            <Link 
              to="/contact"
              className="flex bg-[#333333] justify-center items-center w-[11.625rem] h-[3.325rem] px-[2rem] py-[1rem] rounded-[0.75rem] font-bold text-[1.125rem] leading-[1.6875rem] text-white hover:bg-gray-800 transition-all text-center whitespace-nowrap"
            >
              Get Started
            </Link>
            
            {/* Secondary Button (White) */}
            <Link 
              to="/partner" 
              className="flex bg-white justify-center items-center w-[11.6375rem] h-[3.503rem] px-[2rem] py-[1rem] rounded-[0.75rem] border border-brand-primary font-bold text-[1.125rem] leading-[1.6875rem] text-brand-primary hover:bg-gray-50 transition-all text-center whitespace-nowrap"
            >
              Partner With Us
            </Link>

          </div>
        </div>

        {/* Right Column: iPhone Mockup */}
        {/* FIX: Added items-end so the image pushes itself all the way down to the bottom of the section */}
        <div className="w-full lg:w-1/2 flex justify-center items-end z-[10] pointer-events-none mt-8 lg:mt-0">
          <img
            src={heroMockup}
            alt="Chetacare App Mockup"
            className="w-[21.4375rem] lg:w-full max-w-[25rem] h-auto object-contain drop-shadow-2xl pointer-events-auto"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;