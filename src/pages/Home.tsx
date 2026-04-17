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

const Home: React.FC = () => {
  return (
    <div className="home-page">
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
