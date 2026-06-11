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

// ... inside your Hero.tsx ...
  return (
    <section
      ref={sectionRef}
      // Ensure overflow is visible so the iPhone can bleed down into the next section
      className={`relative w-full lg:h-[34.566rem] flex items-center pt-[1.875rem] pb-[3.125rem] px-4 lg:py-0 lg:px-0 transition-opacity duration-[800ms] ease-in-out ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      style={{
        backgroundImage: `url('${heroBg}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Green Overlay - Sits perfectly over the background image */}
      <div className="absolute inset-0 bg-brand-primary/80 z-0 mix-blend-multiply pointer-events-none"></div>

      <div className="container-wide w-full max-w-[90rem] h-full flex flex-col lg:flex-row items-center justify-between mx-auto z-10 relative">
        
        <div className="flex flex-col justify-center items-start w-full lg:w-[38.125rem] gap-4 lg:gap-8 lg:mt-0 mt-8">
          <div className="flex flex-col gap-4 lg:gap-8 w-full">
            {/* FIX: Changed font-medium to font-normal */}
            <h1 className="text-white font-small text-[2.25rem] md:text-[3.125rem] lg:text-[4.375rem] leading-[40px] lg:leading-[4.6875rem] tracking-tight lg:tracking-[-0.125rem] lg:w-[38.125rem]">
              Smarter Monitoring for <span className="text-brand-stable">Hypertension</span> & <span className="text-brand-stable">Diabetes</span>
            </h1>

            <p className="text-white text-[1rem] lg:text-[1.25rem] font-normal leading-relaxed">
              Chetacare is building Africa’s predictive chronic disease management
              infrastructure, starting with hypertension and diabetes.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch lg:items-center gap-4 w-full sm:w-auto z-20">
            <Link 
              to="/contact"
              className="bg-[#333333] text-white px-8 py-4 rounded-[0.75rem] font-bold text-[1.125rem] hover:bg-gray-800 transition-all text-center w-full lg:w-[11.637rem] whitespace-nowrap"
            >
              Get Started
            </Link>
            <Link 
              to="/partner" 
              className="bg-white text-brand-primary border border-brand-primary px-8 py-4 rounded-[0.75rem] font-bold text-[1.125rem] hover:bg-gray-50 transition-all text-center w-full lg:w-[11.637rem] whitespace-nowrap"
            >
              Partner With Us
            </Link>
          </div>

        </div>

        {/* Right Column: iPhone Mockup */}
        <div className="w-full flex justify-center lg:block lg:absolute lg:w-[25rem] lg:right-[10.156rem] lg:bottom-0 mt-8 lg:mt-0 z-[10] pointer-events-none">
          <img
            src={heroMockup}
            alt="Chetacare App Mockup"
            className="w-[21.4375rem] lg:w-full h-auto lg:h-full object-contain object-bottom drop-shadow-2xl pointer-events-auto"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;