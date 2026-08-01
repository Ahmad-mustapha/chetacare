import React from 'react';
import Hero from '../components/home/Hero';
import Problem from '../components/home/Problem';
import HowWeWork from '../components/home/HowWeWork';
import WhoAreWeFor from '../components/home/WhoWeServe';
import Scale from '../components/home/Scale';
import Currentfocus from '../components/home/CurrentFocus';
import DataSecurity from '../components/home/DataSecurity';
import Testimonials from '../components/home/Testimonials';
import BlogSection from '../components/home/BlogSection';
import ReachOut from '../components/ReachOut';
import Seo from '../components/Seo';
import OurPartners from '../components/home/OurPartners';

const Home: React.FC = () => {
  return (
    <div className="home-page">
      <Seo
        title="Chetacare | Chronic Disease Care"
        description="Chetacare provides chronic disease care support with preventive guidance, education, and ongoing help for people managing hypertension, diabetes, and related conditions."
        structuredData={[
          {
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Chetacare',
            url: 'https://chetacare.com',
            logo: 'https://chetacare.com/assets/chetacarelogo.png',
          },
          {
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: 'Chetacare',
            url: 'https://chetacare.com',
            description:
              'Chetacare provides chronic disease care support with preventive guidance, education, and ongoing help for people managing hypertension, diabetes, and related conditions.',
          },
        ]}
      />
      <Hero />
      <Problem />
      <HowWeWork />
      <WhoAreWeFor />
      <Scale />
      <Currentfocus />
      <DataSecurity />
      <Testimonials />
      <OurPartners />
      <BlogSection />
      <ReachOut />
    </div>
  );
};

export default Home;
