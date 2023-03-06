import './Nav.css'

function Nav() {
  
  return (

    <nav>
      <div className='d-flex mt-5 align-items-center'>

        <div className='ms-5'>
          <a href="/">
            <img src="home.png" alt="WiT Logo"></img>
          </a>
        </div>

        <div className='d-flex align-items-center mx-auto'>
          <div>
            <strong>
              <a href="/about" className='ms-5 me-5 navLinks'>
                About us
              </a>
            </strong>
          </div>

          <div>
            <strong>
              <a href="/events" className='ms-5 me-5 navLinks'>
                Upcoming Events
              </a>
            </strong>
          </div>

          <div>
            <strong>
              <a href="https://sharknet.mdc.edu/organization/witmdc" className='ms-5 me-5 navLinks'>
                Join WiT MDC
              </a>
            </strong>
          </div>
        </div>

        <div className='me-5 pe-5'>
          <strong> <a href="/contact" id="contact" className='me-5 navLinks'>
            Contact us
          </a> </strong>
        </div>
        
      </div>
    </nav>
    
  );
}



export default Nav;
