import { Link } from 'react-router-dom';
import FaqAccordion from '../components/faq/FaqAccordion';
import Seo from '../components/Seo';

export default function Faq() {
  return (
    <div className="bg-white min-h-screen">
      <Seo
        title="Chetacare | FAQ"
        description="Read answers to common questions about Chetacare, chronic disease support, and how our care experience works."
      />

      {/* Header Section - Aligned with Figma Frame 1000007754 */}
      <section className="py-16 md:py-20 flex justify-center items-center w-full">
        <div className="container-wide w-full text-center">
          <div className="flex flex-col items-center gap-4 max-w-[820px] mx-auto">
            {/* Badge Category Token */}
            <p className="text-[#1A7A4A] font-bold text-[18px] leading-[27px] uppercase tracking-wider">
              FAQ
            </p>
            {/* Master Headline */}
            <h1 className="text-[#1F2A24] font-medium text-[36px] md:text-[56px] lg:text-[70px] leading-[1.1] md:leading-[60px] lg:leading-[75px] tracking-[-2px]">
              Got questions? We've <br className="hidden md:block" /> got answers.
            </h1>
          </div>
        </div>
      </section>

      {/* Accordion List Content Area */}
      <section className="pb-20 md:pb-24">
        <div className="container-wide w-full">
          <FaqAccordion />
        </div>
      </section>

      {/* Bottom CTA Block - Tailored to Figma Frame 1000007835 & Frame 52 */}
      {/* Note: Top border line removed completely per request */}
      <section className="py-16 md:py-20 bg-white flex justify-center items-center w-full">
        <div className="container-wide w-full text-center">
          <div className="flex flex-col items-center gap-8 max-w-[820px] mx-auto">
            
            {/* Frame 51 Content Stack */}
            <div className="flex flex-col items-center gap-4 max-w-[740px]">
              <h2 className="text-[#222222] font-medium text-[28px] md:text-[38px] lg:text-[48px] leading-tight lg:leading-[48px] tracking-tight">
                Didn’t find what you’re looking for?
              </h2>
              <p className="text-[#1F2A24] font-normal text-lg md:text-[20px] leading-[24px]">
                Our care team is always available to support you.
              </p>
            </div>
            
            {/* Clean client-side link element routing smoothly to the contact page */}
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center py-4 px-8 bg-[#1A7A4A] hover:bg-[#15613B] text-white text-[18px] font-medium rounded-xl transition-colors duration-200 shadow-sm cursor-pointer no-underline"
            >
              Talk to Chetacare
            </Link>
            
          </div>
        </div>
      </section>
    </div>
  );
}