import React from 'react';
import ReachOut from '../components/ReachOut';
import Seo from '../components/Seo';

const privacyData = [
  {
    title: "1. Introduction",
    content: "Chetacare (“we,” “us,” or “our”) is committed to protecting the privacy and security of individuals who use our platform. This Privacy Policy explains how we collect, use, and safeguard personal and health information when you access our services through our website, WhatsApp services, IVR systems, and other support channels.",
    content2: "By using Chetacare services, you agree to the practices described in this policy."
  },
  {
    title: "2. About Chetacare",
    content: "Chetacare is a predictive chronic disease management platform designed to support individuals living with chronic conditions such as hypertension and diabetes through remote monitoring, educational support and engagement channels."
  },
  {
    title: "3. Information We Collect",
    subsections: [
      {
        subtitle: "A. Personal Information – We may collect:",
        list: [
          "Name",
          "Phone number",
          "Email address",
          "Age and other demographic information",
          "Location information (when provided)"
        ]
      },
      {
        subtitle: "B. Health Information – To provide health awareness support, we may collect:",
        list: [
          "Blood pressure readings",
          "Blood glucose readings",
          "Medication adherence",
          "General health concerns",
          "Lifestyle and wellness data"
        ]
      },
      {
        subtitle: "C. Technical Information – When using our services:",
        list: [
          "Device information",
          "Interactions data through WhatsApp or website",
          "IP address and analytics"
        ]
      }
    ]
  },
  {
    title: "4. How We Collect Information",
    content: "Information may be collected when you:",
    list: [
      "Register on Chetacare",
      "Communicate through WhatsApp chatbot",
      "Participate in IVR calls",
      "Interact with clinicians or care teams",
      "Fill out health assessment cards",
      "Participate in health screenings or health awareness programs",
      "Provide information through partner healthcare institutions"
    ]
  },
  {
    title: "5. How We Use Your Information",
    content: "We use results to:",
    list: [
      "Provide personalized health awareness support",
      "Send medication reminders",
      "Meet clinical follow-up frequency",
      "Determine risk through predictive analysis",
      "Improve healthcare services and platform performance",
      "Communicate important service updates"
    ]
  },
  {
    title: "6. Human-in-the-Loop Clinical Oversight",
    content: "Chetacare maintains a controlled technology approach where healthcare professionals review data when alerts are triggered by chronic condition risks (e.g., extremely high blood pressure)."
  },
  {
    title: "7. Data Sharing",
    content: "We do not sell personal health information. We may share data with authorized partners only:",
    list: [
      "To coordinate care with healthcare professionals",
      "To perform healthcare operations with insurance providers",
      "For research purposes (where data is anonymized)",
      "During business restructuring or corporate transactions",
      "To comply with legal requirements and valid legal requests"
    ]
  },
  {
    title: "8. Data Security",
    content: "We take security seriously. We use:",
    list: [
      "Encryption software when data is in transit",
      "Secure health cloud databases with restricted access",
      "Professional healthcare platform security standards",
      "Regular security reviews of third-party platforms",
      "Training for care teams on privacy and data protection",
      "Strict access control for clinical and support staff"
    ]
  },
  {
    title: "9. Data Retention",
    content: "We retain personal and health information only for as long as necessary:",
    list: [
      "To provide services",
      "For healthcare and legal obligations",
      "To maintain historical data for health performance"
    ]
  },
  {
    title: "10. Your Privacy Right",
    content: "Depending on applicable laws, you may have the right to:",
    list: [
      "Access your information",
      "Request text correction",
      "Withdraw consent",
      "Fill a complaint with relevant authorities",
      "Request deletion of information (subject to legal and clinical requirement)",
      "Request transfer of information to another health provider"
    ]
  },
  {
    title: "11. Use of WhatsApp and IVR Channels",
    content: "Chetacare uses third-party communication platforms such as WhatsApp and IVR providers for information outreach and data collection.",
    content2: "While we encrypt data in transit, these platforms operate under their own privacy policies and security standards."
  },
  {
    title: "12. Cookies and Website Analytics",
    content: "Our website may use cookies to improve your user experience:",
    list: [
      "Understand website usage",
      "Personalize content",
      "Optimize platform performance",
      "Measure the impact of health awareness campaigns"
    ]
  },
  {
    title: "13. Children’s Privacy",
    content: "Chetacare services are primary intended for adults. In situations requiring attendance to minors, we require explicit consent or information to be provided through a parent or legal guardian."
  },
  {
    title: "14. International Data Processing",
    content: "Since Chetacare operates globally, data may be processed using secure cloud infrastructure that may be located outside Nigeria while maintaining applicable data protection standards."
  },
  {
    title: "15. Changes to This Privacy Policy",
    content: "We may update our Privacy Policy periodically. We will notify you of any changes by posting updated terms on this page. Updated terms will be posted in this page with the related date and remain effective immediately upon posting."
  },
  {
    title: "16. Contact Us",
    content: "If you have questions about this Privacy Policy or how your data is handled, please contact Chetacare.",
    content2: "Email: Support@chetacare.com"
  }
];

