import { Helmet } from 'react-helmet';
import AboutBody from '../../components/About/AboutBody';
import Nav from '../../components/Nav/Nav';
import Footer from '../../components/Footer/Footer';

function About() {
  const selected = {
    about: <u>About us</u>,
    events: 'Upcoming Events',
    join: 'Join WiT MDC',
    contact: 'Contact Us'
};

  return (

    <div>
      
      <Helmet>
        <title>About</title>
      </Helmet>

      <Nav selected={selected} />
      <AboutBody />
      <Footer />
    </div>
    
  );
}



export default About;
