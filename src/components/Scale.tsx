import React from 'react';

const Scale: React.FC = () => {
  const stats = [
    {
      value: "5,500+",
      label: "People reached across Africa"
    },
    {
      value: "400+",
      label: "Emergency interventions prevented"
    },
    {
      value: "85%",
      label: "Customer Satisfaction"
    }
  ];

  return (
    <section className="py-16 bg-[#F7FBF9]">
      <div className="container-wide">
        <div className="flex flex-col md:flex-row bg-[#F9FAFB] border border-[#E5E7EB] overflow-hidden">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`flex-1 p-8 md:p-10 xl:p-14 flex flex-col justify-center items-start border-[#E5E7EB] ${index !== stats.length - 1 ? "md:border-r border-b md:border-b-0" : ""
                }`}
            >
              <h3 className="xl:leading-[75px] leading-[60px] lg:leading-[68px] md:leading-[64px] sm:leading-[56px] xl:text-[70px] lg:text-[64px] md:text-[56px] sm:text-[48px] text-[28px] tracking-[-1px] font-medium text-[#1F2A24] leading-none mb-4 tracking-[-1px]">
                {stat.value}
              </h3>
              <p className="text-[#4B5563] text-[16px] lg:text-[18px] leading-relaxed">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Scale;
