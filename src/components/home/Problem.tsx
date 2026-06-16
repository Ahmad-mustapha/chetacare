import React, { useEffect, useRef, useState } from 'react';

// TODO: Update this path if you rename the image uploaded from Figma
const problemImage = "/assets/problemImage.png"; 

const Problem: React.FC = () => {
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
      // Mobile: py-[32px], Desktop: py-[80px]
      className={`py-[32px] lg:py-[80px] bg-[#FFFFFF] transition-opacity duration-[800ms] ease-in-out ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {/* Container: Mobile px-[16px] with gap-[64px], Desktop px-[100px] */}
      <div className="container-wide mx-auto px-[16px] lg:px-[100px] flex flex-col lg:flex-row justify-between items-center lg:items-start gap-[64px] lg:gap-5">
        
        {/* Left Column: Text & Cards */}
        {/* Mobile: gap-[32px], Desktop: gap-[64px] */}
        <div className="flex flex-col w-full lg:w-[610px] gap-[32px] lg:gap-[64px]">
          
          {/* Top Text Block */}
          {/* Mobile: gap-[16px], Desktop: gap-[32px] */}
          <div className="flex flex-col gap-[16px] lg:gap-[32px]">
            
            {/* Header Group */}
            <div className="flex flex-col gap-[16px]">
              <h3 className="text-[#1A7A4A] font-bold text-[18px] leading-[27px] uppercase">
                The Challenge
              </h3>
              <h2 className="text-[#1F2A24] font-medium text-[32px] leading-[40px]">
                Chronic diseases are rising rapidly across Africa.
              </h2>
            </div>

            {/* Body Content - Gap 20px between paragraphs */}
            <div className="flex flex-col gap-[20px] text-[#282828] text-[18px] leading-[26px] lg:leading-[27px]">
              <p>
                Millions live with hypertension and diabetes without continuous monitoring, 
                leading to avoidable strokes, heart failure, kidney disease, and emergency hospitalizations. 
                Healthcare systems react late. Patients fall through the gaps between clinic visits.
              </p>
              {/* Note: This is 700 bold on mobile per Figma, 600 semibold on desktop */}
              <p className="font-bold lg:font-semibold text-[#282828] lg:text-[#1F2A24]">
                Chetacare closes those gaps.
              </p>
            </div>

          </div>

          {/* Stats Cards - Flex Column on Mobile, Row on Desktop */}
          <div className="flex flex-col sm:flex-row gap-[20px] lg:gap-5">
            
            {/* Card 1 */}
            <div className="flex flex-col gap-[12px] flex-1">
              <h4 className="text-[#1A7A4A] font-bold text-[24px] leading-[32px]">150M+</h4>
              <p className="text-[#1F2A24] font-normal text-[18px] leading-[26px]">
                Adults in Africa living with hypertension
              </p>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col gap-[12px] flex-1">
              <h4 className="text-[#1A7A4A] font-bold text-[24px] leading-[32px]">80%</h4>
              <p className="text-[#1F2A24] font-normal text-[18px] leading-[26px]">
                Of diabetes cases in Africa undiagnosed
              </p>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col gap-[12px] flex-1">
              <h4 className="text-[#1A7A4A] font-bold text-[24px] leading-[32px]">50%</h4>
              <p className="text-[#1F2A24] font-normal text-[18px] leading-[26px]">
                Of diagnosed patients stop treatment after leaving the clinic
              </p>
            </div>

          </div>
        </div>

        {/* Right Column: Image Container */}
        {/* This is completely hidden on mobile (hidden) and flex on desktop (lg:flex) */}
        <div className="hidden lg:flex w-full lg:w-[420px] justify-center mt-8 lg:mt-0">
          <img 
            src={problemImage} 
            alt="Healthcare professional with patient" 
            className="w-full max-w-[420px] h-auto lg:h-[540px] object-cover rounded-[24px] bg-[#D9D9D9] shadow-sm"
          />
        </div>

      </div>
    </section>
  );
};

export default Problem;