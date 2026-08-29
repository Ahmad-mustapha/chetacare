import React from 'react';
import { Mail, MapPin } from 'lucide-react';
import { addresses, emailAddress, socialLinks } from '../../data/contactData';

const ContactDetails: React.FC = () => {
  return (
    <div className="flex flex-col gap-16 lg:gap-10 w-full">
      
      {/* Contact info cards container */}
      <div className="flex flex-col gap-8 w-full">
        
        <div className="flex flex-col gap-4 items-start w-full">
          <h2 className="text-[24px] font-bold leading-[32px] text-black">
            We are here to help
          </h2>
          <p className="text-[18px] font-normal leading-[26px] text-[#1F2A24]">
            Talk to us. Ask questions. Start care. Explore partnerships.
          </p>
        </div>

        <div className="flex flex-col gap-6 w-full">
          
          {/* Phone row
          <div className="flex items-start gap-4 w-full">
            <div className="w-[54px] h-[54px] bg-white border border-[#1A7A4A] rounded-[12px] flex items-center justify-center text-[#1A7A4A] shrink-0">
              <Phone className="w-7 h-7" />
            </div>
            <div className="flex flex-col justify-center min-h-[54px]">
              <h3 className="text-[16px] font-bold leading-[24px] text-[#1F2A24]">
                Phone Number
              </h3>
              <p className="text-[18px] font-normal leading-[26px] text-[#1F2A24]">
                {phoneNumber}
              </p>
            </div>
          </div> */}

          {/* Email row */}
          <div className="flex items-start gap-4 w-full">
            <div className="w-[54px] h-[54px] bg-white border border-[#1A7A4A] rounded-[12px] flex items-center justify-center text-[#1A7A4A] shrink-0">
              <Mail className="w-7 h-7" />
            </div>
            <div className="flex flex-col justify-center min-h-[54px]">
              <h3 className="text-[16px] font-bold leading-[24px] text-[#1F2A24]">
                Email Address
              </h3>
              <p className="text-[18px] font-normal leading-[26px] text-[#1F2A24]">
                {emailAddress}
              </p>
            </div>
          </div>

          {/* Address row */}
          <div className="flex items-start gap-4 w-full">
            <div className="w-[54px] h-[54px] bg-white border border-[#1A7A4A] rounded-[12px] flex items-center justify-center text-[#1A7A4A] shrink-0">
              <MapPin className="w-7.5 h-7.5" />
            </div>
            <div className="flex flex-col justify-center min-h-[54px] max-w-[540px]">
              <h3 className="text-[16px] font-bold leading-[24px] text-[#1F2A24]">
                Address
              </h3>
              <div className="flex flex-col gap-4">
                {addresses.map((address) => (
                  <p key={address} className="text-[18px] font-normal leading-[26px] text-[#1F2A24]">
                    {address}
                  </p>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Social Icons Section - Updated text, titles and icon order */}
      <div className="flex flex-col gap-4 w-full">
        <div className="flex flex-col gap-4 items-start w-full">
          <h4 className="text-[20px] font-bold leading-[24px] text-[#1F2A24]">
            Follow Us
          </h4>
          <p className="text-[18px] font-normal leading-[26px] text-[#1F2A24]">
            Stay connected with Chetacare.
          </p>
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          {socialLinks.map(({ name, href, icon: Icon, label }) => (
            <a
              key={name}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-12 h-12 bg-white border border-[#43A373] rounded-[12px] flex items-center justify-center text-[#1A7A4A] transition-colors hover:bg-gray-50"
            >
              <Icon className="w-7 h-7" />
            </a>
          ))}
        </div>
      </div>

    </div>
  );
};

export default ContactDetails;