import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import { FaXTwitter, FaLinkedinIn, FaTiktok, FaFacebookF, FaYoutube } from 'react-icons/fa6';

const ctaBgImage = "/assets/Footer.png";
const logoImage = "/assets/Full-Logo-Transparent.png";
// const logoName = "/assets/Footer-Name.png";

const Footer: React.FC = () => {

  return (
    <footer className="w-full flex flex-col items-center relative overflow-hidden">
      
      {/* 1. Final CTA Pre-Footer Section */}
      <section 
        className="w-full h-[495px] relative flex items-center justify-center bg-cover bg-center px-6"
        style={{ backgroundImage: `url(${ctaBgImage})` }}
      >
        {/* Vector White Tint Overlay (80% Opacity) */}
        <div className="absolute inset-0 bg-white/80 z-0" />

        {/* Core Content Stack */}
        <div className="relative z-10 max-w-[675px] w-full flex flex-col items-center text-center gap-6">
          {/* Transparent Logo Node */}
          <Link to="/" className="block w-[300px] h-auto mb-2">
            <img 
              src={logoImage} 
              alt="Chetacare logo context" 
              className="w-full h-full object-contain filter brightness-90" 
            />
          </Link>

          {/* Typography Headers Group */}
          <div className="flex flex-col items-center gap-4">
            <h3 className="text-[#1A7A4A] font-bold text-3xl md:text-[48px] md:leading-[48px] tracking-tight">
              Connecting individuals to the help they need for healthier and longer lives.
            </h3>
            <p className="text-[#1A7A4A] font-normal text-lg md:text-[20px] leading-[24px] max-w-[623px]">
              Speak with verified healthcare professionals on Chetacare
            </p>
          </div>

          {/* Call to Action Button */}
          <Link
            to="/contact"
            className="bg-[#1A7A4A] text-white py-4 px-8 rounded-xl font-bold text-[18px] leading-[150%] shadow-md hover:bg-green-800 transition-all text-center min-w-[199px] h-[53px] flex items-center justify-center"
          >
            Talk to Chetacare
          </Link>
        </div>
      </section>

      {/* 2. Main Directory & Link Columns Section (Updated Lower Half) */}
      <section className="w-full bg-[#1A7A4A] text-white py-16 px-6 lg:py-16 lg:px-[100px]">
        <div className="max-w-[1240px] mx-auto flex flex-col gap-16">
          
          {/* Main Content Row Splitting left block and right links directory */}
          <div className="w-full flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-[197px]">
            
            {/* Left Column: Brand Blocks & Contact rows (Width: 421.5px) */}
            <div className="w-full lg:max-w-[470px] flex flex-col items-start gap-[23px]">
              
              {/* Brand Profile Stack */}
              <div className="w-full flex flex-col items-start gap-4">
                <Link to="/" className="block w-[154px] h-[28.69px]">
                  <img src={logoImage} alt="Chetacare Inverse Logo" className="w-full h-full object-contain brightness-0 invert" />
                </Link>
                <div className="flex flex-col gap-4 text-[18px] leading-[26px]">
                  <p className="font-normal text-white">
                    Healthcare that stays with you before, <br></br> during, and after treatment.
                  </p>
                  <p className="font-semibold italic text-white">
                    Built in Nigeria, for Africa.
                  </p>
                </div>
              </div>

              {/* Contact Grid with explicit Figma box colors */}
              <div className="w-full flex flex-col items-start gap-4 max-w-[470px]">
                
                {/* Location Row */}
                <div className="flex flex-row items-center gap-4 w-full">
                  <div className="w-12 h-12 shrink-0 bg-[#208552] border border-[#43A473] rounded-xl flex items-center justify-center text-[#D0FECF]">
                    <MapPin size={20} />
                  </div>
                  <span className="text-white font-normal text-[18px] leading-[26px] max-w-[470px]">
                    No 4 Abepe Oduwaye Community, Adejedi Close, Ido-Eruwa Road. Ologuneru, Ibadan.
                  </span>
                </div>

                {/* Phone Row */}
                <div className="flex flex-row items-center gap-4 w-full">
                  <div className="w-12 h-12 shrink-0 bg-[#208552] border border-[#43A373] rounded-xl flex items-center justify-center text-[#D0FECF]">
                    <Phone size={20} />
                  </div>
                  <span className="text-white font-normal text-[18px] leading-[26px]">
                    +234 807 445 8695
                  </span>
                </div>

                {/* Email Row */}
                <div className="flex flex-row items-center gap-4 w-full">
                  <div className="w-12 h-12 shrink-0 bg-[#208552] border border-[#43A373] rounded-xl flex items-center justify-center text-[#D0FECF]">
                    <Mail size={20} />
                  </div>
                  <span className="text-white font-normal text-[18px] leading-[26px]">
                    support@chetacare.com
                  </span>
                </div>

              </div>
            </div>

            {/* Right Side Links Matrix (Locks Company, Resources, and Stay Connected into a single row) */}
            <div className="flex flex-col sm:flex-row sm:flex-nowrap gap-12 lg:gap-[42px] lg:max-w-[630px] w-full justify-between">
              
              {/* Column 1: Company Directory */}
              <div className="flex flex-col items-start gap-8 min-w-[124px]">
                <h4 className="text-white font-bold text-[20px] leading-[24px]">
                  Company
                </h4>
                <ul className="flex flex-col items-start gap-4 text-[18px] leading-[26px]">
                  <li><Link to="/about" className="hover:underline">About Us</Link></li>
                  <li><Link to="/#how-it-works" className="hover:underline">How It Works</Link></li>
                  <li><Link to="/faq" className="hover:underline">FAQ</Link></li>
                  <li><Link to="/blog" className="hover:underline">Blog</Link></li>
                  <li><Link to="/partner" className="hover:underline">Partner with Us</Link></li>
                </ul>
              </div>

              {/* Column 2: Resources Directory */}
              <div className="flex flex-col items-start gap-8 min-w-[132px]">
                <h4 className="text-white font-bold text-[20px] leading-[24px]">
                  Resources
                </h4>
                <ul className="flex flex-col items-start gap-4 text-[18px] leading-[26px]">
                  <li><Link to="/contact" className="hover:underline">Contact Us</Link></li>
                  <li><Link to="/privacy" className="hover:underline">Privacy Policy</Link></li>
                  <li><Link to="/terms" className="hover:underline">Terms of Service</Link></li>
                </ul>
              </div>

              {/* Column 3: Social Connectivity Channels Row Grid */}
              <div className="flex flex-col items-start gap-8 max-w-[320px]">
                <h4 className="text-white font-bold text-[20px] leading-[24px]">
                  Stay Connected
                </h4>
                
                <p className="text-white font-normal text-[18px] leading-[26px] w-[320px]">
                  Follow our journey on social media.
                </p>
                
                <div className="flex flex-row items-center gap-2">
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
                  <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-[#208552] border border-[#43A373] flex items-center justify-center text-[#D0FECF] hover:text-white transition-all" aria-label="YouTube">
                    <FaYoutube size={30} />
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* 3. Horizontal Line Divider & Split Compliance Metadata Area */}
          <div className="w-full flex flex-col gap-8 pt-4">
            <div className="w-full h-[1px] bg-white" />
            
            <div className="w-full flex flex-col lg:flex-row justify-between items-center gap-6 text-[16px] leading-[24px] font-normal text-white">
              
              {/* Left Side: Compliance Links Grid (Width: 335px) */}
              <div className="flex flex-row items-center gap-[32px]">
                <Link to="/terms" className="hover:underline">Terms of Service</Link>
                <Link to="/privacy" className="hover:underline">Privacy Policy</Link>
                <Link to="/#security" className="hover:underline">Security</Link>
              </div>

              {/* Center Node: Pharmacy Governance Notice (Width: 358px) */}
              <p className="text-center">
                Chetacare is a product of SCION Pharmacy Limited
              </p>

              {/* Right Side: Simple Copyright Element (Width: 268px) */}
              <p className="text-center lg:text-right">
                &copy; 2026 Chetacare. All rights reserved.
              </p>
              
            </div>
          </div>

        </div>
      </section>

    </footer>
  );
};

export default Footer;