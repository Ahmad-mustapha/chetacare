import React from 'react';

const whoWeAreImg = "/assets/AboutUs-Who-We-Are.png";

const WhoWeAre: React.FC = () => {
  return (
    <section className="w-full bg-[#F9FAFB] py-16 px-6 lg:py-20 lg:px-24">
      {/* 50/50 Responsive Split layout with standard 20px gap-5 */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-5 justify-between">
        
        {/* Left Column: Clean Image Wrapper */}
        <div className="w-full lg:w-1/2 flex justify-center items-center order-2 lg:order-1 mt-10 lg:mt-0">
          <img
            src={whoWeAreImg}
            alt="Chetacare Team - Healthcare Professionals"
            className="w-full max-w-[409px] h-auto rounded-[16px] figma-glow-shadow transition-transform duration-300 hover:scale-[1.01]"
          />
        </div>

        {/* Right Column: Text Content Block */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-start gap-8 order-1 lg:order-2">
          
          {/* Title Block with 16px gap-4 */}
          <div className="w-full flex flex-col items-start gap-4">
            <span className="text-[#1A7A4A] font-bold text-[18px] uppercase tracking-wider">
              Who We Are
            </span>
            <h2 className="text-[#1F2A24] font-normal text-3xl md:text-[32px] leading-[40px]">
              Proactive care built for continuous support.
            </h2>
          </div>

          {/* Body Paragraphs Block */}
          <div className="text-[#1F2A24] font-normal text-[18px] leading-[26px] space-y-4">
            <p>
              Chetacare is Africa's first predictive chronic disease management platform. We help people living with hypertension, diabetes, and other chronic conditions stay healthy through continuous monitoring, medication reminders, and early clinical intervention, delivered directly via WhatsApp.
            </p>
            <p>
              We believe healthcare should anticipate risk, support patients daily, and prevent emergencies before they happen.
            </p>
            <p>
              We are <strong>built in Nigeria, designed for Africa</strong>, and created to scale globally.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default WhoWeAre;