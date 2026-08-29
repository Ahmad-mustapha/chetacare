import React from 'react';
import ReachOut from '../components/ReachOut';
import Seo from '../components/Seo';

const termsData = [
  {
    title: "1. Acceptance of Terms",
    content: "Welcome to Chetacare (“we,” “us,” or “our”). Chetacare is an AI-driven digital health platform registered under the laws of the Federal Republic of Nigeria. By accessing or using our website, WhatsApp services, Interactive Voice Response (IVR) systems, and other support channels (collectively, the \"Services\"), you agree to be bound by these Terms of Service. If you do not agree to these Terms, you must immediately discontinue using our Services."
  },
  {
    title: "2. About Chetacare",
    content: "Chetacare is a predictive chronic disease management platform designed to support individuals living with chronic conditions, such as hypertension, diabetes, and many more, through continuous remote monitoring, medication adherence support, lifestyle tracking, and clinician-guided intervention.",
    content2: <>Chetacare provides supportive and preventive care optimization; <strong>we do not operate as a physical hospital, diagnostic laboratory, or emergency medical provider.</strong></>
  },
  {
    title: "3. Eligibility",
    content: "To be eligible to create an account and utilize the services, you must:",
    list: [
      "Be at least 18 years of age, or",
      "Access the service under the explicit supervision and responsibility of a legal guardian or caregiver who agrees to these Terms.",
      "By using Chetacare, you warrant that all identification, contact, and health metrics you provide are accurate, truthful, and updated in real time."
    ]
  },
  {
    title: "4. Nature of Services",
    content2: "Chetacare provides:",
    list: [
      "Remote patient monitoring and tracking of physiological metrics (e.g., blood pressure, blood glucose, weight, height and other relevant metrics).",
      "Automated medication and clinical follow-up reminders.",
      "Health education, lifestyle coaching, and wellness guidance.",
      "AI-assisted risk identification and trend analysis.",
      "Human clinical triage and decision support managed by licensed care professionals."
    ],
    content: <><strong>Chetacare’s services are intended solely to support, complement, and optimize, not replace professional medical care, diagnoses, or prescriptions from your primary physician.</strong></>
  },
  {
    title: "5. Strictly not emergency medical services",
    content: <><strong>CHETACARE DOES NOT PROVIDE EMERGENCY MEDICAL SERVICES AND IS NOT A CRISIS INTERVENTION PLATFORM.</strong></>,
    content2: "Our AI models, WhatsApp bots, and clinical care teams do not monitor inputs in real-time for immediate life-threatening events. If you experience clinical symptoms of a medical emergency (such as severe chest pain, shortness of breath, sudden numbness, or extreme spikes/drops in vitals):",
    list: [
      "You must immediately contact your nearest physical hospital or call local emergency medical services.",
      <><strong>Do not message Chetacare or wait for an AI/clinical response during an emergency urgent health situation that requires immediate health assistance.</strong></>
    ]
  },
  {
    title: "6. Subscriptions, Fees, and Billing",
    content: "Subscription Tiers: Certain features of the Chetacare platform require a paid recurring subscription. Pricing, billing cycles, and feature access will be clearly detailed during the checkout process.",
    list: [
      "Payment Terms: All payments are processed through secure, authorized third-party payment gateways operating in Nigeria. You agree to provide valid payment credentials and authorize recurring billing if applicable.",
      "Non-Payment: Failure to successfully process payment will result in the suspension or downgrading of your access to premium health tracking, clinical oversight, or AI insights.",
      "Refund Policy: Except as expressly mandated by consumer protection regulations in Nigeria, all subscription fees are non-refundable."
    ]
  },
  {
    title: "7. User Responsibilities",
    content: "As a user of Chetacare, you agree to:",
    list: [
      "Provide completely accurate, timely health logs and clinical numbers.",
      "Continue to follow all medical advice, treatments, and prescriptions issued by your primary physical healthcare professionals.",
      "Use the platform strictly for personal, non-commercial health management.",
      "Maintain the privacy and security of your personal WhatsApp account and device access channels.",
      "Promptly notify Chetacare if you experience a major change in your underlying health status."
    ]
  },
  {
    title: "8. Communication Channels and Carrier Charges",
    content: "Chetacare delivers its multi-channel services through automated WhatsApp messaging, interactive voice response (IVR) phone systems, SMS, email, and website interactions.",
    content2: "By enrolling, you grant your explicit consent to receive health-related data transmission, clinical reports, and reminders across these channels.",
    list: [
      "You acknowledge that standard network data, telecom, or messaging rates applied by your telecommunications provider are your sole financial responsibility."
    ]
  },
  {
    title: "9. Artificial Intelligence and Human-in-the-Loop Oversight",
    content: "Chetacare utilizes proprietary and third-party machine learning models and artificial intelligence tools to assist in monitoring trends and running risk detection algorithms.",
    list: [
      "Limitations of AI: AI-generated automated insights are supplemental tools and are prone to operational limits, data delays, or formatting errors. They do not constitute independent medical diagnoses.",
      "Human-in-the-Loop: High-risk indicators triggered by our AI models are routed to our human care teams for review and clinical triage where appropriate. However, technical latency can occur, and this oversight does not replace regular independent check-ups with your doctor."
    ]
  },
  {
    title: "10. Comprehensive Medical Disclaimer",
    content: <>All information, automated feedback, articles, and recommendations provided through Chetacare are for general health support and educational purposes only. <strong>Chetacare does not practice medicine through its software, does not independently issue medical prescriptions, and does not guarantee the prevention or reversal of chronic disease complications.</strong> Healthcare management decisions remain the joint responsibility of users and their primary physical healthcare providers.</>
  },
  {
    title: "11. Privacy and Data Protection",
    content: <>Your use of our Services is strictly governed by the <strong>Chetacare Privacy Policy</strong>, which is incorporated by reference into these Terms. Our data management practices comply fully with the <strong>Nigeria Data Protection Act (NDPA) 2023.</strong></>
  },
  {
    title: "12. Intellectual Property",
    content: "All software architecture, proprietary AI models, data frameworks, algorithms, platform content, source code, branding, logos, and materials associated with Chetacare are the exclusive property of Chetacare. Users are granted a limited, non-transferable, revocable license to access the platform for personal use. You may not reverse-engineer, copy, scrape, or distribute any part of our platform without our explicit prior written consent."
  },
  {
    title: "13. Service Availability and Third-Party Dependency",
    content: "While we aim to deliver reliable health monitoring, Chetacare does not warrant that our services will be completely uninterrupted, timely, secure, or error-free.",
    content2: <>We rely heavily on third-party digital infrastructure, including the <strong>Meta/WhatsApp Business API</strong>, local cloud web hosting (e.g., AWS/Google Cloud), and national telecommunication networks. <strong>Chetacare shall not be held legally or operationally responsible for data delivery failures, message drops, or system outages caused by third-party provider limitations.</strong></>
  },
  {
    title: "14. Limitation of Liability and Indemnity",
    content: "To the maximum extent permitted by applicable Nigerian law:",
    list: [
      "Liability Cap: Chetacare, its directors, employees, clinicians, and software suppliers shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to adverse health outcomes, injuries, or personal distress resulting from a user's failure to seek physical medical attention or a user's misinterpretation of AI-generated insights.",
      "Indemnification: You agree to defend, indemnify, and hold harmless Chetacare and its affiliates from and against any claims, liabilities, damages, losses, or legal costs arising out of your violation of these Terms or your misuse of the platform."
    ]
  },
  {
    title: "15. Suspension and Termination of Use",
    content: "Chetacare reserves the absolute right to suspend or permanently terminate your account and access to our services at our sole discretion, without prior notice, if:",
    list: [
      "You violate any provision of these Terms.",
      "You provide fraudulent, inaccurate, or falsified identity or medical data.",
      "Your interaction patterns present a systemic safety or security risk to our servers, care teams, or other users.",
      "You may discontinue your subscription and request the deletion of your account profile at any time by contacting our support team."
    ]
  },
  {
    title: "16. Governing Law and Dispute Resolution",
    content: <>These Terms of Service shall be governed by, construed, and enforced in accordance with the laws of the <strong>Federal Republic of Nigeria</strong>. Any dispute, controversy, or claim arising out of or relating to these Terms shall first be attempted to be resolved amicably through good-faith mediation before escalating to courts of competent jurisdiction in Nigeria.</>
  },
  {
    title: "17. Updates to These Terms",
    content: "We reserve the right to modify or replace these Terms of Service periodically. We will notify you of material changes by updating the \"Last Updated\" date at the top of this document. Your continued use of the Chetacare platform following the posting of updated Terms constitutes your binding legal acceptance of the revisions."
  },
  {
    title: "18. Contact Information",
    content: "For any legal inquiries, data queries, or support clarifications regarding these Terms of Service, please contact us at:",
    content2: <>No 28, Ologbo Quarters, Ologuneru - Eleyele, Ibadan, Oyo State. <br /> No 4 Abepe Oduwaye Community, Adedeji close, Ido-Eruwa road, Ologuneru, Ibadan.</>,
    list: [
      <><strong>Email:</strong> Support@chetacare.com</>,
      <><strong>Official Website:</strong> www.chetacare.com</>
    ]
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