const Privacy: React.FC = () => {
  return (
    <div className="bg-white">
      <Seo
        title="Chetacare | Privacy Policy"
        description="Read the Chetacare privacy policy for details on how personal, health, and website information is handled."
      />
      {/* Hero Section */}
      <section className="bg-[#F9FEFB] pt-20 pb-0 overflow-hidden">
        <div className="container-wide">
          <div className="flex flex-col md:flex-row items-center md:items-end justify-between gap-12">
            <div className="w-full md:w-3/5">
              <div className="inline-block px-4 py-1.5 border border-[#D1FADF] bg-[#ECFDF3] rounded-md mb-6">
                <span className="text-[#039855] font-medium text-sm">Legal</span>
              </div>
              <h1 className="text-[40px] md:text-[56px] font-bold text-[#101828] leading-[1.1] mb-6">
                Privacy Policy
              </h1>
              <p className="text-[#475467] text-lg lg:text-xl max-w-2xl leading-relaxed mb-20">
                At Chetacare, we are committed to protecting the privacy and security
                of individuals who use our platform.
              </p>
            </div>

            <div className="w-full md:w-2/5 flex justify-center md:justify-end self-end">
              <img src="/assets/policyhero.png" alt="Privacy Policy Illustration" className="w-full max-w-[400px] object-contain block align-bottom" />
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24">
        <div className="container-wide max-w-4xl mx-auto">
          <div className="space-y-16">
            {privacyData.map((item, index) => (
              <div key={index} className="space-y-6">
                <h2 className="text-2xl md:text-3xl font-bold text-[#101828]">
                  {item.title}
                </h2>
                <div className="space-y-6">
                  {item.content && (
                    <p className="text-[#475467] text-base md:text-lg leading-relaxed">
                      {item.content}
                    </p>
                  )}
                  {item.content2 && (
                    <p className="text-[#475467] text-base md:text-lg leading-relaxed">
                      {item.content2}
                    </p>
                  )}

                  {item.subsections && (
                    <div className="space-y-8">
                      {item.subsections.map((sub, si) => (
                        <div key={si} className="space-y-4">
                          <h3 className="text-lg md:text-xl font-bold text-[#101828]">
                            {sub.subtitle}
                          </h3>
                          <ul className="space-y-3">
                            {sub.list.map((li, i) => (
                              <li key={i} className="flex items-start gap-3 text-[#475467] text-base md:text-lg leading-relaxed">
                                <span className="mt-2.5 w-1.5 h-1.5 bg-[#475467] rounded-full flex-shrink-0" />
                                {li}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}

                  {item.list && (
                    <ul className="space-y-3">
                      {item.list.map((li, i) => (
                        <li key={i} className="flex items-start gap-3 text-[#475467] text-base md:text-lg leading-relaxed">
                          <span className="mt-2.5 w-1.5 h-1.5 bg-[#475467] rounded-full flex-shrink-0" />
                          {li}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ReachOut />
    </div>
  );
};

export default Privacy;
