import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const ctaBgImage = "/assets/Reach-Out-Background.png";
const logoImage = "/assets/Full-Logo-Transparent.png";

const ReachOut: React.FC = () => {
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
      className={`w-full h-[495px] relative flex items-center justify-center bg-cover bg-center px-6 transition-opacity duration-[800ms] ease-in-out ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      style={{ backgroundImage: `url(${ctaBgImage})` }}
    >
      {/* Vector White Tint Overlay (80% Opacity) */}
      <div className="absolute inset-0 bg-white/80 z-0" />

      {/* Core Content Stack */}
      <div className="relative z-10 max-w-[675px] w-full flex flex-col items-center text-center gap-6">
        
        {/* Transparent Logo Node */}
        <Link to="/" className="block w-[300px] h-auto mb-2">
          <img 
            src={logoImage} 
            alt="Chetacare logo context" 
            className="w-full h-full object-contain filter brightness-90" 
          />
        </Link>

        {/* Typography Headers Group */}
        <div className="flex flex-col items-center gap-4">
          <h3 className="text-[#1A7A4A] font-bold text-3xl md:text-[48px] md:leading-[48px] tracking-tight font-sans">
            Connecting individuals to the help they need for healthier and longer lives.
          </h3>
          <p className="text-[#1A7A4A] font-normal text-lg md:text-[20px] leading-[24px] max-w-[623px] font-sans">
            Speak with verified healthcare professionals on Chetacare
          </p>
        </div>

        {/* Call to Action Button */}
        <Link
          to="/contact"
          className="bg-[#1A7A4A] text-white py-4 px-8 rounded-xl font-bold text-[18px] leading-[150%] shadow-md hover:bg-green-800 transition-all text-center min-w-[199px] h-[53px] flex items-center justify-center font-sans"
        >
          Talk to Chetacare
        </Link>
      </div>
    </section>
  );
};

export default ReachOut;