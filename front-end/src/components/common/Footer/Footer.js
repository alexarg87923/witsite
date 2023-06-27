import React from 'react';
import { Wrapper } from './FooterStyles';
import logo from '../../../assets/logos/witlogored.png';

function Footer() {
  return (
    <Wrapper>
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div className="col-md-4 d-flex align-items-center">
          <a
            href="/"
            className="ms-5 mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1"
          >
            <img
              src={logo}
              width="75"
              height="auto"
              className="d-inline-block align-top"
              alt="wit logo"
            />
          </a>
        </div>

        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li className="ms-3">
            <a className="link-dark text-body-secondary" href="https://discord.gg/e3Ur3esxtM">
              <i className="bi-discord logo"></i>
            </a>
          </li>
          <li className="ms-3">
            <a className="link-dark text-body-secondary mx-5" href="https://www.instagram.com/witmdc/">
              <i className="bi-instagram logo"></i>
            </a>
          </li>
        </ul>
      </footer>
    </Wrapper>
  );
}

export default Footer;
