import React from 'react';
const hero1 = "/assets/hero1.png";
const hero2 = "/assets/hero2.png";

const Hero: React.FC = () => {
  return (
    <section className="py-12 pb-20 overflow-hidden bg-[#F7FBF9]">
      <div className="container-wide flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Column Content */}
        <div className="w-full lg:w-[60%] max-w-2xl">
          <div className="inline-block px-4 py-2 bg-[#22C55E0D] border border-[#22C55E4D] rounded-md sm:rounded-lg mb-8">
            <p className="text-[#1A7A4A] font-medium text-[12px] lg:text-[14px]">
              Predicting Risk. Preventing Complications. Delivering Continuous Care.
            </p>
          </div>

          <h1 className="text-[28px] md:text-[40px] lg:text-[50px] xl:text-[70px] font-medium text-[#1F2A24] leading-[36px] md:leading-[50px] xl:leading-[75px] mb-6 tracking-[-1px] md:tracking-[-2px]">
            Predict Chronic Disease Risk Before Complications Happen.
          </h1>

          <p className="text-[14px] lg:text-[18px] xl:text-[20px] text-[#1F2A24] mb-10 leading-[20px] lg:leading-[22px] xl:leading-[24px] tracking-[-0.5px]">
            Chetacare is building Africa's predictive chronic disease management
            infrastructure, starting with hypertension and diabetes.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-[#1A7A4A] text-white px-6 py-3 lg:px-[28px] lg:py-[14px] xl:px-8 xl:py-4 rounded-lg sm:rounded-xl font-bold text-lg hover:bg-green-800 transition-all shadow-lg hover:shadow-green-200/50 text-center">
              Get Started
            </button>
            <button className="bg-white text-[#1A7A4A] border-1 border-[#1A7A4A] px-6 py-3 lg:px-[28px] lg:py-[14px] xl:px-8 xl:py-4 rounded-lg sm:rounded-xl font-bold text-lg hover:bg-gray-50 transition-all text-center">
              Partner With Us
            </button>
          </div>

        </div>

        {/* Right Column Images */}
        <div className="relative w-full lg:w-[38%]">
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden">

            <img
              src={hero1}
              alt="Doctor working on laptop"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Overlapping notification bubble - made smaller */}
          <div className="absolute -bottom-24 -left-6 lg:-left-44 w-3/5 lg:w-3/5 max-w-[360px]">
            <img
              src={hero2}
              alt="Chetacare prediction notification"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </section>

  );
};

export default Hero;

