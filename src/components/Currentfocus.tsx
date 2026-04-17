import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import secure1 from '../assets/secure1.png';
import secure2 from '../assets/secure2.png';
import secure3 from '../assets/secure3.png';


const Currentfocus: React.FC = () => {
  return (
    <section className="py-16 lg:py-24 bg-white overflow-hidden">
      <div className="container-wide text-center">
        {/* Badge */}
        <div className="inline-block px-4 py-2 bg-[#22C55E0D] border border-[#22C55E4D] rounded-md sm:rounded-lg mb-8">
          <p className="text-[#1A7A4A] font-bold text-[16px] xl:text-[24px] capitalize">
            Our Current Focus
          </p>
        </div>

        {/* Large Heading */}
        <div className="max-w-6xl mx-auto mb-20">
          <h2 className="text-[26px] md:text-[32px] lg:text-[40px] xl:text-[48px] font-medium leading-[1.3] md:leading-[1.2]">
            <span className="text-[#1F2A24]">We begin with hypertension and diabetes, </span>
            <span className="text-[#4F6F5F]">two of Africa's most common chronic conditions. </span>
            <span className="text-[#1F2A24]">Our predictive care system </span>
            <span className="text-[#4F6F5F]">is designed to expand to </span>
            <span className="text-[#1A7A4A]">many other </span>
            <span className="text-[#1F2A24]">long-term health conditions over time.</span>
          </h2>
        </div>

        {/* Bottom Banner */}
        <div className="bg-[#F2FFF8] rounded-[] lg:rounded-[16px] p-6 lg:p-10 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-8 lg:gap-12">
            {/* Logo Placeholders */}
            <img src={secure1} alt="NDPC" className="h-8 md:h-10 w-auto object-contain" />
            <img src={secure2} alt="HIPAA" className="h-8 md:h-10 w-auto object-contain" />
            <img src={secure3} alt="GDPR" className="h-8 md:h-10 w-auto object-contain" />
          </div>

          <p className="text-[#1F2A24] text-[16px] xl:text-[18px] max-w-sm text-center lg:text-left">
            Your data is confidential and secured by HIPAA, GDPR, and NDPR standards.
          </p>

          <button className="bg-[#1A7A4A] text-[14px] lg:text-[16px] xl:text-[18px] text-white px-6 py-4 xl:rounded-[12px] font-medium flex items-center gap-2 hover:bg-[#1A7A4A]/80 transition-all whitespace-nowrap">
            Talk to Chetacare now
            <ArrowUpRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Currentfocus;
