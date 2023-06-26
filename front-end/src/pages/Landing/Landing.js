import React from 'react';
import { Helmet } from 'react-helmet';

import Hero from '../../components/app/Hero/Hero';
import Info from '../../components/app/Info/Info';
import AboutUs from '../../components/app/AboutUs/AboutUs';

function Landing() {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Hero />
      <Info />
      <AboutUs />
    </>
  );
}

export default Landing;
