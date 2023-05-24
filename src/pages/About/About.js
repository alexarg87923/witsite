import React from 'react';
import { Helmet } from 'react-helmet';
import AboutBody from '../../components/About/AboutBody';
import NavBar from '../../components/Nav/NavBar';
import Footer from '../../components/Footer/Footer';

function About() {
  return (
    <div>
      <Helmet>
        <title>About</title>
      </Helmet>
      <NavBar />
      <AboutBody />
      <Footer />
    </div>
  );
}

export default About;
