import './Nav.css'

function Nav(prop) {
    const links = prop.selected;
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
              <a id="about" href="/about" className='mx-5 px-5 navLinks'>
                {links.about}
              </a>
            </strong>
          </div>
          

          <div>
            <strong>
              <a id="events" href="/events" className='mx-5 px-5 navLinks'>
                {links.events}
              </a>
            </strong>
          </div>

          <div>
            <strong>
              <a id="join" href="/join" className='mx-5 px-5 navLinks'>
              {links.join}
              </a>
            </strong>
          </div>

        </div>
        
        <div className='me-5 pe-5'>
          <strong> <a href="/contact" id="contact" className='me-5 navLinks'>
          {links.contact}
          </a> </strong>
        </div>
        
      </div>
    </nav>
    
  );
}



export default Nav;
