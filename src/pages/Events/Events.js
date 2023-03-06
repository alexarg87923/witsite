import { Helmet } from 'react-helmet';

import Nav from '../../components/Nav/Nav';
import Footer from '../../components/Footer/Footer';
import EventBody from '../../components/Events/EventBody';
function Events() {
  const selected = {
    about: 'About us',
    events: <u>Upcoming Events</u>,
    join: 'Join WiT MDC',
    contact: 'Contact Us'
};
  return (
    
    <div>
      <Helmet>
        <title>Events</title>
      </Helmet>

      <Nav selected ={selected}/>
      <EventBody />
      <Footer />
    </div>
    
  );
}



export default Events;
