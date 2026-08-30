import React, { useEffect, useRef, useState } from 'react';

const Currentfocus: React.FC = () => {
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
      className={`w-full bg-[#FFFFFF] py-[80px] section-px flex flex-col items-center justify-center transition-opacity duration-[800ms] ease-in-out ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {/* Root Layout Wrapper: Controls layout spacing metrics */}
      <div className="w-full max-w-[1440px] flex flex-col items-center gap-[16px]">
        
        {/* Tagline Banner */}
        <h3 className="text-[#1A7A4A] font-bold text-[18px] leading-[150%] uppercase text-center font-sans tracking-wider max-w-[240px]">
          OUR CURRENT FOCUS
        </h3>

        {/* Content Frame Block: Controls layout grouping distances */}
        <div className="flex flex-col items-center gap-[64px] w-full max-w-[1020px]">
          
          {/* Main Focus Heading Content */}
          <h2 className="text-[#1F2A24] font-normal text-[24px] md:text-[32px] leading-[32px] md:leading-[40px] text-center font-sans max-w-[820px]">
            We currently focus on hypertension and diabetes, two of Africa’s most common chronic conditions. Our predictive care system is designed to expand to many other long-term health conditions over time.
          </h2>

          {/* Subheading / Disclaimer Statement */}
          <p className="text-[#1F2A24] font-medium text-[16px] md:text-[20px] leading-[22px] md:leading-[24px] text-center font-sans max-w-[820px]">
            *Chetacare does not diagnose or prescribe. We empower people with validated health information and continuous support to help them make better health decisions and stay connected to care.
          </p>

        </div>
      </div>
    </section>
  );
};

export default Currentfocus;