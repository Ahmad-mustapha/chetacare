import { Link } from 'react-router-dom';
const hero1 = "/assets/hero1.png";

const Abouthero: React.FC = () => {
  return (
    <section className="py-12 overflow-hidden bg-[#F7FBF9]">
      <div className="container-wide flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Column Content */}
        <div className="w-full lg:w-[60%] max-w-2xl">
          <div className="inline-block px-4 py-2 bg-[#22C55E0D] border border-[#22C55E4D] rounded-md sm:rounded-lg mb-8">
            <p className="text-[#1A7A4A] font-medium text-[12px] lg:text-[14px]">
              Our Origin
            </p>
          </div>

          <h1 className="text-[30px] lg:text-[50px] xl:text-[70px] font-medium text-[#1F2A24] leading-[40px] lg:leading-[50px] xl:leading-[75px] mb-6 tracking-[-2px] w-full md:max-w-xl">
            A Story That Drives Us
          </h1>

          <p className="text-[14px] lg:text-[18px] xl:text-[20px] text-[#1F2A24] mb-4 leading-[20px] lg:leading-[22px] xl:leading-[24px] tracking-[-0.5px]">
            Every day in Africa, millions of people live with chronic diseases like hypertension and diabetes. Many take medications, visit hospitals, and hope for the best, but too often, emergencies come first. Families lose loved ones. Lives are disrupted. Communities bear the cost.</p>
          <p className="text-[14px] lg:text-[18px] xl:text-[20px] text-[#1F2A24] mb-4 leading-[20px] lg:leading-[22px] xl:leading-[24px] tracking-[-0.5px]">
            We asked ourselves: “Why should preventable complications happen when technology and care can intervene early?” </p>
          <p className="text-[14px] lg:text-[18px] xl:text-[20px] text-[#1F2A24] mb-8 leading-[20px] lg:leading-[22px] xl:leading-[24px] tracking-[-0.5px]">
            That question became our mission.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              to="/partner"
              className="bg-[#1A7A4A] text-white px-6 py-3 lg:px-[28px] lg:py-[14px] xl:px-8 xl:py-4 rounded-lg sm:rounded-xl font-bold text-lg hover:bg-green-800 transition-all shadow-lg hover:shadow-green-200/50 text-center flex items-center justify-center"
            >
              Partner With Us
            </Link>
            <button className="bg-white text-[#1A7A4A] border-2 border-[#1A7A4A] px-6 py-3 lg:px-[28px] lg:py-[14px] xl:px-8 xl:py-4 rounded-lg sm:rounded-xl font-bold text-lg hover:bg-gray-50 transition-all text-center">
              Get Started
            </button>
          </div>

        </div>

        {/* Right Column Images */}
        <div className="relative w-full lg:w-[38%]">
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden">

            <img
              src={hero1}
              alt="Doctor working on laptop"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>

  );
};

export default Abouthero;

