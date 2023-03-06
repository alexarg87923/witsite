import { Helmet } from 'react-helmet';

import Nav from '../../components/Nav/Nav';
import Footer from '../../components/Footer/Footer';
import LandingBody from '../../components/Landing/LandingBody';

function Landing() {
  const selected = {
    about: <>About us</>,
    events: <>Upcoming Events</>,
    join: <>Join WiT MDC</>
};
  return (
    
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>

      <Nav selected ={selected}/>
      <LandingBody />
      <Footer />
    </div>
    
  );
}



export default Landing;
