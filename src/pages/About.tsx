import React from 'react';
import WhoWeAre from '../components/about/WhoWeAre';
import Mission from '../components/about/Mission';
import WhatDrivesUs from '../components/about/WhatDrivesUs';
import WhatMakesUsBetter from '../components/about/WhatMakesUsBetter';
import Abouthero from '../components/about/Abouthero.tsx';
import ReachOut from '../components/ReachOut.tsx';
const About: React.FC = () => {
  return (
    <div className="about-page">
      <Abouthero />
      <WhoWeAre />
      <Mission />
      <WhatDrivesUs />
      <WhatMakesUsBetter />
      <ReachOut />
    </div>
  );
};

export default About;

