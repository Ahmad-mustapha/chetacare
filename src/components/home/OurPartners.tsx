import React, { useEffect, useRef, useState } from 'react';

const logoPartner1 = "/assets/OurPartners-Friendnpal.png"; 
const logoPartner2 = "/assets/OurPartners-WeMakeChange.png"; 

const OurPartners: React.FC = () => {
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
      className={`w-full bg-[#F8F8F8] py-12 lg:py-[80px] px-4 md:px-8 lg:px-[100px] transition-opacity duration-[800ms] ease-in-out ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {/* Centered Content Container */}
      <div className="w-full max-w-[1240px] mx-auto flex flex-col items-center gap-12 lg:gap-[64px]">
        
        {/* Header Text Block */}
        <div className="w-full flex flex-col items-center text-center gap-4">
          <span className="text-[#1A7A4A] font-bold text-[18px] leading-[150%] uppercase tracking-wider font-sans max-w-[200px]">
            OUR PARTNERS
          </span>
          <h2 className="text-[#1F2A24] font-normal text-[28px] md:text-[32px] leading-[36px] lg:leading-[40px] font-sans max-w-[802px]">
            The people helping us on our mission
          </h2>
        </div>

        {/* Partners Logo Row / Grid Container */}
        <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-6 lg:gap-[22px]">
          
          {/* Card Item 1 */}
          <div 
            className="w-full max-w-[321px] h-[108.95px] bg-white border border-[#F3F3F3] rounded-[16px] flex items-center justify-center p-4 transition-transform duration-300 hover:scale-[1.02]"
            style={{
              filter: 'drop-shadow(4px 4px 8px rgba(0, 218, 252, 0.08)) drop-shadow(1px -1px 8px rgba(244, 146, 255, 0.25))'
            }}
          >
            <img 
              src={logoPartner1} 
              alt="Chetacare Mission Partner Logo 1" 
              className="max-w-[160px] max-h-[71px] object-contain"
            />
          </div>

          {/* Card Item 2 */}
          <div 
            className="w-full max-w-[321px] h-[108.95px] bg-white border border-[#F3F3F3] rounded-[16px] flex items-center justify-center p-4 transition-transform duration-300 hover:scale-[1.02]"
            style={{
              filter: 'drop-shadow(-3px -1px 8px rgba(0, 218, 252, 0.11)) drop-shadow(0px 6px 8px rgba(244, 146, 255, 0.08))'
            }}
          >
            <img 
              src={logoPartner2} 
              alt="Chetacare Mission Partner Logo 2" 
              className="max-w-[240px] max-h-[35px] object-contain"
            />
          </div>

        </div>

      </div>
    </section>
  );
};

export default OurPartners;