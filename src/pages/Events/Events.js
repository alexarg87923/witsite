import React from 'react';
import { Helmet } from 'react-helmet';
import NavBar from '../../components/Nav/NavBar';
import Footer from '../../components/Footer/Footer';
import EventBody from '../../components/Events/EventBody';

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

function Events() {
  const events = [{ title: "today's event", date: new Date() }];

  return (
    <div>
      <Helmet>
        <title>Events</title>
      </Helmet>
      <NavBar />
      <EventBody />
      <FullCalendar
        defaultView="dayGridMonth"
        plugins={[dayGridPlugin]}
        events={events}
      />
      <Footer />
    </div>
  );
}

export default Events;
