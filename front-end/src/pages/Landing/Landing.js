import React from 'react';
import { Helmet } from 'react-helmet-async';

import Hero from '../../components/app/Hero/Hero.js';
import Info from '../../components/app/Info/Info.js';
import AboutUs from '../../components/app/AboutUs/AboutUs.js';

function Landing () {
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
};

export default Landing;
