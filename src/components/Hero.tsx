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
      className={`relative w-full min-h-[553px] flex items-center pt-[30px] pb-0 px-[16px] lg:py-[80px] lg:px-[100px] transition-opacity duration-[800ms] ease-in-out ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      style={{
        backgroundImage: `url('${heroBg}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Green Overlay */}
      <div className="absolute inset-0 bg-[#1A7A4A]/80 z-0 mix-blend-multiply pointer-events-none"></div>

      <div className="container-wide w-full flex flex-col lg:flex-row items-center justify-between gap-[32px] lg:gap-[20px] mx-auto z-10 relative">
        
        <div className="flex flex-col justify-center items-start w-full lg:w-[610px] gap-[16px] lg:gap-[32px]">
          
          <div className="flex flex-col gap-[16px] lg:gap-[32px] w-full">
            <h1 className="text-[#FFFFFF] text-[36px] md:text-[50px] lg:text-[70px] font-medium leading-[40px] lg:leading-[75px] tracking-tight lg:tracking-[-2px]">
              Smarter Monitoring for Hypertension & Diabetes.
            </h1>

            <p className="text-[#FFFFFF] text-[16px] lg:text-[20px] font-normal leading-[24px]">
              Chetacare is building Africa’s predictive chronic disease management
              infrastructure, starting with hypertension and diabetes.
            </p>
          </div>

          {/* FIXED: Buttons now stretch to exact same width on mobile (w-full) and stay on one line (whitespace-nowrap) */}
          <div className="flex flex-col sm:flex-row items-stretch lg:items-center gap-[16px] w-full sm:w-auto">
            <Link 
              to="/contact"
              className="bg-[#333333] text-[#FFFFFF] px-[32px] py-[16px] rounded-[12px] font-bold text-[18px] leading-[27px] hover:bg-gray-800 transition-all text-center w-full lg:w-auto whitespace-nowrap"
            >
              Get Started
            </Link>
            <Link 
              to="/partner" 
              className="bg-[#FFFFFF] text-[#1A7A4A] border border-[#1A7A4A] px-[32px] py-[16px] rounded-[12px] font-bold text-[18px] leading-[27px] hover:bg-gray-50 transition-all text-center w-full lg:w-auto whitespace-nowrap"
            >
              Partner With Us
            </Link>
          </div>

        </div>

        {/* FIXED: Exact 485px by 558px Desktop iPhone dimensions applied */}
        <div className="w-full lg:w-[610px] flex flex-col items-center justify-center lg:px-[82px] mt-4 lg:mt-0">
          <img
            src={heroMockup}
            alt="Chetacare App Mockup"
            className="w-[343px] lg:w-[485px] h-auto lg:h-[558px] object-contain drop-shadow-2xl relative z-10"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;