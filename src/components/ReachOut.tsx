import React from 'react';
import { Link } from 'react-router-dom';

const ReachOut: React.FC = () => {
  return (
    <section className="py-20 px-4 md:px-0 bg-white">
      <div className="container-wide">
        <div className="bg-[#F0FDF4] rounded-[32px] p-10 md:p-20 text-center border border-[#DCFAE6] shadow-sm relative overflow-hidden">
          {/* Subtle Decorative elements if needed, but keeping it clean as per image */}
          <div className="relative z-10 w-full md:max-w-4xl mx-auto">
            <h2 className="text-[32px] md:text-[48px] lg:text-[56px] font-bold text-[#101828] leading-[1.1] mb-6 tracking-tight">
              Prevent health problems before <br className="hidden md:block" /> they become emergencies.
            </h2>

            <p className="text-[#475467] text-[16px] md:text-[18px] lg:text-[20px] max-w-2xl mx-auto mb-10 leading-relaxed">
              We help you live longer, healthier life by connecting you with a verified doctor and continuous care.
            </p>

            <Link
              to="#"
              className="inline-block bg-[#1A7A4A] text-white px-10 py-4 rounded-xl font-semibold text-lg hover:bg-green-800 transition-all shadow-md"
            >
              Talk to Chetacare
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReachOut;
