import React from 'react';
import { Wrapper } from './EventBodyStyles';
import logo from '../../../assets/logos/witlogowhite.png';

function EventBody() {
  return (
    <Wrapper>
      <section className="text-center mt-5">
        <div className="eventsBanner d-flex text-center mobile-padding">
          <div className="container-fluid my-auto text-center">
            <div className="text-center">
              <h3 id="eventTitle" className="text-white">
                WiT MDC Zoom Room
              </h3>
              <h5 id="eventPar" className="text-white">
                Join our zoom to access our online events
              </h5>
              <a href="https://us06web.zoom.us/j/9044089481">
                <button className="launchMeeting">Launch Meeting</button>
              </a>
            </div>
          </div>
          <div className="container-fluid d-none d-lg-block">
            <img className="eventsLogo" src={logo} alt="WiT Logo"></img>
          </div>
        </div>
      </section>
    </Wrapper>
  );
}

export default EventBody;
