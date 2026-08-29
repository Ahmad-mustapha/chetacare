import React from 'react';
import ReachOut from '../components/ReachOut';
import Seo from '../components/Seo';

const LAST_UPDATED = "April 27, 2026";

const privacyData = [
  {
    title: "1. About Chetacare",
    content: "Chetacare is a predictive chronic disease management platform designed to support individuals living with chronic conditions such as hypertension and diabetes through remote monitoring, educational support, and multi-channel engagement."
  },
  {
    title: "2. Legal Basis for Processing Data",
    content: <>In accordance with Section 25 of the NDPA 2023, we only process your data under valid legal grounds. Because Chetacare processes clinical readings and health histories, your information is classified as <strong>Sensitive Personal Data</strong>. We rely on:</>,
    list: [
      <><strong>Explicit Consent:</strong> You must actively opt-in before we track your vitals via our platforms.</>,
      <><strong>Performance of a Contract:</strong> To deliver the continuous care, monitoring, and automated AI health insights you request.</>,
      <><strong>Legitimate Interests:</strong> To improve our predictive AI algorithms and platform safety, without overriding your fundamental privacy rights.</>
    ]
  },
  {
    title: "3. Information We Collect",
    content: "We collect information across three categories:",
    subsections: [
      {
        subtitle: "A. Personal Information",
        list: [
          "Name, email address, age, gender, and geographic location."
        ]
      },
      {
        subtitle: "B. Sensitive Health Information",
        list: [
          "Clinical readings (blood pressure, blood glucose, weight), medication adherence logs, reported symptoms, general health concerns, and lifestyle or wellness data.",
          "Chat transcripts, inputs, and feedback summaries submitted to our conversational tools."
        ]
      },
      {
        subtitle: "C. Technical Information",
        list: [
          "Device information, browser type, IP address, website analytics, and interaction metadata through WhatsApp or our website."
        ]
      }
    ]
  },
  {
    title: "4. How We Collect Information",
    content: "Information is collected directly from you or authorized partners when you:",
    list: [
      "Register on the Chetacare platform or website.",
      "Communicate through our WhatsApp chatbot or participate in automated IVR calls.",
      "Interact with our care teams or clinicians during virtual updates.",
      "Fill out physical or digital health assessment cards and participate in health screenings.",
      "Provide information through partner healthcare institutions, corporate employers, or insurance providers."
    ]
  },
  {
    title: "5. Cookies and Website Analytics",
    content: "Our website uses cookies and web beacons to optimize platform performance and measure the impact of health awareness campaigns.",
    list: [
      <>We use <strong>Strictly Necessary Cookies</strong> for site security and <strong>Analytical Cookies</strong> (such as Google Analytics) to study traffic patterns.</>,
      <><strong>Segregation of Data:</strong> We do not merge your website analytics or cookie tracking profiles with your sensitive personal health data or WhatsApp medical logs. Your clinical file remains completely segregated.</>,
      "You can manage your preferences or decline non-essential cookies via our website's cookie consent banner."
    ]
  },
  {
    title: "6. How We Use Your Information",
    content: "We use the collected information strictly to:",
    list: [
      "Provide personalized health awareness support and continuous remote vitals monitoring.",
      "Send automated medication reminders and maintain clinical follow-up frequency.",
      "Determine health risks through predictive analysis to catch complications early.",
      "Improve our software performance, predictive AI models, and healthcare delivery pipelines.",
      "Communicate critical platform changes, security alerts, and system updates."
    ]
  },
  {
    title: "7. Human-in-the-Loop Clinical Oversight",
    content: "Chetacare maintains a hybrid, controlled technology approach. While our algorithms process day-to-day data, certified healthcare professionals review your metrics whenever alerts are triggered by high-risk chronic condition trends (e.g., critical blood pressure spikes)."
  },
  {
    title: "8. Data Sharing and Third-Party Platforms",
    content: "We do not sell personal health information. We share data only with authorized parties under strict Data Processing Agreements (DPAs) or direct mandates:",
    list: [
      <><strong>Care Coordination:</strong> Sharing reports with your designated healthcare professionals or hospitals.</>,
      <><strong>Healthcare Operations:</strong> Coordinating with your specific insurance providers for coverage verification.</>,
      <><strong>Third-Party Messaging Channels:</strong> Using secure enterprise communication systems like the WhatsApp/Meta Business API and IVR infrastructure providers. These third-party channels maintain their own operational privacy standards.</>,
      <><strong>Research:</strong> Utilizing completely anonymized, aggregated datasets to improve machine learning models or publish public health insights.</>,
      <><strong>Corporate Actions:</strong> During business restructuring, mergers, or corporate transactions.</>,
      <><strong>Legal Obligations:</strong> To comply with valid legal requests under Nigerian law.</>
    ]
  },
  {
    title: "9. International Data Processing",
    content: "While Chetacare primarily operates in Nigeria, your data may be processed using secure cloud infrastructure (such as AWS or Google Cloud) located outside Nigeria. In compliance with Section 41 of the NDPA 2023, cross-border transfers occur only to jurisdictions providing adequate levels of protection, utilizing robust contractual safeguards like Standard Contractual Clauses."
  },
  {
    title: "10. Data Security",
    content: "We implement industry-standard technical and organizational security controls:",
    list: [
      "Data encryption protocols for information in transit and at rest.",
      "Secure health cloud databases protected by strict role-based access control.",
      "Periodic security reviews of our third-party infrastructure and communication APIs.",
      "Continuous data privacy training for all care teams, clinical staff, and technical support staff."
    ]
  },
  {
    title: "11. Data Retention",
    content: "We retain personal and health information only for as long as necessary to fulfill the purposes outlined in this policy, deliver continuous care services, meet clinical guidelines, or satisfy legal and statutory health record-keeping obligations in Nigeria."
  },
  {
    title: "12. Your Privacy Rights Under the NDPA 2023",
    content: "As a user in Nigeria, you hold absolute statutory rights over your personal data. You can contact our team at any time to exercise your right to:",
    list: [
      <><strong>Access & Portability:</strong> Request a copy of all information we hold or transfer it to another health provider.</>,
      <><strong>Correction:</strong> Request immediate text correction or updating of inaccurate vital logs.</>,
      <><strong>Withdraw Consent:</strong> Revoke your consent to receive WhatsApp tracking or IVR calls at any time.</>,
      <><strong>Erasure:</strong> Request deletion of your information, subject to overriding statutory clinical and legal retention requirements.</>,
      <><strong>Lodge a Complaint:</strong> Report grievances directly to the national data protection authority.</>
    ]
  },
  {
    title: "13. Data Breach Notification Protocol",
    content: <>In the unlikely event of a security breach that risks your personal data, Chetacare will strictly adhere to national regulations. We will notify the <strong>Nigeria Data Protection Commission (NDPC)</strong> and affected users within <strong>72 hours</strong> of breach confirmation, outlining immediate mitigation steps.</>
  },
  {
    title: "14. Children’s Privacy",
    content: "Chetacare services are primarily intended for adults. In situations requiring support for minors, we strictly require explicit consent and information to be provided directly by a parent or legal guardian."
  },
  {
    title: "15. Changes to This Privacy Policy",
    content: "We may update our Privacy Policy periodically to match shifting technical workflows or regulatory requirements. We will notify you of changes by posting the updated terms on this page with a revised \"Last Updated\" date. Changes become effective immediately upon posting."
  },
  {
    title: "16. Contact Us",
    content: "If you have questions about this Privacy Policy, please contact our team:",
    content2: <><strong>Email:</strong> Support@chetacare.com <br /><strong>Website:</strong> www.chetacare.com</>
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
              <h1 className="text-[40px] md:text-[56px] font-bold text-[#101828] leading-[1.1] mb-4">
                Privacy Policy
              </h1>
              <p className="text-[#667085] text-base md:text-lg font-medium mb-6">
                <strong>Last Updated:</strong> {LAST_UPDATED}
              </p>
              <p className="text-[#475467] text-lg lg:text-xl max-w-2xl leading-relaxed mb-20">
                At Chetacare, we are committed to protecting the privacy and security of individuals who use our platform. Chetacare (“we,” “us,” or “our”) operates under the <strong>Nigeria Data Protection Act (NDPA)</strong>. This Privacy Policy explains how we collect, use, disclose, and safeguard personal and health information when you access our services through our website, WhatsApp services, Interactive Voice Response (IVR) systems, and other support channels. <br />
                By using Chetacare services, you agree to the collection and use of information in accordance with this policy and the legal frameworks of the Federal Republic of Nigeria.
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
                                <span>{li}</span>
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
                          <span>{li}</span>
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