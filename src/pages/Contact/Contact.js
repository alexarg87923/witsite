import { Helmet } from 'react-helmet';

import Nav from '../../components/Nav/Nav';
import Footer from '../../components/Footer/Footer';

function Contact() {
  const selected = {
    about: 'About us',
    events: 'Upcoming Events',
    join: 'Join WiT MDC',
    contact: <u>Contact Us</u>
};
  return (
    
    <div>
      <Helmet>
        <title>Contact</title>
      </Helmet>

      <Nav selected ={selected}/>
      <Footer />
    </div>
    
  );
}



export default Contact;
