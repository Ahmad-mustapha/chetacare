import React, { useEffect, useRef, useState } from 'react';

const Problem: React.FC = () => {
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
      className={`w-full bg-[#FFFFFF] py-12 lg:py-[80px] px-4 md:px-8 lg:px-[100px] transition-opacity duration-[800ms] ease-in-out ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="w-full max-w-[1240px] mx-auto flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-[20px]">
        
        {/* Left Column: Text Container */}
        <div className="w-full lg:w-[610px] flex flex-col items-start gap-8 lg:gap-[64px]">
          <div className="w-full flex flex-col items-start gap-4 lg:gap-[16px]">
            <span className="text-[#1A7A4A] font-bold text-[18px] leading-[150%] uppercase tracking-wider">
              THE CHALLENGE
            </span>
            <h2 className="text-[#1F2A24] font-normal text-[28px] md:text-[32px] leading-[36px] lg:leading-[40px]">
              Chronic diseases are rising rapidly across Africa.
            </h2>
          </div>

          <div className="w-full flex flex-col items-start gap-6 text-[#282828] text-[18px] leading-[150%]">
            <p>
              Millions are diagnosed but receive little follow-up care between hospital visits. 
              Missed medications, delayed attention, and poor monitoring often lead to preventable 
              emergencies such as stroke, heart failure, and kidney disease.
            </p>
            <p>
              Healthcare should not begin when complications occur.
            </p>
            <p className="text-[#1A7A4A] font-bold">
              Chetacare closes those gaps.
            </p>
          </div>
        </div>

        {/* Right Column: Stats Container */}
        <div className="w-full lg:w-[610px] flex flex-col items-stretch lg:items-end gap-6 lg:gap-[32px]">
          
          {/* Card 1 */}
          <div className="problem-stat-card">
            <div className="problem-stat-number">150M+</div>
            <div className="problem-stat-text">
              Adults in Africa living with hypertension across Africa
            </div>
          </div>

          {/* Card 2 */}
          <div className="problem-stat-card">
            <div className="problem-stat-number">80%</div>
            <div className="problem-stat-text">
              Of diabetes cases in Africa remain undiagnosed
            </div>
          </div>

          {/* Card 3 */}
          <div className="problem-stat-card">
            <div className="problem-stat-number">50%</div>
            <div className="problem-stat-text">
              Of diagnosed patients stop treatment after leaving the clinic
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Problem;