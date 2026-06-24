import React, { useEffect, useRef, useState } from 'react';

const Scale: React.FC = () => {
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

  // Updated stats based on the Figma layers
  const stats = [
    {
      value: "2,500+",
      label: "People reached across Africa"
    },
    {
      value: "85%",
      label: "Customer Satisfaction"
    },
    {
      value: "40+",
      label: "Emergency interventions prevented"
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className={`py-[80px] bg-[#F8F8F8] transition-opacity duration-[800ms] ease-in-out ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="container-wide mx-auto lg:px-[100px]">
        {/* Flex container for the stats (gap-5 = 20px gap on desktop to match Figma) */}
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-5">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex-1 w-full flex flex-col justify-start items-start p-8 gap-6"
            >
              <h3 className="text-[#1A7A4A] text-[48px] lg:text-[70px] font-medium leading-[1.07] tracking-[-2px]">
                {stat.value}
              </h3>
              <p className="text-[#1F2A24] text-[18px] lg:text-[20px] font-medium leading-[1.2]">
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