import { Link } from 'react-router-dom';

// 1. Fixed the Vite Asset Dilemma by importing the image directly as a module
const hero1 = 'assets/hero1.png';

export default function AboutHero() {
  return (
    <section className="py-16 lg:py-24 overflow-hidden bg-[#F7FBF9]">
      {/* Container upgraded to align with global max-width and margins */}
      <div className="container-wide w-full max-w-figma px-4 lg:px-100 mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
        
        {/* Left Column Content */}
        <div className="w-full lg:w-[58%] flex flex-col items-center lg:items-start">
          
          {/* Header Section - Matches the design structure of BlogSection and Testimonials */}
          <div className="flex flex-col items-center lg:items-start gap-4 lg:gap-6 w-full text-center lg:text-left mb-6">
            <p className="text-brand-primary font-bold text-lg uppercase tracking-wider">
              Our Origin
            </p>
            <h1 className="text-brand-dark font-medium text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.1] tracking-tight max-w-xl">
              A Story That Drives Us
            </h1>
          </div>

          {/* Description paragraphs stripped of arbitrary fractional adjustments */}
          <div className="text-gray-700 text-sm md:text-base lg:text-lg leading-relaxed space-y-4 text-center lg:text-left mb-8 max-w-2xl">
            <p>
              Every day in Africa, millions of people live with chronic diseases like hypertension and diabetes. Many take medications, visit hospitals, and hope for the best, but too often, emergencies come first. Families lose loved ones. Lives are disrupted. Communities bear the cost.
            </p>
            <p>
              We asked ourselves: “Why should preventable complications happen when technology and care can intervene early?”
            </p>
            <p className="font-medium text-brand-dark">
              That question became our mission.
            </p>
          </div>

          {/* Cleaned Button Group Elements */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link 
              to="/partner"
              className="bg-brand-primary text-white py-4 px-8 rounded-xl font-bold text-base hover:bg-green-800 transition-all shadow-md hover:shadow-brand-primary/20 text-center flex items-center justify-center min-w-[180px]"
            >
              Partner With Us
            </Link>
            <Link 
              to="/contact"
              className="bg-white text-brand-primary border-2 border-brand-primary py-4 px-8 rounded-xl font-bold text-base hover:bg-gray-50 transition-all text-center flex items-center justify-center min-w-[180px]"
            >
              Get Started
            </Link>
          </div>

        </div>

        {/* Right Column Images Frame */}
        <div className="w-full lg:w-[42%] max-w-md lg:max-w-none">
          <div className="relative rounded-3xl overflow-hidden shadow-sm aspect-[4/3] lg:aspect-auto">
            <img
              src={hero1}
              alt="Doctor working on laptop"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
}