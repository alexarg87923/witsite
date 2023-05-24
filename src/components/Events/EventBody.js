import React from 'react';
import './EventBody.css';

function EventBody() {
  return (
    <div className="text-center mt-5">
      <div className="eventsBanner d-flex text-center">
        <div className="container-fluid my-auto text-center">
          <div className="text-center">
            <h3 id="eventTitle" className="text-white">
              WiT MDC Zoom Room
            </h3>
            <h5 id="eventPar" className="text-white">
              Join our zoom to access our online events
            </h5>
            <button className="launchMeeting">Launch Meeting</button>
          </div>
        </div>
        <div className="container-fluid">
          <img className="eventsLogo" src="witWhite.png" alt="WiT Logo"></img>
        </div>
      </div>
    </div>
  );
}

export default EventBody;
