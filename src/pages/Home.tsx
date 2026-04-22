import React from 'react';
import Hero from '../components/Hero';
import Problem from '../components/Problem';
import HowWeWork from '../components/HowWeWork';
import WhoAreWeFor from '../components/WhoAreWeFor';
import Scale from '../components/Scale';
import Currentfocus from '../components/Currentfocus';
import Testimonials from '../components/Testimonials';
import BlogSection from '../components/BlogSection';
import ReachOut from '../components/ReachOut';
import Seo from '../components/Seo';

const Home: React.FC = () => {
  return (
    <div className="home-page">
      <Seo
        title="Chronic Disease Care | Chetacare"
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
      <Testimonials />
      <BlogSection />
      <ReachOut />
    </div>
  );
};

export default Home;
