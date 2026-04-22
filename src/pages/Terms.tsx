import React from 'react';
import ReachOut from '../components/ReachOut';
import Seo from '../components/Seo';

const termsData = [
  {
    title: "1. Introduction",
    content: "Welcome to Chetacare. By accessing or using Chetacare services, you agree to be bound by these Terms of Service."
  },
  {
    title: "2. About Chetacare",
    content: "Chetacare is a predictive chronic disease management platform designed to support individuals living with chronic conditions such as hypertension and diabetes through remote monitoring, educational support and engagement channels.",
    content2: "Chetacare provides health support services but does not operate as a hospital or emergency medical provider."
  },
  {
    title: "3. Eligibility",
    content: "You must:",
    list: [
      "Be at least 18 years old, or",
      "Use the service under the supervision of a legal guardian or caregiver.",
      "By using Chetacare, you confirm that the information you provide is accurate and truthful."
    ]
  },
  {
    title: "4. Nature of Services",
    content: "Chetacare provides:",
    list: [
      "Remote patient monitoring",
      "Medication reminders",
      "Health education and lifestyle guidance",
      "Structured health data collection",
      "Access to health logs and support",
      "Our services are intended to support, not replace, professional medical advice."
    ]
  },
  {
    title: "5. Not Emergency Medical Services",
    content: "Chetacare does not provide emergency medical services.",
    content2: "If you experience a medical emergency, you must immediately contact:",
    list: [
      "Your nearest hospital or,",
      "Local emergency services.",
      "No activity on Chetacare is urgent for life-threatening situations."
    ]
  },
  {
    title: "6. User Responsibilities",
    content: "Users agree to:",
    list: [
      "Provide accurate health information",
      "Follow medical instruction from verified doctors",
      "Use the data responsibly",
      "Maintain confidentiality of personal access channels",
      "Notify Chetacare of significant health changes when possible"
    ]
  },
  {
    title: "7. Communication Channels",
    content: "Chetacare delivers services through:",
    list: [
      "WhatsApp messaging",
      "IVR phone systems",
      "Email",
      "Website interface.",
      "If you opt-in to receiving health tips, communications, reminders, and updates, standard data charges from your provider may apply."
    ]
  },
  {
    title: "8. Artificial Intelligence and Human Oversight",
    content: "Chetacare uses artificial intelligence to help assess risk and identify trends. AI-generated insights are reviewed by appropriate health support professionals. All medical decisions remain a progression of clinical judgement."
  },
  {
    title: "9. Medical Disclaimer",
    content: "Information provided on Chetacare is for health awareness and educational purposes only.",
    content2: "Chetacare:",
    list: [
      "Does not replace professional medical diagnosis",
      "Does not replace prescriptions",
      "Does not guarantee prevention of disease complications.",
      "Healthcare decisions remain the responsibility of users and their healthcare providers."
    ]
  },
  {
    title: "10. Privacy and Data Protection",
    content: "Use of Chetacare services is also governed by our Privacy Policy, which details how personal and health information is collected, used, and protected."
  },
  {
    title: "11. Intellectual Property",
    content: "All content, including images, branding, and materials associated with Chetacare, are the property of Chetacare Limited and may not be copied, reproduced, or used without permission."
  },
  {
    title: "12. Service Availability",
    content: "We strive to provide consistent service but do not guarantee uninterrupted or error-free access. Services may be modified or suspended periodically to improve platform features and safety."
  },
  {
    title: "13. Third-Party Services",
    content: "Chetacare may use third-party platforms, including messaging services like WhatsApp for information outreach and data collection.",
    content2: "We are not responsible for outages on platforms owned by third-party providers."
  },
  {
    title: "14. Limitation of Liability",
    content: "To the extent permitted by law, Chetacare shall not be liable for:",
    list: [
      "Indirect or consequential damages",
      "Health outcomes resulting from failure to follow medical advice",
      "Service interruptions beyond our control.",
      "Our services are provided on a best-effort basis to support patient care."
    ]
  },
  {
    title: "15. Termination of Use",
    content: "Chetacare may suspend or terminate access if:",
    list: [
      "Terms are violated",
      "Service is misused",
      "False information is provided",
      "Continued use presents a safety risk",
      "Business operations require suspension"
    ]
  },
  {
    title: "16. Updates to Terms",
    content: "We may update these Terms of Service periodically. Continued use of Chetacare after updates constitutes acceptance of new terms."
  },
  {
    title: "17. Governing Law",
    content: "These Terms shall be governed by the applicable laws of the Federal Republic of Nigeria."
  },
  {
    title: "18. Contact Information",
    content: "For questions regarding these Terms:",
    content2: "Email: Support@chetacare.com | Website: www.chetacare.com"
  }
];

const Terms: React.FC = () => {
  return (
    <div className="bg-white">
      <Seo
        title="Chetacare | Terms of Service"
        description="Review the terms that govern use of the Chetacare platform and chronic disease care support services."
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
                Terms of service
              </h1>
              <p className="text-[#475467] text-lg lg:text-xl max-w-2xl leading-relaxed mb-20">
                This is a legal agreement between you and Chetacare Limited that governs 
                your use of the Chetacare platform and the services we provide across Nigeria.
              </p>
            </div>
            
            <div className="w-full md:w-2/5 flex justify-center md:justify-end self-end">
              <img src="/assets/policyhero.png" alt="Terms of Service Illustration" className="w-full max-w-[400px] object-contain block align-bottom" />
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24">
        <div className="container-wide max-w-4xl mx-auto">
          <div className="space-y-16">
            {termsData.map((item, index) => (
              <div key={index} className="space-y-6">
                <h2 className="text-2xl md:text-3xl font-bold text-[#101828]">
                  {item.title}
                </h2>
                <div className="space-y-4">
                  <p className="text-[#475467] text-base md:text-lg leading-relaxed">
                    {item.content}
                  </p>
                  {item.content2 && (
                    <p className="text-[#475467] text-base md:text-lg leading-relaxed">
                      {item.content2}
                    </p>
                  )}
                  {item.list && (
                    <ul className="space-y-3 pl-5 md:pl-0">
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

export default Terms;
