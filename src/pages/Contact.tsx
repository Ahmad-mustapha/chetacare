import React from 'react';
import ContactDetails from '../components/contact/ContactDetails';
import ContactForm from '../components/contact/ContactForm';
import Seo from '../components/Seo';

const Contact: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <Seo
        title="Chetacare | Contact"
        description="Contact Chetacare to ask questions about chronic disease care support, partnerships, and preventive health guidance."
      />
      
      {/* Outer wrapper maps exactly to Figma body padding (80px top/bottom -> py-20) and container gaps */}
      <div className="w-full max-w-[1440px] mx-auto py-20 px-4 md:px-[100px] flex flex-col gap-20">
        
        {/* Title Container Section (Frame 1000007754 equivalent) with strict 32px gap (gap-8) */}
        <section className="text-center flex flex-col items-center gap-8 w-full">
          <h1 className="text-4xl md:text-6xl lg:text-[70px] font-medium text-[#1F2A24] tracking-[-2px] leading-tight lg:leading-[75px]">
            Contact Us
          </h1>
          <p className="text-base md:text-[20px] font-normal text-[#1F2A24] leading-relaxed md:leading-[24px] max-w-[848px]">
            Whether you are a patient, caregiver, healthcare provider, or organization, the Chetacare team is ready to support you.
          </p>
        </section>

        {/* Main Split Content Layout - Configured with exact 20px row gaps between layout blocks */}
        <section className="w-full grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
          
          {/* Left Column wrapper matching the target 610px width footprint proportions */}
          <div className="lg:col-span-6 w-full max-w-[610px]">
            <ContactDetails />
          </div>
          
          {/* Right Column wrapper matching the target 554.5px width container properties */}
          <div className="lg:col-span-6 w-full max-w-[554.5px] lg:ml-auto">
            <div className="bg-white border border-[#F3F3F3] shadow-[0px_2px_4px_rgba(0,0,0,0.05)] rounded-[12px] overflow-hidden p-8">
              <ContactForm />
            </div>
          </div>

        </section>
      </div>
    </div>
  );
};

export default Contact;