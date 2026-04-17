import React from 'react';
import ContactDetails from '../components/contact/ContactDetails';
import ContactForm from '../components/contact/ContactForm';

const Contact: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Header Section */}
      <section className="pt-20 pb-16 text-center">
        <div className="container-wide">
          <h1 className="text-[32px] md:text-[64px] font-bold text-[#101828] tracking-tight mb-6">
            Contact Us
          </h1>
          <p className="text-lg md:text-[20px] text-[#475467] max-w-2xl mx-auto">
            We're constantly pushing the boundaries of what's possible and seeking new ways to improve our services.
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="pb-24">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <ContactDetails />
            <div className="bg-white rounded-2xl shadow-sm border border-[#EAECF0] overflow-hidden">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
