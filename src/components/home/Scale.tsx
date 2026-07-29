import React, { useEffect, useRef, useState } from 'react';

const Scale: React.FC = () => {
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

  // Ordered strictly as per the Figma layer tree sequence: 2,500+ -> 40+ -> 85%
  const stats = [
    {
      value: "2,500+",
      label: "People reached across Africa"
    },
    {
      value: "40+",
      label: "Emergency interventions prevented"
    },
    {
      value: "85%",
      label: "Customer Satisfaction"
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className={`w-full bg-[#F9FAFB] py-12 lg:py-[80px] section-px transition-opacity duration-[800ms] ease-in-out ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="w-full max-w-[1242px] mx-auto">
        {/* Main Flex Grid Wrapper: gap-[20px] on desktop matching Figma container layout */}
        <div className="w-full flex flex-col md:flex-row items-stretch justify-between gap-8 md:gap-[20px]">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex-1 w-full flex flex-col justify-start items-start p-6 lg:p-8 gap-4 lg:gap-[24px]"
            >
              {/* Stat Value Styling */}
              <h3 className="text-[#1A7A4A] font-medium text-[52px] lg:text-[70px] leading-[1.07] lg:leading-[75px] tracking-[-2px] font-sans">
                {stat.value}
              </h3>
              
              {/* Stat Label Styling */}
              <p className="text-[#1F2A24] font-medium text-[18px] lg:text-[20px] leading-[24px] font-sans max-w-[247px]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Scale;