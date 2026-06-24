import React, { useState, useEffect, useRef } from 'react';
import { User, MessageSquare, Languages, Activity, Heart } from 'lucide-react';

// Exported asset filenames from the Figma layer dump
const imgHybrid = "/assets/AboutUs-Hybrid-Model.png";
const imgAppFree = "/assets/AboutUs-App-Free-Access.png";
const imgMultilingual = "/assets/AboutUs-Multilingual-Engagement.png";
const imgPrevention = "/assets/AboutUs-Focus-on_prevention.png";
const imgPatientCentred = "/assets/AboutUs-Patient-Centred-Design.png";

const WhatMakesUsBetter: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Global 800ms fade-in animation trigger
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

  const features = [
    {
      title: "Hybrid Model",
      description: "Combines AI-powered monitoring with human clinical oversight for safety and reliability.",
      icon: <User className="w-[37.5px] h-[37.5px] text-white" />,
      bgImage: imgHybrid
    },
    {
      title: "App-Free Access",
      description: "Patients receive care via WhatsApp. No apps, no barriers.",
      icon: <MessageSquare className="w-[37.5px] h-[37.5px] text-white" />,
      bgImage: imgAppFree
    },
    {
      title: "Multilingual Engagement",
      description: "We meet patients in the languages they understand.",
      icon: <Languages className="w-[37.5px] h-[37.5px] text-white" />,
      bgImage: imgMultilingual
    },
    {
      title: "Focus on Prevention",
      description: "Early detection, continuous monitoring, and timely interventions reduce emergencies.",
      icon: <Activity className="w-[37.5px] h-[37.5px] text-white" />,
      bgImage: imgPrevention
    },
    {
      title: "Patient-Centred Design",
      description: "Care is simple, human, and accessible for everyone, regardless of tech literacy.",
      icon: <Heart className="w-[37.5px] h-[37.5px] text-white" />,
      bgImage: imgPatientCentred
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className={`w-full bg-white py-16 px-6 lg:py-20 lg:px-24 reveal-on-scroll ${
        isVisible ? 'is-visible' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-16">
        
        {/* Title Block - Reorganized and centered */}
        <div className="w-full flex flex-col items-center text-center gap-4 max-w-[610px]">
          <span className="text-[#1A7A4A] font-bold text-[18px] uppercase tracking-wider">
            What Makes Us Better
          </span>
          <h2 className="text-[#1F2A24] font-normal text-3xl md:text-[32px] leading-[40px]">
            Built for patients. Trusted by clinicians. Designed for Africa.
          </h2>
        </div>

        {/* Fluid 2-Column Grid Area replacing absolute positions */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5">
          {features.map((item, index) => (
            <div
              key={index}
              className={`w-full min-h-[248px] rounded-[16px] overflow-hidden relative card-bg-overlay flex flex-col justify-center items-start p-8 group transition-transform duration-300 hover:scale-[1.01] ${
                index === 4 ? 'md:col-span-2 md:max-w-[50%] md:mx-auto' : ''
              }`}
              style={{ backgroundImage: `url(${item.bgImage})` }}
            >
              {/* Tint Layer: Black with 60% opacity overlay */}
              <div className="absolute inset-0 bg-black/60 transition-colors duration-300 group-hover:bg-black/65 z-0" />

              {/* Foreground Content Frame - Set to z-10 to stay on top of tint */}
              <div className="relative z-10 flex flex-col gap-8 w-full">
                
                {/* Custom Sized Icon Wrapper */}
                <div className="w-[60px] h-[60px] rounded-[11.25px] flex items-center justify-center bg-transparent">
                  {item.icon}
                </div>

                {/* Typography Stack */}
                <div className="flex flex-col gap-2 w-full">
                  <h3 className="text-white font-bold text-[24px] leading-[32px]">
                    {item.title}
                  </h3>
                  <p className="text-white font-normal text-[18px] leading-[26px]">
                    {item.description}
                  </p>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhatMakesUsBetter;