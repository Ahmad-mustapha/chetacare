import React, { useState } from 'react';

interface FaqItem {
  question: string;
  answer: string;
}

const faqData: FaqItem[] = [
  {
    question: "What is Chetacare?",
    answer: "Chetacare is a predictive chronic disease management platform that helps people living with hypertension and diabetes stay healthy through continuous monitoring, medication reminders, and early clinical support delivered via WhatsApp and phone calls."
  },
  {
    question: "Who is Chetacare designed for?",
    answer: "Chetacare is designed for individuals living with chronic conditions like hypertension and diabetes, as well as their family members who want to ensure their loved ones receive the best possible care and support."
  },
  {
    question: "How does Chetacare work?",
    answer: "Our platform connects you with dedicated care managers who monitor your health data in real-time. We provide personalized insights, medication alerts, and direct access to clinical support when needed, all through familiar tools like WhatsApp."
  },
  {
    question: "Do I need to download an app?",
    answer: "No, you don't need to download any new apps. Chetacare works seamlessly through WhatsApp and regular phone calls, making it accessible and easy to use for everyone."
  },
  {
    question: "Which conditions do you currently manage?",
    answer: "We currently focus on hypertension and diabetes management, providing specialized care and monitoring for these chronic conditions."
  },
  {
    question: "Is Chetacare a hospital or a replacement for my doctor?",
    answer: "Chetacare is not a hospital and does not replace your primary care physician. We complement your existing medical care by providing continuous monitoring and support between doctor visits."
  },
  {
    question: "What happens if my health readings become abnormal?",
    answer: "If your readings show concerning trends or abnormal values, our care team is immediately alerted. We will reach out to you and your designated emergency contacts to provide guidance and coordinate necessary clinical support."
  },
  {
    question: "Is Chetacare powered only by AI?",
    answer: "While we use advanced data analytics and AI to identify trends, our care is primarily human-led. Real medical professionals and care managers interpret the data and provide personalized support."
  },
  {
    question: "Is my health information safe?",
    answer: "Yes, your privacy and security are our top priorities. We use industry-standard encryption and follow strict data protection protocols to ensure your health information remains confidential."
  },
  {
    question: "Can family members enroll or support a patient?",
    answer: "Absolutely! Family members can enroll their loved ones and stay informed about their health progress, ensuring a collaborative approach to chronic disease management."
  },
  {
    question: "How can I join Chetacare?",
    answer: "You can join by clicking the 'Get Started' button on our website or contacting us through the provided phone numbers or email addresses."
  },
  {
    question: "How can organizations or partners work with Chetacare?",
    answer: "We partner with corporate organizations, insurance providers, and healthcare facilities to improve patient outcomes. You can learn more and reach out to our team on our dedicated Partner With Us page."
  }
];

const FaqAccordion: React.FC = () => {
  // Defaulting to 0 keeps the first item active upon mounting, as shown in the Figma blueprint
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-[1030px] mx-auto space-y-4 px-4 sm:px-0">
      {faqData.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div 
            key={index} 
            className="w-full bg-[#F9FAFB] border border-[#E5E7EB] rounded-lg shadow-[0px_4px_25px_-1px_rgba(12,12,13,0.05)] transition-all duration-300 overflow-hidden"
          >
            <div className="p-6 md:p-8">
              <button
                className="w-full flex items-center justify-between text-left focus:outline-none cursor-pointer"
                onClick={() => toggleAccordion(index)}
                aria-expanded={isOpen}
              >
                <span className="text-lg md:text-[24px] font-medium leading-snug md:leading-[32px] text-[#1F2A24] pr-4">
                  {item.question}
                </span>
                <span className="flex-shrink-0 text-[#1F2A24]">
                  {isOpen ? (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  ) : (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                </span>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  isOpen ? 'max-h-[500px] opacity-100 mt-4' : 'max-h-0 opacity-0 mt-0'
                }`}
              >
                <div className="text-[#1F2A24] text-base md:text-[16px] font-normal leading-[24px] max-w-[812px]">
                  {item.answer}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FaqAccordion;