import React from 'react';
import { User } from 'lucide-react';
import { MdOutlineFamilyRestroom } from "react-icons/md";
import { IoPeopleOutline } from "react-icons/io5";

const WhatDrivesUs: React.FC = () => {
  const impacts = [
    {
      title: "Patients",
      description: "Who are missing medications and suffering preventable emergencies",
      icon: <User className="w-6 h-6 text-[#1A7A4A]" />
    },
    {
      title: "Families",
      description: "Who are losing loved ones because care gaps exist",
      icon: <MdOutlineFamilyRestroom className="w-7 h-7 text-[#1A7A4A]" />
    },
    {
      title: "Communities",
      description: "People struggling with diseases that can be managed with the right support",
      icon: <IoPeopleOutline className="w-7 h-7 text-[#1A7A4A]" />
    }
  ];


  return (
    <section className="py-20 bg-[#F7FBF9]">
      <div className="container-wide text-center">
        <h2 className="text-[32px] md:text-[40px] font-bold text-[#1F2A24] mb-4">
          What Drives Us
        </h2>
        <p className="text-[#4A5568] text-lg mb-16 max-w-2xl mx-auto">
          Our work is centered around the human impact of healthcare.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {impacts.map((item, index) => (
            <div
              key={index}
              className="bg-white p-4 md:px-6 md:py-10 rounded-2xl flex flex-col items-center gap-6"
            >
              <div className="w-14 h-14 rounded-xl bg-[#EFF6FF] flex items-center justify-center">
                {/* <div className=""> */}
                {item.icon}
                {/* </div> */}
              </div>
              <div className="space-y-3">
                <h3 className="text-[18px] md:text-[20px] xl:text-[24px] font-bold text-[#171C22]">{item.title}</h3>
                <p className="text-[#424752] text-[14px] md:text-[16px] xl:text-[18px] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatDrivesUs;

