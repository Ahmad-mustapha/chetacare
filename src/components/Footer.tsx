import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1A7A4A] text-white pt-20 pb-10">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          {/* Brand Column */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2 mb-6">
              <span className="text-2xl font-bold tracking-tight">Chetacare</span>
            </div>
            <p className="text-white/80 text-lg max-w-sm mb-6 leading-relaxed">
              Healthcare that stays with you before, during, and after treatment.
            </p>
            <p className="text-white font-medium italic">
              Built in Nigeria, for Africa.
            </p>
          </div>

          {/* Spacer */}
          <div className="hidden lg:block lg:col-span-1" />

          {/* Links Column - Company */}
          <div className="lg:col-span-3">
            <h4 className="text-white/60 font-medium mb-6 uppercase tracking-wider text-sm">Company</h4>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-white hover:text-white/70 transition-colors">About Us</Link></li>
              <li><Link to="#" className="text-white hover:text-white/70 transition-colors">How It Works</Link></li>
              <li><Link to="/faq" className="text-white hover:text-white/70 transition-colors">FAQ</Link></li>
              <li><Link to="/blog" className="text-white hover:text-white/70 transition-colors">Blog</Link></li>
              <li><Link to="#" className="text-white hover:text-white/70 transition-colors">Partner With Us</Link></li>
            </ul>
          </div>

          {/* Links Column - Social Media */}
          <div className="lg:col-span-3">
            <h4 className="text-white/60 font-medium mb-6 uppercase tracking-wider text-sm">Social Media</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-white hover:text-white/70 transition-colors">Twitter / X</a></li>
              <li><a href="#" className="text-white hover:text-white/70 transition-colors">LinkedIn</a></li>
              <li><a href="#" className="text-white hover:text-white/70 transition-colors">Instagram</a></li>
              <li><a href="#" className="text-white hover:text-white/70 transition-colors">Facebook</a></li>
              <li><a href="#" className="text-white hover:text-white/70 transition-colors">YouTube</a></li>
              <li><a href="mailto:hello@chetarcare.com" className="text-white hover:text-white/70 transition-colors">Email</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-8 text-sm text-white/80">
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <a href="#" className="hover:text-white transition-colors">Security</a>
          </div>
          
          <p className="text-sm text-white/80">
            © {new Date().getFullYear()} Chetacare. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
