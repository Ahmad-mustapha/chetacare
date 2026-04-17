import React from 'react';

const Problem: React.FC = () => {
  return (
    <section className="py-8 md:py-20 bg-white">
      <div className="container-wide">
        <div className="flex flex-col lg:flex-row gap-12 mb-16">
          {/* Left Column: Badge (1/3) */}
          <div className="lg:w-1/3">
            <div className="inline-block px-4 py-2 bg-[#22C55E0D] border border-[#22C55E4D] rounded-md sm:rounded-lg mb-6 lg:mb-0">
              <p className="text-[#15803d] font-bold text-[14px] xl:text-[16px]">
                The Challenge
              </p>
            </div>
          </div>

          {/* Right Column: Content (2/3) */}
          <div className="lg:w-2/3">
            <h2 className="text-[28px] md:text-[40px] lg:text-[50px] xl:text-[70px] font-medium text-[#1F2A24] leading-[36px] md:leading-[50px] xl:leading-[75px] mb-8 tracking-[-1px] md:tracking-[-2px]">
              Chronic diseases are rising rapidly across Africa.
            </h2>

            <div className="space-y-6 text-[#4B5563] text-[18px] lg:text-[22px] xl:text-[28px] leading-relaxed">
              <p>
                Millions live with hypertension and diabetes without continuous monitoring,
                leading to avoidable strokes, heart failure, kidney disease, and emergency
                hospitalizations.
              </p>

              <div className="space-y-4">
                <p>Healthcare systems react late.</p>
                <p>Patients fall through the gaps between clinic visits.</p>
                <p className="font-semibold text-[#1F2937]">Chetacare closes those gaps.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics Cards */}
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          {/* Card 1 */}
          <div className="w-full md:flex-1 xl:w-[392px] xl:h-[149px] bg-[#FFF8EE] px-8 py-6 xl:p-8 rounded-xl md:rounded-[24px] flex flex-col justify-center min-h-[150px] md:min-h-[180px] xl:min-h-0">
            <h3 className="text-[48px] lg:text-[56px] xl:text-[60px] font-bold text-[#1F2A24] leading-none mb-2 tracking-normal">150+</h3>
            <p className="text-[#1F2A24] text-[16px] xl:text-[18px] leading-tight max-w-[200px] tracking-normal">
              Adults in Africa living with hypertension
            </p>
          </div>

          {/* Card 2 */}
          <div className="w-full md:flex-1 xl:w-[392px] xl:h-[149px] bg-[#F1FEF8] px-8 py-6 xl:p-8 rounded-xl md:rounded-[24px] flex flex-col justify-center min-h-[150px] md:min-h-[180px] xl:min-h-0">
            <h3 className="text-[48px] lg:text-[56px] xl:text-[60px] font-bold text-[#1F2A24] leading-none mb-2 tracking-normal">80%</h3>
            <p className="text-[#1F2A24] text-[16px] xl:text-[18px] leading-tight max-w-[200px] tracking-normal">
              Of diabetes cases in Africa undiagnosed
            </p>
          </div>

          {/* Card 3 */}
          <div className="w-full md:flex-1 xl:w-[392px] xl:h-[149px] bg-[#FFF8EE] px-8 py-6 xl:p-8 rounded-xl md:rounded-[24px] flex flex-col justify-center min-h-[150px] md:min-h-[180px] xl:min-h-0">
            <h3 className="text-[48px] lg:text-[56px] xl:text-[60px] font-bold text-[#1F2A24] leading-none mb-2 tracking-normal">50%</h3>
            <p className="text-[#1F2A24] text-[16px] xl:text-[18px] leading-tight max-w-[200px] tracking-normal">
              Of diagnosed patients stop treatment after leaving the clinic
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
