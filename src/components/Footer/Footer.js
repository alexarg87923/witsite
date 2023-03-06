
import './Footer.css'

function Footer() {
  
  return (

    <footer className='mb-5 mt-auto'>
        <div className="d-flex mt-5">
            <div className="ms-5 footerTitle">
                <p>QUICK LINKS</p>
            </div>

            <div className="ms-5 ps-5">
                <a href="/" className='footerLinks'><u>WiT Zoom Room</u></a>
            </div>

            <div className="ms-5 ps-5">
                <a href="/" className='footerLinks'><u>WiT Sharknet</u></a>
            </div>

            <div className="ms-5 ps-5">
                <a href="/" className='footerLinks'><u>Women RISE MDC</u></a>
            </div>
        </div>
    </footer>
    
  );
}



export default Footer;
