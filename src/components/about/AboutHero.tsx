import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const heroImage = '/assets/AboutUs-hero.png';

const AboutHero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Trigger the 800ms opacity fade-in when scrolled into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`w-full bg-white py-16 lg:py-20 section-px reveal-on-scroll ${
        isVisible ? 'is-visible' : ''
      }`}
    >
      {/* 50/50 Responsive Horizontal Split layout with standard 20px gap-5 */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-5 justify-between">
        
        {/* Left Column Content */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-start gap-8">
          
          {/* Header Block */}
          <div className="w-full flex flex-col justify-center items-start gap-4">
            <span className="text-[#1A7A4A] font-bold text-lg uppercase tracking-wider">
              Our Origin
            </span>
            <h1 className="text-[#1F2A24] font-bold text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.1] tracking-tight">
              A <span className="text-brand-primary">Story</span> That <br /> Drives Us
            </h1>
          </div>

          {/* Body Block with 8px increments spacing scale */}
          <div className="w-full flex flex-col justify-center items-start gap-16">
            <div className="max-w-[555px] text-[#1F2A24] text-base lg:text-lg leading-[26px] space-y-4">
              <p>
                Every day, millions of people live with chronic diseases like hypertension and diabetes. Many take medications, visit hospitals, and hope for the best, but too often, emergencies come first. Families lose loved ones. Lives are disrupted. Communities bear the cost.
              </p>
              <p>
                We asked ourselves: <strong>“Why should preventable complications happen when technology and care can intervene early?”</strong>
              </p>
              <p className="text-[#1F2A24]">
                That question became our mission.
              </p>
            </div>

            {/* Button Layout Row */}
            <div className="w-full sm:w-auto flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Link
                to="/partner"
                className="bg-[#1A7A4A] text-white py-4 px-8 rounded-xl font-bold text-lg hover:bg-green-800 transition-all text-center flex items-center justify-center w-full sm:w-auto sm:min-w-[180px] h-[54px]"
              >
                Partner With Us
              </Link>
              <Link
                to="/contact"
                className="bg-white text-[#1A7A4A] border border-[#1A7A4A] py-4 px-8 rounded-xl font-bold text-lg hover:bg-gray-50 transition-all text-center flex items-center justify-center w-full sm:w-auto sm:min-w-[150px] h-[54px]"
              >
                Get Started
              </Link>
            </div>
          </div>

        </div>

        {/* Right Column Image Container — hidden while the layout is stacked */}
        <div className="hidden lg:flex w-full lg:w-1/2 justify-center items-center">
          <img
            src={heroImage}
            alt="Chetacare background hero asset"
            className="w-full max-w-[491px] h-auto rounded-2xl figma-glow-shadow transition-transform duration-300 hover:scale-[1.01]"
          />
        </div>

      </div>
    </section>
  );
};

export default AboutHero;