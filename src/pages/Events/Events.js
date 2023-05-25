import React from 'react';
import { Helmet } from 'react-helmet';
import NavBar from '../../components/Nav/NavBar';
import Footer from '../../components/Footer/Footer';
import EventBody from '../../components/Events/EventBody';

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

import './event.css';

function Events() {
  const events = [{ title: "today's event", date: new Date() }];

  return (
    <div>
      <Helmet>
        <title>Events</title>
      </Helmet>
      <NavBar />
      <EventBody />
      <div
        className="mx-auto mt-5 mb-5"
        style={{ width: '60%', height: '60%' }}
      >
        <FullCalendar
          class
          defaultView="dayGridMonth"
          plugins={[dayGridPlugin]}
          events={events}
        />
      </div>

      <Footer />
    </div>
  );
}

export default Events;
