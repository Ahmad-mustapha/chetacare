import React from 'react';
const whoWeAreImg = "/assets/who_we_are.png";

const WhoWeAre: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container-wide flex flex-col md:flex-row items-center gap-16">
        {/* Left: Image */}
        <div className="w-full md:w-1/2">
          <div className="rounded-[32px] overflow-hidden shadow-2xl h-full">
            <img
              src={whoWeAreImg}
              alt="Who We Are - Healthcare Professional"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right: Content */}
        <div className="w-full md:w-1/2">
          <div className="mb-8">
            <h2 className="text-[32px] md:text-[40px] xl:text-[48px] leading-[40px] md:leading-[50px] xl:leading-[55px] font-bold text-[#1F2A24] mb-2">
              Who We Are
            </h2>
            <div className="w-16 h-1.5 bg-[#1A7A4A] rounded-full"></div>
          </div>

          <div className="space-y-4 md:space-y-6 text-[#1F2A24] text-[16px] md:text-[18px] leading-relaxed">
            <p>
              Chetacare is Africa's first predictive chronic disease management platform. We help people living with hypertension, diabetes, and other chronic conditions stay healthy through continuous monitoring, medication reminders, and early clinical intervention, delivered directly via WhatsApp.
            </p>
            <p>
              We believe healthcare should anticipate risk, support patients daily, and prevent emergencies before they happen.
            </p>
            <p>
              We are built in Nigeria, designed for Africa, and created to scale globally.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;

