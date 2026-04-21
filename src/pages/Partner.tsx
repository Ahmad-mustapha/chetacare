import React from 'react';
import { Handshake, Mail, ArrowRight, CheckCircle2, Globe, Users, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const Partner: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden bg-gradient-to-b from-[#f0f9f4] to-white">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#1A7A4A]/5 rounded-bl-[100px] -z-10" />
        <div className="container-wide">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1A7A4A]/10 text-[#1A7A4A] text-sm font-semibold mb-6">
              <Handshake size={16} />
              <span>Partnership Opportunities</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-[#101828] mb-6 leading-[1.1]">
              Let's build the future of <span className="text-[#1A7A4A]">African Healthcare</span> together.
            </h1>
            <p className="text-xl text-[#475467] mb-10 leading-relaxed max-w-2xl">
              We're on a mission to make healthcare accessible, affordable, and personalized across Africa. Join our network of healthcare providers, technology partners, and innovators.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="mailto:Partnership@chetacare.com"
                className="bg-[#1A7A4A] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-800 transition-all shadow-lg flex items-center justify-center gap-2"
              >
                Become a Partner <ArrowRight size={20} />
              </a>
              <Link
                to="/about"
                className="bg-white text-[#101828] border border-gray-200 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-50 transition-all flex items-center justify-center"
              >
                Learn About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Partner Section */}
      <section className="py-24 bg-white">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#101828] mb-4">Why Partner With Chetacare?</h2>
            <p className="text-lg text-[#475467]">
              We offer a robust platform and a growing community that brings value to every partner in our ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Globe className="text-[#1A7A4A]" size={32} />,
                title: "Scalable Reach",
                desc: "Access a diverse and rapidly growing market of patients and providers across Nigeria and beyond."
              },
              {
                icon: <Users className="text-[#1A7A4A]" size={32} />,
                title: "Community Driven",
                desc: "Join a network of top-tier medical professionals and health innovators dedicated to excellence."
              },
              {
                icon: <Shield className="text-[#1A7A4A]" size={32} />,
                title: "Secure Infrastructure",
                desc: "Leverage our secure, HIPAA-compliant technology stack for seamless healthcare delivery."
              }
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-lg border border-gray-100 bg-gray-50/50 transition-all group">
                <div className="mb-6 p-4 bg-white rounded-xl shadow-sm w-fit">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-[#101828] mb-3">{item.title}</h3>
                <p className="text-[#475467] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-[#f9fafb]">
        <div className="container-wide">
          <div className="bg-white rounded-[20px] p-8 md:p-16 shadow-sm border border-gray-100 flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-[#101828] mb-6">Ready to start a conversation?</h2>
              <p className="text-lg text-[#475467] mb-8 leading-relaxed">
                Whether you're a hospital group, an insurance provider, or a health-tech startup, we'd love to hear from you. Our partnership team will get back to you within 24 hours.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#1A7A4A]/10 rounded-lg text-[#1A7A4A]">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#101828] mb-1">Email our Partnership Team</h4>
                    <p className="text-[#475467] text-lg font-medium">Partnership@chetacare.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#1A7A4A]/10 rounded-lg text-[#1A7A4A]">
                    <CheckCircle2 size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#101828] mb-1">Verified Network</h4>
                    <p className="text-[#475467]">Be part of a trusted healthcare ecosystem.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex-1 w-full max-w-md">
              <div className="bg-[#1A7A4A] rounded-2xl p-8 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-3xl" />
                <Handshake size={48} className="mb-6 opacity-20" />
                <h3 className="text-2xl font-bold mb-4">Partner Program</h3>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-white rounded-full" />
                    <span>Resource Sharing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-white rounded-full" />
                    <span>Joint Marketing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-white rounded-full" />
                    <span>API Integration Support</span>
                  </li>
                </ul>
                <a
                  href="mailto:Partnership@chetacare.com"
                  className="block w-full text-center bg-white text-[#1A7A4A] py-3 rounded-xl font-bold hover:bg-gray-100 transition-colors"
                >
                  Contact Us Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partner;
