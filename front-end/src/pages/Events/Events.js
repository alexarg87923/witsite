import React, { useEffect, useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import axios from 'axios';

import { Wrapper } from './EventStyles';
import { Helmet } from 'react-helmet';

import EventBody from '../../components/app/Events/EventBody';

function Events() {
  const [events, addEvent] = useState([]);

  useEffect(() => {
    axios.get('/api/v1/events');
    addEvent();
  });

  return (
    <Wrapper>
      <Helmet>
        <title>Events</title>
      </Helmet>
      <EventBody />
      <div
        className="mx-auto mt-5 mb-5"
        style={{ width: '60%', height: '60%' }}
      >
        <FullCalendar
          defaultView="dayGridMonth"
          plugins={[dayGridPlugin]}
          events={events}
        />
      </div>
    </Wrapper>
  );
}

export default Events;
