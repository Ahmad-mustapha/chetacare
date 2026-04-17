import React from 'react';
import { User, MessageSquare, Languages, Activity, Heart } from 'lucide-react';

const WhatMakesUsBetter: React.FC = () => {
  const features = [
    {
      title: "Hybrid Model",
      description: "Combines AI-powered monitoring with human clinical oversight for safety and reliability.",
      icon: <User className="w-5 h-5 text-[#1A7A4A]" />
    },
    {
      title: "App-Free Access",
      description: "Patients receive care via WhatsApp.",
      icon: <MessageSquare className="w-5 h-5 text-[#1A7A4A]" />
    },
    {
      title: "Multilingual Engagement",
      description: "We meet patients in the languages they understand.",
      icon: <Languages className="w-5 h-5 text-[#1A7A4A]" />
    },
    {
      title: "Focus on Prevention",
      description: "Early detection, continuous monitoring, and timely interventions reduce emergencies.",
      icon: <Activity className="w-5 h-5 text-[#1A7A4A]" />
    },
    {
      title: "Patient-Centred Design",
      description: "Care is simple, human, and accessible for everyone, regardless of tech literacy.",
      icon: <Heart className="w-5 h-5 text-[#1A7A4A]" />
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container-wide">
        <div className="mb-12">
          <h2 className="text-[28px] md:text-[36px] lg:text-[40px] font-bold text-[#1F2A24] mb-2 leading-tight">
            What Makes Us Better
          </h2>
          <div className="w-16 h-1.5 bg-[#1A7A4A] rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-20">
          {features.map((item, index) => (
            <div
              key={index}
              className={`p-8 rounded-2xl border border-[#E2E8F0] bg-white hover:border-[#1A7A4A] transition-all group ${index === 4 ? 'md:col-span-1' : ''}`}
            >
              <div className="w-10 h-10 rounded-lg bg-[#F0FDF4] flex items-center justify-center mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-[#1F2A24] mb-2 group-hover:text-[#1A7A4A] transition-colors">{item.title}</h3>
              <p className="text-[#4A5568] text-base leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center pt-2">
          <p className="text-xl md:text-2xl font-bold text-[#1A7A4A]">
            Built for Patients. Trusted by Clinicians. Designed for Africa.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatMakesUsBetter;

