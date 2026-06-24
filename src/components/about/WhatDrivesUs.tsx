import React from 'react';
import { User } from 'lucide-react';
import { MdOutlineFamilyRestroom } from "react-icons/md";
import { IoPeopleOutline } from "react-icons/io5";

// Mock asset paths for the card header illustrations 
const patientsImg = "/assets/drives_patients.png";
const familiesImg = "/assets/drives_families.png";
const communitiesImg = "/assets/drives_communities.png";

const WhatDrivesUs: React.FC = () => {
  const impacts = [
    {
      title: "Patients",
      description: "Who are missing medications and suffering preventable emergencies.",
      image: patientsImg,
      icon: <User className="w-5 h-5 text-[#1A7A4A]" />
    },
    {
      title: "Families",
      description: "Who are losing loved ones because critical care gaps exist.",
      image: familiesImg,
      icon: <MdOutlineFamilyRestroom className="w-5 h-5 text-[#1A7A4A]" />
    },
    {
      title: "Communities",
      description: "People struggling with conditions that can be managed with the right support.",
      image: communitiesImg,
      icon: <IoPeopleOutline className="w-5 h-5 text-[#1A7A4A]" />
    }
  ];

  return (
    <section className="w-full bg-[#F8F8F8] py-16 px-6 lg:py-20 lg:px-24 flex flex-col items-center gap-16">
      
      {/* Title Header Block with 16px gap-4 */}
      <div className="w-full flex flex-col items-center text-center gap-4 max-w-[606px]">
        <span className="text-[#1A7A4A] font-bold text-[18px] uppercase tracking-wider">
          What Drives Us
        </span>
        <h2 className="text-[#1F2A24] font-normal text-3xl md:text-[32px] leading-[40px]">
          Our work is centered around the human impact of healthcare.
        </h2>
      </div>

      {/* 3-Column Cards Grid with Figma's 20px grid gap-5 */}
      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {impacts.map((item, index) => (
          <div
            key={index}
            className="w-full bg-white rounded-2xl overflow-hidden flex flex-col items-center pb-8 text-center drives-card-shadow transition-transform duration-300 hover:translate-y-[-4px]"
          >
            {/* Top Card Image Cover Area */}
            <img 
              src={item.image} 
              alt={`${item.title} focus area`}
              className="w-full h-[240px] object-cover"
            />

            {/* Inner Content Block with 32px gap-8 spacing */}
            <div className="w-full px-6 pt-8 flex flex-col items-center gap-4">
              
              {/* Horizontal Tag Row (Icon + Title side-by-side with 16px gap-4) */}
              <div className="flex flex-row items-center justify-center gap-4">
                <div className="w-8 h-8 rounded-xl flex items-center justify-center bg-transparent">
                  {item.icon}
                </div>
                <h3 className="text-[#1F2A24] font-bold text-[24px] leading-[32px]">
                  {item.title}
                </h3>
              </div>

              {/* Description Content Layer */}
              <p className="text-[#1F2A24] font-normal text-[18px] leading-[26px] max-w-[336px]">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};

export default WhatDrivesUs;