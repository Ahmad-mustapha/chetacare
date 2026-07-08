import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import { FaXTwitter, FaLinkedinIn, FaTiktok, FaFacebookF } from 'react-icons/fa6';

const logoImage = "/assets/chetacarelogo.png";
// const footerBg = "/assets/Hero-Background.png";

const Footer: React.FC = () => {
  return (
    <footer
      className="w-full text-white py-16 px-6 md:px-12 xl:px-[100px] relative overflow-hidden bg-cover bg-no-repeat bg-center lg:bg-left-top"
      // style={{ backgroundImage: `url('${footerBg}')` }}
    >
      <div className="absolute inset-0 bg-[#1A7A4A]/95 pointer-events-none" />

      <div className="relative z-10 max-w-[1240px] mx-auto flex flex-col gap-16">
        
        {/* Main Content Row Splitting left block and right links directory */}
        <div className="w-full flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-6 xl:gap-[145px]">
          
          {/* Left Column: Brand Blocks & Contact rows aligned to 8px vertical grid */}
          <div className="w-full lg:max-w-[400px] xl:max-w-[470px] flex flex-col items-start gap-6">
            
            {/* Brand Profile Stack */}
            <div className="w-full flex flex-col items-start gap-4">
              <Link to="/" className="block w-[154px] h-[28.69px]">
                <img src={logoImage} alt="Chetacare Inverse Logo" className="w-full h-full object-contain brightness-0 invert" />
              </Link>
              <div className="flex flex-col gap-4 text-[18px] leading-[26px] font-sans">
                <p className="font-normal text-white">
                  Help that stays with you before, during, and after care.
                </p>
                <p className="font-semibold italic text-white">
                  Built in Nigeria, for Africa.
                </p>
              </div>
            </div>

            {/* Contact Grid with explicit Figma box colors */}
            <div className="w-full flex flex-col items-start gap-4">
              
              {/* Location Rows */}
              <div className="flex flex-row items-start gap-4 w-full">
                <div className="w-12 h-12 shrink-0 bg-[#208552] border border-[#43A473] rounded-xl flex items-center justify-center text-[#D0FECF]">
                  <MapPin size={20} />
                </div>
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-1">
                    <span className="text-white font-semibold text-[18px] leading-[26px] font-sans">
                      Main Office 1
                    </span>
                    <span className="text-white font-normal text-[18px] leading-[26px] font-sans">
                      No. 28, Ologbo Quarters, Ologuneru - Eleyele, Ibadan, Oyo State, Nigeria.
                    </span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-white font-semibold text-[18px] leading-[26px] font-sans">
                      Main Office 2
                    </span>
                    <span className="text-white font-normal text-[18px] leading-[26px] font-sans">
                      No. 4 Abepe Oduwaye Community, Adedeji Close, Ido-Eruwa Road, Ologuneru, Ibadan.
                    </span>
                  </div>
                </div>
              </div>

              {/* Phone Row */}
              <div className="flex flex-row items-center gap-4 w-full">
                <div className="w-12 h-12 shrink-0 bg-[#208552] border border-[#43A373] rounded-xl flex items-center justify-center text-[#D0FECF]">
                  <Phone size={20} />
                </div>
                <span className="text-white font-normal text-[18px] leading-[26px] font-sans">
                  +234 807 445 8695
                </span>
              </div>

              {/* Email Row */}
              <div className="flex flex-row items-center gap-4 w-full">
                <div className="w-12 h-12 shrink-0 bg-[#208552] border border-[#43A373] rounded-xl flex items-center justify-center text-[#D0FECF]">
                  <Mail size={20} />
                </div>
                <span className="text-white font-normal text-[18px] leading-[26px] font-sans">
                  support@chetacare.com
                </span>
              </div>

            </div>
          </div>

          {/* Right Side Links Matrix - Handles layout narrowing beautifully */}
          <div className="flex flex-col sm:flex-row sm:flex-wrap md:flex-nowrap gap-12 lg:gap-6 xl:gap-[42px] w-full justify-between">
            
            {/* Column 1: Company Directory */}
            <div className="flex flex-col items-start gap-8 min-w-[140px] xl:min-w-[150px]">
              <h4 className="text-white font-bold text-[20px] leading-[24px] font-sans">
                Company
              </h4>
              <ul className="flex flex-col items-start gap-4 text-[18px] leading-[26px] font-sans">
                <li><Link to="/about" className="hover:underline">About Us</Link></li>
                <li><Link to="/#how-it-works" className="hover:underline">How It Works</Link></li>
                <li><Link to="/faq" className="hover:underline">FAQ</Link></li>
                <li><Link to="/blog" className="hover:underline">Blog</Link></li>
                <li><Link to="/partner" className="hover:underline">Partner With Us</Link></li>
              </ul>
            </div>

            {/* Column 2: Resources Directory */}
            <div className="flex flex-col items-start gap-8 min-w-[140px] xl:min-w-[160px]">
              <h4 className="text-white font-bold text-[20px] leading-[24px] font-sans">
                Resources
              </h4>
              <ul className="flex flex-col items-start gap-4 text-[18px] leading-[26px] font-sans">
                <li><Link to="/contact" className="hover:underline">Contact Us</Link></li>
                <li><Link to="/privacy" className="hover:underline">Privacy Policy</Link></li>
                <li><Link to="/terms" className="hover:underline">Terms of Service</Link></li>
              </ul>
            </div>

            {/* Column 3: Social Connectivity Channels Row Grid */}
            <div className="flex flex-col items-start gap-8 max-w-[320px]">
              <h4 className="text-white font-bold text-[20px] leading-[24px] font-sans">
                Stay Connected
              </h4>
              
              <p className="text-white font-normal text-[18px] leading-[26px] font-sans">
                Follow our journey on social media.
              </p>
              
              <div className="flex flex-row items-center gap-2 flex-wrap">
                <a href="https://x.com/chetacare" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-[#208552] border border-[#43A373] flex items-center justify-center text-[#D0FECF] hover:text-white transition-all" aria-label="Twitter">
                  <FaXTwitter size={30} />
                </a>
                <a href="https://www.linkedin.com/company/chetacare" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-[#208552] border border-[#43A373] flex items-center justify-center text-[#D0FECF] hover:text-white transition-all" aria-label="LinkedIn">
                  <FaLinkedinIn size={30} />
                </a>
                <a href="https://www.tiktok.com/@chetacare" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-[#208552] border border-[#43A373] flex items-center justify-center text-[#D0FECF] hover:text-white transition-all" aria-label="TikTok">
                  <FaTiktok size={30} />
                </a>
                <a href="https://www.facebook.com/people/Chetacare/100066576465988/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-[#208552] border border-[#43A373] flex items-center justify-center text-[#D0FECF] hover:text-white transition-all" aria-label="Facebook">
                  <FaFacebookF size={30} />
                </a>
                {/* <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-[#208552] border border-[#43A373] flex items-center justify-center text-[#D0FECF] hover:text-white transition-all" aria-label="YouTube">
                  <FaYoutube size={30} />
                </a> */}
              </div>
            </div>

          </div>
        </div>

        {/* Horizontal Line Divider & Split Compliance Metadata Area */}
        <div className="w-full flex flex-col gap-8 pt-4">
          <div className="w-full h-[1px] bg-white" />
          
          <div className="w-full flex flex-col lg:flex-row justify-between items-center gap-6 text-[16px] leading-[24px] font-normal text-white font-sans">
            
            {/* Left Side: Compliance Links Grid */}
            <div className="flex flex-row items-center gap-[32px]">
              <Link to="/terms" className="hover:underline">Terms of Service</Link>
              <Link to="/privacy" className="hover:underline">Privacy Policy</Link>
              <Link to="/#security" className="hover:underline">Security</Link>
            </div>

            {/* Center Node: Pharmacy Governance Notice */}
            <p className="text-center">
              Chetacare is a product of SCION Pharmacy Limited
            </p>

            {/* Right Side: Simple Copyright Element */}
            <p className="text-center lg:text-right">
              &copy; 2026 Chetacare. All rights reserved.
            </p>
            
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;