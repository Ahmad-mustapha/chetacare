import React from 'react';
import oldWomanGlass from '../assets/old_woman_glass.png';

const HowWeWork: React.FC = () => {
  return (
    <section className="py-8 md:py-20 bg-white">
      <div className="container-wide">
        {/* Badge */}
        <div className="inline-block px-4 py-2 bg-[#22C55E0D] border border-[#22C55E4D] rounded-md sm:rounded-lg mb-6">
          <p className="text-[#1A7A4A] font-bold text-[14px] xl:text-[16px]">
            How Chetacare Works
          </p>
        </div>

        {/* Title */}
        <h2 className="text-[28px] md:text-[36px] lg:text-[48px] font-semibold text-[#1F2937] leading-tight mb-16 max-w-4xl">
          Continuous Chronic Disease Care,<br /> Delivered to You
        </h2>

        <div className="flex flex-col lg:flex-row gap-12 lg:items-stretch">
          {/* Left Column: Image - 1/3 width */}
          <div className="relative lg:w-1/3">
            <div className="rounded-2xl md:rounded-[30px] overflow-hidden max-w-[400px] h-full">
              <img
                src={oldWomanGlass}
                alt="Elderly African woman with glasses smiling"
                className="w-full h-full aspect-[4/5] lg:aspect-auto object-cover"
              />
            </div>
          </div>

          {/* Right Column: Steps - 2/3 width */}
          <div className="flex flex-col justify-between lg:w-2/3">
            <div className="space-y-0">
              {/* Step 01 */}
              <div className="border-b border-gray-100 py-5 lg:py-7">
                <div className="flex gap-6 lg:gap-8">
                  <span className="text-[28px] xl:text-[30px] font-medium text-[#9F9F9F] leading-[40px] pt-1">01</span>
                  <div>
                    <h3 className="text-[24px] lg:text-[28px] xl:text-[30px] font-semibold text-[#1F2937] mb-3 leading-tight xl:leading-[40px]">
                      Get Started & Know Your Health
                    </h3>
                    <p className="text-[#6B7280] text-[16px] lg:text-[17px] xl:text-[18px] leading-relaxed xl:leading-[26px]">
                      Join easily via WhatsApp and complete a quick health assessment.
                      We gather important details like your medical history, medications,
                      and lifestyle to understand your risk level.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 02 */}
              <div className="border-b border-gray-100 py-5 lg:py-7">
                <div className="flex gap-6 lg:gap-8">
                  <span className="text-[28px] xl:text-[30px] font-medium text-[#9F9F9F] leading-[40px] pt-1">02</span>
                  <div>
                    <h3 className="text-[24px] lg:text-[28px] xl:text-[30px] font-semibold text-[#1F2937] mb-3 leading-tight xl:leading-[40px]">
                      Continuous Monitoring & Support
                    </h3>
                    <p className="text-[#6B7280] text-[16px] lg:text-[17px] xl:text-[18px] leading-relaxed xl:leading-[26px]">
                      Track your health daily through simple check-ins on WhatsApp.
                      Receive medication reminders, personalized lifestyle tips, and
                      ongoing support to help you stay on track.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 03 */}
              <div className="py-5 lg:py-7">
                <div className="flex gap-6 lg:gap-8">
                  <span className="text-[28px] xl:text-[30px] font-medium text-[#9F9F9F] leading-[40px] pt-1">03</span>
                  <div>
                    <h3 className="text-[24px] lg:text-[28px] xl:text-[30px] font-semibold text-[#1F2937] mb-3 leading-tight xl:leading-[40px]">
                      Smart Care & Early Intervention
                    </h3>
                    <p className="text-[#6B7280] text-[16px] lg:text-[17px] xl:text-[18px] leading-relaxed xl:leading-[26px]">
                      Our system monitors your data and flags any risks. Clinicians step
                      in when needed providing guidance, adjusting care, and helping
                      prevent serious complications.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="">
              <blockquote className="text-[#1F2937] text-[18px] lg:text-[20px] font-medium italic leading-relaxed">
                "From daily monitoring to early intervention, Chetacare keeps patients safe, connected, and supported."
              </blockquote>

              <button className="bg-[#1A7A4A] text-white px-8 py-4 lg:px-10 lg:py-4 rounded-lg lg:rounded-xl font-bold text-lg hover:bg-green-800 transition-all shadow-lg hover:shadow-green-200/50 mt-6">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
