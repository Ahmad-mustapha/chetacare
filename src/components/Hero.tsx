import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

// TODO: Update these paths to match exactly what you saved the Figma exports as in your public/assets/ folder
const heroBg = "/assets/hero-bg.png";
const heroMockup = "/assets/iphone.png"; // Export the free transparent iPhone 17 mockup here

const Hero: React.FC = () => {
  // Inline animation logic (0% to 100% opacity, 800ms)
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Runs once
        }
      },
      { threshold: 0.1 } // Triggers when 10% of the hero is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`relative w-full min-h-[553px] flex items-center py-[80px] lg:px-[100px] transition-opacity duration-[800ms] ease-in-out ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      style={{
        backgroundImage: `url('${heroBg}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: '#1A7A4A' // Fallback color while image loads
      }}
    >

      {/* 50/50 Split Container with 20px gap */}
      <div className="container-wide w-full flex flex-col lg:flex-row items-center justify-between gap-[20px] mx-auto z-10 px-6 lg:px-0">
        
        {/* Left Column Text (50%) */}
        <div className="flex flex-col justify-center items-start w-full lg:w-[610px] gap-[32px]">
          
          <div className="flex flex-col gap-[32px] w-full">
            <h1 className="text-[#FFFFFF] text-[38px] md:text-[50px] lg:text-[70px] font-medium leading-[1.1] lg:leading-[75px] tracking-[-2px]">
              Smarter Monitoring for Hypertension & Diabetes.
            </h1>

            <p className="text-[#FFFFFF] text-[16px] lg:text-[20px] font-normal leading-[24px]">
              Chetacare is building Africa’s predictive chronic disease management
              infrastructure, starting with hypertension and diabetes.
            </p>
          </div>

          {/* Buttons with 16px gap */}
          <div className="flex flex-col sm:flex-row items-center gap-[16px] w-full sm:w-auto">
            <Link 
              to="/contact"
              className="bg-[#333333] text-[#FFFFFF] px-[32px] py-[16px] rounded-[12px] font-bold text-[18px] leading-[27px] hover:bg-gray-800 transition-all w-full sm:w-auto text-center"
            >
              Get Started
            </Link>
            <Link 
              to="/partner" 
              className="bg-[#FFFFFF] text-[#1A7A4A] border border-[#1A7A4A] px-[32px] py-[16px] rounded-[12px] font-bold text-[18px] leading-[27px] hover:bg-gray-50 transition-all w-full sm:w-auto text-center"
            >
              Partner With Us
            </Link>
          </div>

        </div>

        {/* Right Column Image Container (50%) */}
        <div className="w-full lg:w-[610px] flex flex-col items-center justify-center lg:px-[82px] mt-12 lg:mt-0">
          <img
            src={heroMockup}
            alt="Chetacare App Mockup"
            className="w-full max-w-[485px] h-auto object-contain drop-shadow-2xl"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;