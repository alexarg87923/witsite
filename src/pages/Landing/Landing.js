import React from 'react';
import { Helmet } from 'react-helmet';

import NavBar from '../../components/Nav/NavBar';
import Footer from '../../components/Footer/Footer';
import LandingBody from '../../components/Landing/LandingBody';

function Landing() {
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <NavBar />
      <LandingBody />
      <Footer />
    </div>
  );
}

export default Landing;
