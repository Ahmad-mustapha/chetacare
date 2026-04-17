import React from 'react';
import { Phone, Mail, Clock, MapPin } from 'lucide-react';

const ContactDetails: React.FC = () => {
  return (
    <div className="space-y-12">
      <h2 className="text-3xl font-bold text-[#101828] leading-tight">
        We're happy to monitor your health and answer any question
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-6">
        {/* Phone */}
        <div className="space-y-3">
          <div className="flex items-center space-x-3 text-[#1A7A4A]">
            <Phone size={24} />
            <h3 className="text-xl font-bold text-[#101828]">Phone Number</h3>
          </div>
          <p className="text-[#475467] text-lg font-medium">+1 0123 456 789</p>
        </div>

        {/* Mail */}
        <div className="space-y-3">
          <div className="flex items-center space-x-3 text-[#1A7A4A]">
            <Mail size={24} />
            <h3 className="text-xl font-bold text-[#101828]">Mail Address</h3>
          </div>
          <p className="text-[#475467] text-lg font-medium">info@example.com</p>
        </div>

        {/* Organization */}
        <div className="space-y-3">
          <div className="flex items-center space-x-3 text-[#1A7A4A]">
            <Clock size={24} />
            <h3 className="text-xl font-bold text-[#101828]">Organization</h3>
          </div>
          <p className="text-[#475467] text-lg font-medium">ABC Holdings</p>
        </div>

        {/* Address */}
        <div className="space-y-3">
          <div className="flex items-center space-x-3 text-[#1A7A4A]">
            <MapPin size={24} />
            <h3 className="text-xl font-bold text-[#101828]">Address</h3>
          </div>
          <p className="text-[#475467] text-lg font-medium leading-relaxed">
            77408 Gwagwalada <br />
            Motorway <br />
            Suite 469 Abuja, Nigeria.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
