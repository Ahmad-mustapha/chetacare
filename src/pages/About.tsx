import React from 'react';
import WhoWeAre from '../components/about/WhoWeAre';
import Mission from '../components/about/Mission';
import WhatDrivesUs from '../components/about/WhatDrivesUs';
import WhatMakesUsBetter from '../components/about/WhatMakesUsBetter';
import Abouthero from '../components/about/Abouthero.tsx';
import ReachOut from '../components/ReachOut.tsx';
import Seo from '../components/Seo';

const About: React.FC = () => {
  return (
    <div className="about-page">
      <Seo
        title="Chetacare | About Chronic Disease Care"
        description="Learn about Chetacare's mission to make chronic disease care more accessible through preventive support, education, and a patient-centered digital experience."
      />
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
