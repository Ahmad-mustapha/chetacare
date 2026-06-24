import FaqAccordion from '../components/faq/FaqAccordion';
import ReachOut from '../components/ReachOut';
import Seo from '../components/Seo';

export default function Faq() {
  return (
    <div className="bg-white min-h-screen">
      <Seo
        title="Chetacare | FAQ"
        description="Read answers to common questions about Chetacare, chronic disease support, and how our care experience works."
      />

      {/* Header Section - Perfectly aligned with global section header styles */}
      <section className="py-16 lg:py-24">
        <div className="container-wide w-full max-w-figma px-4 lg:px-100 mx-auto">
          <div className="flex flex-col items-center gap-6 lg:gap-8 w-full text-center">
            <p className="text-[#1A7A4A] font-bold text-lg uppercase tracking-wider">
              FAQ
            </p>
            <h1 className="text-[#1F2A24] font-medium text-[2rem] md:text-[2.5rem] lg:text-5xl leading-[1.1] lg:leading-[3rem] tracking-tight">
              Got questions? We've <br className="hidden md:block" /> got answers.
            </h1>
          </div>
        </div>
      </section>

      {/* Accordion Section */}
      <section className="pb-24">
        <div className="container-wide w-full max-w-figma px-4 lg:px-100 mx-auto">
          <FaqAccordion />
        </div>
      </section>

      {/* Global ReachOut CTA - Handles all user contact redirection natively without duplication */}
      <ReachOut />
    </div>
  );
}