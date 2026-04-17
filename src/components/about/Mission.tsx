import React from 'react';
import { ShieldCheck } from 'lucide-react';

const Mission: React.FC = () => {
  const values = [
    {
      title: "Our Mission",
      description: "To prevent chronic disease complications and improve the quality of life for millions of Africans through continuous, accessible, and predictive healthcare.",
      icon: <ShieldCheck className="w-6 h-6 text-[#1A7A4A]" />
    },
    {
      title: "Our Vision",
      description: "A future where chronic disease complications are drastically reduced across Africa, where every patient has access to continuous support regardless of location, literacy level, or technology access.",
      icon: <ShieldCheck className="w-6 h-6 text-[#1A7A4A]" />
    }
  ];

  return (
    <section className="py-20 bg-[#F7FBF9]">
      <div className="container-wide">
        <div className="grid md:grid-cols-2 gap-8">
          {values.map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border-l-4 border-[#1A7A4A] flex flex-col items-start gap-6 hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-lg bg-[#F0FDF4] flex items-center justify-center">
                {item.icon}
              </div>
              <div className="space-y-4 mt-2">
                <h3 className="text-[32px] md:text-[40px] xl:text-[48px] leading-[40px] md:leading-[50px] xl:leading-[55px] font-bold text-[#1A7A4A]">{item.title}</h3>
                <p className="text-[#1F2A24] text-[16px] md:text-[18px] leading-relaxed max-w-xl">
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

export default Mission;

