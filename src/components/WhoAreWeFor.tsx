import React from 'react';
import { User } from 'lucide-react';
import { LuCross } from "react-icons/lu";
import { FaEarthAmericas } from "react-icons/fa6";
import { RiBuilding2Line } from "react-icons/ri";

const WhoAreWeFor: React.FC = () => {
  const cards = [
    {
      icon: <User className="w-6 h-6 text-[#1A7A4A]" />,
      title: "For Individuals",
      description: "Live confidently with hypertension and diabetes through continuous support, reminders, and early medical attention."
    },
    {
      icon: <LuCross className="w-6 h-6 text-[#1A7A4A]" />,
      title: "For Healthcare Providers",
      description: "Extend care beyond the hospital. Monitor patients remotely and reduce avoidable complications."
    },
    {
      icon: <RiBuilding2Line className="w-6 h-6 text-[#1A7A4A]" />,
      title: "For Employers",
      description: "Support workforce health through preventive chronic disease programs that reduce absenteeism and emergency care costs."
    },
    {
      icon: <FaEarthAmericas className="w-6 h-6 text-[#1A7A4A]" />,
      title: "For Governments & NGOs",
      description: "Deploy scalable chronic disease programs reaching underserved communities using conversational and voice technology."
    }
  ];


  return (
    <section className="py-8 md:py-14 bg-white">
      <div className="container-wide">
        <h2 className="text-[32px] lg:text-[44px] xl:text-[48px] font-medium text-[#1F2A24] text-center mb-16 leading-[50px] tracking-[-2px]">
          Who Chetacare Is For
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="p-3 md:p-6 border border-[#DDEEE5] rounded-[8px] md:rounded-[12px] xl:rounded-[16px] hover:border-[#22C55933] transition-all hover:shadow-xl hover:shadow-green-50/50 flex flex-col items-start"
            >
              <div className="w-12 h-12 flex items-center justify-center border border-[#DDEEE5] rounded-xl mb-10">
                {card.icon}
              </div>
              <h3 className="text-[20px] lg:text-[28px] font-semibold text-[#1F2A24]">
                {card.title}
              </h3>
              <p className="text-[#4B5563] text-[14px] md:text-[16px] xl:text-[18px] md:leading-[24px] xl:leading-[26px]">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoAreWeFor;
