import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const heroVideo = "/assets/iphone_video.mp4"; 

const HowWeWork: React.FC = () => {
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
      id="how-it-works"
      ref={sectionRef}
      className={`w-full bg-[#F9FAFB] py-12 lg:py-[80px] section-px transition-opacity duration-[800ms] ease-in-out ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="w-full max-w-[1240px] mx-auto flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12 lg:gap-[68px]">
        
        {/* Left Column: Text & Steps Content */}
        <div className="w-full lg:w-[596px] flex flex-col items-start gap-8 lg:gap-[64px]">
          
          {/* Section Header */}
          <div className="w-full flex flex-col items-start gap-4 lg:gap-[16px]">
            <h3 className="text-[#1A7A4A] font-bold text-[18px] leading-[150%] tracking-wider uppercase">
              HOW CHETACARE WORKS
            </h3>
            <h2 className="text-[#1F2A24] font-normal text-[28px] md:text-[32px] leading-[36px] lg:leading-[40px]">
              Continuous chronic disease care, <br /> delivered to you
            </h2>
          </div>

          {/* Steps Container */}
          <div className="w-full flex flex-col items-start gap-8 lg:gap-[32px]">
            
            {/* Step 1 */}
            <div className="w-full flex flex-col items-start gap-3 lg:gap-[12px]">
              <h4 className="text-[#1A7A4A] font-bold text-[22px] lg:text-[24px] leading-[32px]">
                Get started & know your health
              </h4>
              <p className="text-[#1F2A24] font-normal text-[16px] lg:text-[18px] leading-[26px]">
                Join easily via WhatsApp and complete a quick health assessment. We gather important details like your medical history, medications, and lifestyle to understand your risk level.
              </p>
            </div>

            {/* Step 2 */}
            <div className="w-full flex flex-col items-start gap-3 lg:gap-[12px]">
              <h4 className="text-[#1A7A4A] font-bold text-[22px] lg:text-[24px] leading-[32px]">
                Continuous monitoring & support
              </h4>
              <p className="text-[#1F2A24] font-normal text-[16px] lg:text-[18px] leading-[26px]">
                Track your health daily through simple check-ins on WhatsApp. Receive medication reminders, personalized lifestyle tips, and ongoing support to help you stay on track.
              </p>
            </div>

            {/* Step 3 */}
            <div className="w-full flex flex-col items-start gap-3 lg:gap-[12px]">
              <h4 className="text-[#1A7A4A] font-bold text-[22px] lg:text-[24px] leading-[32px]">
                Smart care & early intervention
              </h4>
              <p className="text-[#1F2A24] font-normal text-[16px] lg:text-[18px] leading-[26px]">
                Our system monitors your data and flags any risks. Clinicians step in when needed providing guidance, adjusting care, and helping prevent serious complications.
              </p>
            </div>

          </div>

          {/* Action Button */}
          <div className="w-full flex justify-start pt-2">
            <Link 
              to="/contact" 
              className="flex justify-center items-center bg-[#1A7A4A] text-white w-full sm:w-[149.15px] h-[53.2px] rounded-[12px] font-medium text-[18px] leading-[150%] hover:bg-[#135c37] transition-all text-center whitespace-nowrap"
            >
              Get Started
            </Link>
          </div>

        </div>

        {/* Right Column: Demo Video Container */}
        <div className="w-full lg:w-[610px] h-auto lg:h-[738px] bg-[#F3F3F3] flex items-center justify-center rounded-[24px] overflow-hidden py-10 px-6 lg:p-6">
          <video 
            src={heroVideo} 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-contain pointer-events-none rounded-[16px]"
          />
        </div>

      </div>
    </section>
  );
};

export default HowWeWork;