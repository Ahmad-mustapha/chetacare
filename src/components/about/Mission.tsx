import React from 'react';
import { Heart, Shield, Target } from 'lucide-react';

const Mission: React.FC = () => {
  const values = [
    {
      kicker: "Our Mission",
      description: "To prevent chronic disease complications and improve the quality of life for millions of Africans through continuous, accessible, and predictive healthcare.",
      icon: <Target className="w-full h-7 text-[#1A7A4A]" />
    },
    {
      kicker: "Our Vision",
      description: "A future where chronic disease complications are drastically reduced across Africa, where every patient has access to continuous support regardless of location, literacy level, or technology access.",
      icon: (
        <div className="relative w-full h-7 flex items-center justify-center">
          <Shield className="absolute inset-0 w-full h-7 text-[#1A7A4A]" />
          <Heart className="relative w-3 h-3 text-[#1A7A4A] fill-[#1A7A4A]" />
        </div>
      )
    }
  ];

  return (
    <section className="w-full bg-white py-16 lg:py-20 section-px">
      {/* 2-Column Responsive Layout with Figma's 20px grid gap */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-5">
        
        {values.map((item, index) => (
          <div
            key={index}
            className="w-full bg-white p-10 rounded-2xl flex flex-col items-start gap-8 mission-glow-shadow"
          >
            {/* Tagline Row (Icon + Kicker side-by-side with 16px gap) */}
            <div className="flex flex-row items-center gap-4">
              <div className="w-8 h-8 flex items-center justify-center bg-transparent">
                {item.icon}
              </div>
              <span className="text-[#1A7A4A] font-bold text-[18px] uppercase tracking-wider">
                {item.kicker}
              </span>
            </div>

            {/* Core Value Statement */}
            <p className="text-[#1F2A24] font-normal text-[18px] leading-[26px] w-full">
              {item.description}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
};

export default Mission;