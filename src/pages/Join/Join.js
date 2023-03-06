import { Helmet } from 'react-helmet';

import Nav from '../../components/Nav/Nav';
import Footer from '../../components/Footer/Footer';

function Join() {
  const selected = {
    about: 'About us',
    events: 'Upcoming Events',
    join: <u>Join WiT MDC</u>,
    contact: 'Contact Us'
};
  return (
    
    <div>
      <Helmet>
        <title>Join</title>
      </Helmet>

      <Nav selected ={selected}/>
      <Footer />
    </div>
    
  );
}



export default Join;
