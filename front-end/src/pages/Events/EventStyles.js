import styled from 'styled-components';

export const Wrapper = styled.div`
  .fc-daygrid-day-number {
    color: black;
    text-decoration: none;
  }

  .fc-daygrid-day-number:hover {
    color: pink;
    text-decoration: none;
  }

  .fc-toolbar-title {
    color: red;
  }
  .fc-col-header-cell-cushion {
    color: white;
    text-decoration: none;
  }
  th {
    background-color: black;
  }
  .fc-today-button {
    background-color: red !important;
    border-color: pink !important;
    text-transform: uppercase !important;
  }
  .fc-today-button:disabled:hover {
    cursor: not-allowed;
  }
  .fc-button,
  .fc-button:focus {
    background-color: red !important;
    border: none !important;
    outline: none !important;
    box-shadow: none !important;
  }
  .fc-button:hover {
    background-color: pink !important;
  }

  .fc-button:disabled:hover {
    background-color: red !important;
  }

  .fc-col-header-cell {
    background-color: pink !important;
  }
  .fc-daygrid-event-dot {
    color: black;
  }
  .fc-event-time {
    color: black;
  }
  .fc-event-title {
    color: black;
  }
`;
