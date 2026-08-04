import React, { useState, useEffect, useRef } from 'react';
import { User, Globe } from 'lucide-react';
import { LuCross } from "react-icons/lu";
import { RiBuilding2Line } from "react-icons/ri";

const imgIndividuals = "/assets/Who-we-serve-Individuals.png";
const imgProviders = "/assets/Who-we-serve-HealthcareProviders.png";
const imgEmployers = "/assets/Who-we-serve-Employers.png";
const imgGovNGOs = "/assets/Who-we-serve-Governments.png";

const WhoAreWeFor: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

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

  const cards = [
    {
      title: "Individuals",
      description: "Live confidently with hypertension and diabetes through continuous support, reminders, and early medical attention.",
      icon: <User className="w-[37.5px] h-[37.5px] text-white" />,
      bgImage: imgIndividuals
    },
    {
      title: "Healthcare Providers",
      description: "Extend care beyond the hospital. Monitor patients remotely and reduce avoidable complications.",
      icon: <LuCross className="w-[37.5px] h-[37.5px] text-white" />,
      bgImage: imgProviders
    },
    {
      title: "Employers",
      description: "Support workforce health through preventive chronic disease programs that reduce absenteeism and emergency care costs.",
      icon: <RiBuilding2Line className="w-[37.5px] h-[37.5px] text-white" />,
      bgImage: imgEmployers
    },
    {
      title: "Governments & NGOs",
      description: "Deploy scalable chronic disease programs reaching underserved communities using conversational and voice technology.",
      icon: <Globe className="w-[37.5px] h-[37.5px] text-white" />,
      bgImage: imgGovNGOs
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className={`w-full bg-[#FFFFFF] py-12 lg:py-[80px] section-px reveal-on-scroll ${
        isVisible ? 'is-visible' : ''
      }`}
    >
      <div className="w-full max-w-[1242px] mx-auto flex flex-col items-center gap-12 lg:gap-[64px]">
        
        {/* Title Block */}
        <div className="w-full flex flex-col items-center text-center gap-4 max-w-[1242px]">
          <span className="text-[#1A7A4A] font-bold text-[18px] uppercase tracking-wider font-sans">
            WHO WE SERVE
          </span>
          <h2 className="text-[#1F2A24] font-normal text-[28px] md:text-[32px] leading-[36px] lg:leading-[40px] tracking-normal font-sans">
            Care management made easy for everyone
          </h2>
        </div>

        {/* 2-Column Grid Layout Area matching the specified overlay architecture */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-[20px]">
          {cards.map((card, index) => (
            <div
              key={index}
              className="w-full min-h-[256px] rounded-[16px] overflow-hidden relative card-bg-overlay flex flex-col justify-center items-start p-8 md:p-10 group transition-transform duration-300 hover:scale-[1.01]"
              style={{ backgroundImage: `url(${card.bgImage})` }}
            >
              {/* Tint Layer: Black with 60% opacity overlay matching Figma constraints */}
              <div className="absolute inset-0 bg-black/60 transition-colors duration-300 group-hover:bg-black/65 z-0" />

              {/* Foreground Content Frame - Set to z-10 to stay on top of tint */}
              <div className="relative z-10 flex flex-col gap-6 w-full">
                
                {/* Custom Sized Icon Wrapper */}
                <div className="h-[60px] rounded-[11.25px] flex items-center justify-start bg-transparent shrink-0">
                  {card.icon}
                </div>

                {/* Typography Stack */}
                <div className="flex flex-col gap-3 w-full">
                  <h3 className="text-white font-bold text-[24px] leading-[32px] font-sans">
                    {card.title}
                  </h3>
                  <p className="text-white font-normal text-[18px] leading-[26px] font-sans">
                    {card.description}
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

export default WhoAreWeFor;