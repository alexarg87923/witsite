import './Landing.css';

const headerStyle = { 
  
  color:"rgb(180, 2, 48)",
  fontSize:"20px",
  marginLeft:"20px",
  marginRight:"20px",
  fontWeight: "bold"

};
const margin = { 
  marginTop: '50px'
};
const image = { 
  height: '50%',
  width: '50%'
};
function Landing() {
  
  return (

    <div style={margin} className="App">
  
      <a href="/" style={image}>
        <img src="home.png" alt="WiT Logo">
        </img>
      </a>

      <a href="/about" style={headerStyle}>
        About us
      </a>

      <a href="/events" style={headerStyle}>
        Upcoming Events
      </a>

      <a href="https://sharknet.mdc.edu/organization/witmdc" style={headerStyle}>
        Join WiT MDC
      </a>

      <a href="/contact" style={headerStyle}>
        Contact us
      </a>

    </div>
    
  );
}



export default Landing;
