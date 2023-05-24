import React from 'react';
import { Helmet } from 'react-helmet';

import NavBar from '../../components/Nav/NavBar';
import Footer from '../../components/Footer/Footer';
import ContactBody from '../../components/Contact/ContactBody';

function Contact() {
  return (
    <div>
      <Helmet>
        <title>Contact</title>
      </Helmet>
      <NavBar />
      <ContactBody />
      <Footer />
    </div>
  );
}

export default Contact;
