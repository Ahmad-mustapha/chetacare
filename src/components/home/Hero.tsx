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
      className={`relative w-full lg:h-[667px] flex flex-col lg:flex-row items-stretch pt-12 md:pt-16 lg:pt-[80px] pb-0 px-4 md:px-8 lg:px-0 transition-opacity duration-[800ms] ease-in-out ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      style={{
        backgroundImage: `url('${heroBg}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Light Figma Overlay (White with 80% opacity) */}
      <div className="absolute inset-0 bg-white/80 z-0 pointer-events-none"></div>

      <div className="w-full max-w-[1440px] mx-auto xl:px-[100px] flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-16 z-10 relative h-full">
        
        {/* Left Column: Text & Metrics Container */}
        <div className="flex flex-col justify-start items-start w-full lg:w-1/2 max-w-[610px] gap-6 lg:gap-6 relative z-20">
          
          {/* Main Heading and Subtitle Frame */}
          <div className="flex flex-col gap-6 lg:gap-8 w-full">
            <h1 className="text-[#1F2A24] font-bold text-[2.25rem] md:text-[3.25rem] lg:text-[70px] leading-[1.1] lg:leading-[75px] tracking-tight lg:tracking-[-2px] font-sans">
              Smarter Monitoring for <span className="text-[#1A7A4A]">Hypertension</span> & <span className="text-[#1A7A4A]">Diabetes</span>
            </h1>

            <p className="text-[#1F2A24] text-[1rem] lg:text-[20px] font-normal leading-relaxed lg:leading-[24px] font-sans">
              Chetacare is building Africa’s predictive chronic disease management
              infrastructure, starting with hypertension and diabetes.
            </p>
          </div>

          {/* Action and Social Proof Frame */}
          <div className="flex flex-col gap-6 lg:gap-8 w-full">
            
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
              <div className="flex -space-x-[15px] items-center">
                <img className="w-10 h-10 rounded-full border-4 border-white object-cover bg-gray-200" src="/assets/User1.png" alt="User avatar 1" />
                <img className="w-10 h-10 rounded-full border-4 border-white object-cover bg-gray-200" src="/assets/User2.png" alt="User avatar 2" />
                <img className="w-10 h-10 rounded-full border-4 border-white object-cover bg-gray-200" src="/assets/User3.png" alt="User avatar 3" />
                <img className="w-10 h-10 rounded-full border-4 border-white object-cover bg-gray-200" src="/assets/User4.png" alt="User avatar 4" />
              </div>
              <p className="text-[13px] font-semibold text-[#1F2A24] leading-[1.5] max-w-[318px] font-sans">
                2,500+ People reached | 40+ Emergencies prevented | 85% Satisfaction
              </p>
            </div>

          </div>
        </div>

        {/* Right Column: Width-Centered, Height-Optimized Mockup Container */}
        <div className="w-full lg:w-1/2 flex justify-center items-end z-10 mt-6 lg:mt-0 lg:absolute lg:right-0 lg:top-[80px] lg:bottom-0 xl:right-[100px] h-auto">
          <img
            src={heroMockup}
            alt="Chetacare Transparent iPhone Mockup"
            className="w-auto max-w-[260px] sm:max-w-[320px] md:max-w-[365px] lg:max-w-none h-auto lg:h-[587px] object-contain object-bottom drop-shadow-2xl"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;