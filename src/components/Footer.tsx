import { Link } from 'react-router-dom';
import { Mail, Phone, ArrowRight, Heart, MapPin } from 'lucide-react';
import { FaXTwitter, FaLinkedinIn, FaInstagram, FaRegEnvelope } from 'react-icons/fa6';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#101828] text-white pt-24 pb-12 overflow-hidden relative">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#1A7A4A] opacity-[0.03] rounded-full -mr-64 -mt-64 blur-3xl" />

      <div className="container-wide relative z-10">
        <div className="flex flex-col lg:flex-row flex-wrap justify-between gap-12 lg:gap-8 mb-20">
          {/* Brand & Mission */}
          <div className="w-full lg:w-[350px] pr-0 lg:pr-12">
            <Link to="/" className="block w-[155px] mb-8">
              <img src="/assets/chetacare.png" alt="logo" className='w-full h-full object-contain' />
            </Link>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed max-w-sm">
              Healthcare that stays with you before, during, and after treatment. Built in Nigeria, for Africa.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3 text-gray-400 hover:text-white transition-colors group">
                <div className="p-2 bg-white/5 rounded-lg flex-shrink-0">
                  <MapPin size={18} />
                </div>
                <div className="font-medium leading-relaxed">
                  <p className="mb-2">No 28, Ologbo Quarters, Ologuneru - Eleyele, Ibadan, Oyo State.</p>
                  <p>No 4 Abepe Oduwaye Community, Adedeji close, Ido-Eruwa road, Ologuneru, Ibadan.</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group">
                <div className="p-2 bg-white/5 rounded-lg">
                  <Phone size={18} />
                </div>
                <span className="font-medium">+234 807 445 8695</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group">
                <div className="p-2 bg-white/5 rounded-lg">
                  <Mail size={18} />
                </div>
                <span className="font-medium">Support@chetacare.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="min-w-[150px]">
            <h4 className="text-white font-bold mb-8 text-lg">Company</h4>
            <ul className="space-y-4">
              {['About Us', 'How It Works', 'FAQ', 'Blog'].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase().replace(/\s+/g, '')}`}
                    className="text-gray-400 hover:text-white hover:translate-x-1 transition-all flex items-center gap-2 group"
                  >
                    <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 -ml-5 transition-all" />
                    {item}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/partner"
                  className="text-gray-400 hover:text-green-400 hover:translate-x-1 transition-all flex items-center gap-2 group"
                >
                  <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 -ml-5 transition-all" />
                  Partner With Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services/Support (Optional expansion) */}
          <div className="min-w-[150px]">
            <h4 className="text-white font-bold mb-8 text-lg">Resources</h4>
            <ul className="space-y-4">
              {[
                { label: 'Contact Us', path: '/contact' },
                { label: 'Privacy Policy', path: '/privacy' },
                { label: 'Terms of Service', path: '/terms' },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.path}
                    className="text-gray-400 hover:text-white hover:translate-x-1 transition-all group flex items-center gap-2"
                  >
                    <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 -ml-5 transition-all" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter / Social */}
          <div className="w-full lg:w-[300px]">
            <h4 className="text-white font-bold mb-8 text-lg">Stay Connected</h4>
            <p className="text-gray-400 mb-6 font-medium">Follow our journey on social media.</p>
            <div className="flex gap-4 mb-8">
              {[
                { icon: <FaXTwitter size={20} />, href: 'https://x.com/chetacare', label: 'Twitter' },
                { icon: <FaLinkedinIn size={20} />, href: 'https://www.linkedin.com/company/chetacare', label: 'LinkedIn' },
                { icon: <FaInstagram size={20} />, href: 'https://www.instagram.com/chetacare_', label: 'Instagram' },
                { icon: <FaRegEnvelope size={20} />, href: 'mailto:Support@chetacare.com', label: 'Email' },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:scale-110 transition-all border border-white/5"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <p className="text-sm text-gray-500 font-medium">
              © {currentYear} Chetacare. All rights reserved.
            </p>
            <p className="text-sm text-gray-400 max-w-xl">
              Chetacare is proudly brought to life as a product of <span className="text-white font-semibold">SCION Pharmacy</span>, combining trusted pharmacy expertise with digital care.
            </p>
          </div>
          <div className="flex items-center gap-6 text-sm text-gray-500">
            <span className='flex items-center gap-1'>Made with <Heart className="text-gray-500" size={16} /> for Africa</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

