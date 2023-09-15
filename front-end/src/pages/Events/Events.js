import React, { useEffect, useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import axios from 'axios';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

import { Wrapper } from './EventStyles';
import { Helmet } from 'react-helmet-async';

import EventBody from '../../components/app/Events/EventBody';

function Events() {
  const [events, setEvents] = useState([]);
  const [dynamicWidth, setDynamicWidth] = useState(0);

  useEffect(() => {
    const updateWidth = () => {
      const element = document.querySelector('.fc-day');
      if (element) {
        setDynamicWidth(element.offsetWidth);
      }
    };

    updateWidth();
    window.addEventListener('resize', updateWidth);

    return () => {
      window.removeEventListener('resize', updateWidth);
    };
  }, []);

  const renderEventContent = eventInfo => {
    const timeFormatter = new Intl.DateTimeFormat('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true
    });
    const formattedTime = timeFormatter.format(eventInfo.event.start);
    return (
      <OverlayTrigger
        key="top"
        placement="top"
        overlay={
          <Tooltip id={`tooltip-top`}>
            <div>
              <p>
                {formattedTime} {eventInfo.event.title}
              </p>
            </div>
          </Tooltip>
        }
      >
        <div>
          <p
            className="evnts"
            style={{
              maxWidth: `${dynamicWidth - 5}px`,
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
              color: 'rgb(245, 20, 130)'
            }}
          >
            {formattedTime} {eventInfo.event.title}
          </p>
        </div>
      </OverlayTrigger>
    );
  };

  useEffect(() => {
    axios
      .get('/api/v1/events')
      .then(response => {
        const modifiedData = response.data.map(listitem => ({
          ...listitem,
          date: new Date(listitem['date'])
        }));
        setEvents(modifiedData);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <Wrapper>
      <Helmet>
        <title>Events</title>
      </Helmet>
      <EventBody />
      <div
        className="mx-auto mt-5 mb-5 calendar"
      >
        <FullCalendar
          plugins={[dayGridPlugin]}
          events={events}
          eventContent={renderEventContent}
        />
      </div>
    </Wrapper>
  );
}

export default Events;
