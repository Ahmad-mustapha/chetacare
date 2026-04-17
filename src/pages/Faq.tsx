import React from 'react';
import FaqAccordion from '../components/faq/FaqAccordion';
import ReachOut from '../components/ReachOut';
import { Link } from 'react-router-dom';

const Faq: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Header Section */}
      <section className="pt-20 pb-12 text-center">
        <div className="container-wide">
          <div className="inline-block px-4 py-1.5 border border-[#D1FADF] bg-[#ECFDF3] rounded-md mb-6">
            <span className="text-[#039855] font-medium text-sm">FAQ</span>
          </div>
          <h1 className="text-[32px] md:text-[56px] font-bold text-[#101828] tracking-tight mb-4">
            Got questions? We've <br className="hidden md:block" /> got answers.
          </h1>
        </div>
      </section>

      {/* Accordion Section */}
      <section className="pb-24">
        <div className="container-wide">
          <FaqAccordion />
        </div>
      </section>

      {/* Didn't find what you're looking for Section */}
      <section className="pb-24 text-center">
        <div className="container-wide">
          <h2 className="text-3xl md:text-[40px] font-bold text-[#101828] mb-4">
            Didn't find what you're looking for?
          </h2>
          <p className="text-lg text-[#475467] mb-8">
            Our care team is always available to support you.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-[#1A7A4A] text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-800 transition-all shadow-sm"
          >
            Talk to Chetacare
          </Link>
        </div>
      </section>

      {/* Prevent health problems Section */}
      <ReachOut />
    </div>
  );
};

export default Faq;
