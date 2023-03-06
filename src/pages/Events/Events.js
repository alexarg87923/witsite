import { Helmet } from 'react-helmet';

import Nav from '../../components/Nav/Nav';
import Footer from '../../components/Footer/Footer';

function Events() {
  const selected = {
    about: <>About us</>,
    events: <u>Upcoming Events</u>,
    join: <>Join WiT MDC</>
};
  return (
    
    <div>
      <Helmet>
        <title>Events</title>
      </Helmet>

      <Nav selected ={selected}/>
      <Footer />
    </div>
    
  );
}



export default Events;
