import React, { useEffect, useRef, useState } from 'react';

const Currentfocus: React.FC = () => {
  // Inline animation logic (0% to 100% opacity, scroll-triggered, 800ms)
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Runs once when scrolled into view
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
      className={`py-[80px] px-6 bg-[#FFFFFF] flex flex-col items-center justify-center transition-opacity duration-[800ms] ease-in-out ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {/* Main Container with 32px gap */}
      <div className="container-wide flex flex-col items-center gap-8">
        
        {/* Tagline updated to match universal style */}
        <h3 className="text-[#1A7A4A] font-bold text-[18px] leading-[27px] uppercase text-center">
          Our Current Focus
        </h3>

        {/* Text Frame with 64px gap */}
        <div className="flex flex-col items-center gap-16 w-full max-w-[1136px]">
          
          {/* Main Heading (Unified to #1F2A24 as per Figma) */}
          <h2 className="text-[#1F2A24] font-normal text-[28px] md:text-[40px] lg:text-[48px] leading-[1.2] lg:leading-[58px] text-center">
            We currently focus on hypertension and diabetes, two of Africa’s most common chronic conditions. Our predictive care system is designed to expand to many other long-term health conditions over time.
          </h2>

          {/* Subheading / Disclaimer */}
          <p className="text-[#1F2A24] font-medium text-[16px] lg:text-[20px] leading-[1.2] lg:leading-[24px] text-center">
            *Chetacare does not diagnose or prescribe. We empower people with validated health information and continuous support to help them make better health decisions and stay connected to care.
          </p>

        </div>
      </div>
    </section>
  );
};

export default Currentfocus;