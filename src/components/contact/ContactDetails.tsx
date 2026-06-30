import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

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
          <p className="text-[#475467] text-lg font-medium">+234 807 445 8695</p>
        </div>

        {/* Mail */}
        <div className="space-y-3">
          <div className="flex items-center space-x-3 text-[#1A7A4A]">
            <Mail size={24} />
            <h3 className="text-xl font-bold text-[#101828]">Mail Address</h3>
          </div>
          <div className="space-y-2">
            <p className="text-[#475467] text-lg font-medium">Support@chetacare.com</p>
          </div>
        </div>

        {/* Main Office 1 */}
        <div className="space-y-3">
          <div className="flex items-center space-x-3 text-[#1A7A4A]">
            <MapPin size={24} />
            <h3 className="text-xl font-bold text-[#101828]">Main Office 1</h3>
          </div>
          <p className="text-[#475467] text-lg font-medium leading-relaxed">
            No 28, Ologbo Quarters, <br />
            Ologuneru - Eleyele, <br />
            Ibadan, Oyo State, Nigeria.
          </p>
        </div>

        {/* Main Office 2 */}
        <div className="space-y-3">
          <div className="flex items-center space-x-3 text-[#1A7A4A]">
            <MapPin size={24} />
            <h3 className="text-xl font-bold text-[#101828]">Main Office 2</h3>
          </div>
          <p className="text-[#475467] text-lg font-medium leading-relaxed">
            No 4 Abepe Oduwaye Community, <br />
            Adedeji close, Ido-Eruwa road, <br />
            Ologuneru, Ibadan.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
