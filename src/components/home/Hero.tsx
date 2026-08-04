import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const heroBg = "/assets/Hero-Background.png"; 
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
      className={`relative max-w-[1440px] mx-auto lg:h-[667px] flex flex-col lg:flex-row items-stretch pt-12 md:pt-16 lg:pt-[72px] pb-0 bg-cover bg-no-repeat bg-[position:30%_25%] lg:bg-left-top transition-opacity duration-[800ms] ease-in-out ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      style={{
        backgroundImage: `url('${heroBg}')`
      }}
    >
      {/* Light Figma Overlay (White with 80% opacity) */}
      <div className="absolute inset-0 bg-white/80 z-0 pointer-events-none"></div>

      {/* Main Container */}
      <div className="w-full max-w-[1440px] mx-auto section-px flex flex-col lg:flex-row items-stretch justify-between gap-4 md:gap-16 lg:gap-5 z-10 relative h-full">
        
        {/* Left Column: Text & Metrics Container */}
        <div className="flex flex-col justify-start items-start w-full lg:w-1/2 max-w-[610px] gap-16 relative z-20 pb-0">
          
          {/* Main Heading and Subtitle Frame */}
          <div className="flex flex-col gap-4 md:gap-8 lg:gap-8 w-full">
            {/* Smooth font-size and leading progression across 4 breakpoints */}
            <h1 className="text-[#1F2A24] font-bold text-[2.25rem] md:max-lg:text-[4.375rem] min-[1024px]:text-[3.5rem] min-[1280px]:text-[4rem] min-[1440px]:text-[4.375rem] leading-[1.1] md:max-lg:leading-[75px] lg:leading-[1.1] xl:leading-[75px] tracking-tight xl:tracking-[-2px] font-sans">
              Smarter Monitoring for <span className="text-[#1A7A4A]">Hypertension</span> & <span className="text-[#1A7A4A]">Diabetes</span>
            </h1>

            {/* Subtitle font scale matched proportionally */}
            <p className="text-[#1F2A24] text-[1rem] md:text-[1.25rem] lg:text-[1.25rem] xl:text-[20px] font-normal leading-relaxed md:leading-[24px] lg:leading-normal xl:leading-[24px] font-sans">
              Chetacare is building Africa’s predictive chronic disease management
              infrastructure, starting with hypertension and diabetes.
            </p>
          </div>

          {/* Action and Social Proof Frame */}
          <div className="flex flex-col gap-4 md:gap-8 lg:gap-8 w-full">
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              {/* Primary Button */}
              <Link 
                to="/contact"
                className="flex bg-[#1A7A4A] justify-center items-center w-full sm:w-[153px] h-[54px] px-8 py-4 rounded-[12px] font-bold text-[18px] text-white hover:bg-[#135c37] transition-all text-center whitespace-nowrap font-sans"
              >
                Get Started
              </Link>
              
              {/* Secondary Button */}
              <Link 
                to="/partner" 
                className="flex bg-white justify-center items-center w-full sm:w-[186px] h-[56px] px-8 py-4 rounded-[12px] border border-[#1A7A4A] font-bold text-[18px] text-[#1A7A4A] hover:bg-gray-50 transition-all text-center whitespace-nowrap font-sans"
              >
                Partner With Us
              </Link>
            </div>

            {/* Social Proof (Avatar Stack & Metrics) */}
            <div className="flex flex-row items-center gap-4">
              <div className="flex -space-x-[15px] items-center shrink-0">
                <img className="w-10 h-10 rounded-full border-4 border-white object-cover bg-gray-200" alt="User avatar 1" src="/assets/User1.png" />
                <img className="w-10 h-10 rounded-full border-4 border-white object-cover bg-gray-200" alt="User avatar 2" src="/assets/User2.png" />
                <img className="w-10 h-10 rounded-full border-4 border-white object-cover bg-gray-200" alt="User avatar 3" src="/assets/User3.png" />
                <img className="w-10 h-10 rounded-full border-4 border-white object-cover bg-gray-200" alt="User avatar 4" src="/assets/User4.png" />
              </div>
              
              <p className="text-[13px] font-semibold text-[#1F2A24] leading-[1.5] max-w-[318px] font-sans">
                2,500+ People reached | 40+ Emergencies prevented | 85% Satisfaction
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Width-Centered, Height-Optimized Mockup Container */}
        <div className="w-full lg:w-1/2 flex justify-center items-end z-10 mt-6 md:mt-0 lg:mt-0">
          <img
            src={heroMockup}
            alt="Chetacare Transparent iPhone Mockup"
            className="w-auto h-full max-h-[400px] lg:max-h-[587px] object-contain object-bottom"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;