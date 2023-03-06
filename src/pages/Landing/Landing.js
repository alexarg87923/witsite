import { Helmet } from 'react-helmet';

import './Landing.css';
import Nav from '../../components/Nav/Nav';
import Footer from '../../components/Footer/Footer';
import LandingBody from '../../components/Landing/LandingBody';

function Landing() {
  
  return (
    
    <div className="App">
      <Helmet>
        <title>Home</title>
      </Helmet>

      <Nav />
      <LandingBody />
      <Footer />
    </div>
    
  );
}



export default Landing;
