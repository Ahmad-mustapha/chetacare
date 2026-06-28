import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

// Importing the images that were removed from the old focus section
const secure1 = "/assets/secure1.png";
const secure2 = "/assets/secure2.png";
const secure3 = "/assets/secure3.png";

const DataSecurity: React.FC = () => {
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
      id="security"
      ref={sectionRef}
      className={`py-[80px] bg-[#F9FAFB] flex flex-col items-center justify-center transition-opacity duration-[800ms] ease-in-out ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="container-wide flex flex-col items-center px-6 lg:px-[100px] gap-16">
        
        {/* Top Text Block */}
        <div className="flex flex-col items-center text-center gap-8 max-w-[700px]">
          <h3 className="text-[#1A7A4A] font-bold text-[18px] leading-[27px] uppercase">
            Data Security
          </h3>
          
          <div className="flex flex-col gap-4">
            <h2 className="text-[#1F2A24] font-medium text-[28px] md:text-[32px] leading-[40px]">
              Chetacare operates with strong clinical and ethical standards.
            </h2>
            <p className="text-[#1F2A24] font-normal text-[16px] md:text-[18px] leading-[27px]">
            Your data is confidential and secured by <strong>HIPAA</strong>, <strong>GDPR</strong>, and <strong>NDPR</strong> standards.
            </p>
          </div>
        </div>

        {/* Icon Containers with Multi-Color Shadows */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 w-full">
          
          {/* Card 1 */}
          <div 
            className="flex items-center justify-center w-full md:w-[321px] h-[110px] bg-[#FFFFFF] border border-[#F3F3F3] rounded-[16px]"
            style={{ boxShadow: '4px 4px 8px rgba(0, 218, 252, 0.08), 1px -1px 8px rgba(244, 146, 255, 0.25)' }}
          >
            <img src={secure1} alt="Security Standard 1" className="max-h-[75px] w-auto object-contain" />
          </div>

          {/* Card 2 */}
          <div 
            className="flex items-center justify-center w-full md:w-[321px] h-[110px] bg-[#FFFFFF] border border-[#F3F3F3] rounded-[16px]"
            style={{ boxShadow: '-3px -1px 8px rgba(0, 218, 252, 0.11), 0px 6px 8px rgba(244, 146, 255, 0.08)' }}
          >
            <img src={secure2} alt="Security Standard 2" className="max-h-[75px] w-auto object-contain" />
          </div>

          {/* Card 3 */}
          <div 
            className="flex items-center justify-center w-full md:w-[321px] h-[110px] bg-[#FFFFFF] border border-[#F3F3F3] rounded-[16px]"
            style={{ boxShadow: '3px 4px 6.1px rgba(0, 218, 252, 0.11), 0px -4px 8px rgba(244, 146, 255, 0.08)' }}
          >
            <img src={secure3} alt="Security Standard 3" className="max-h-[75px] w-auto object-contain" />
          </div>

        </div>

        {/* Get Started Button */}
        <Link 
          to="/contact"
          className="bg-[#1A7A4A] text-[#FFFFFF] px-[32px] py-[16px] rounded-[12px] font-bold text-[18px] leading-[27px] hover:bg-green-800 transition-all text-center w-full sm:w-auto mt-4"
        >
          Talk to Chetacare
        </Link>

      </div>
    </section>
  );
};

export default DataSecurity;