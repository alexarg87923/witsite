import styled from 'styled-components';

export const Wrapper = styled.div`
  .fc-daygrid-day-number {
    color: red;
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
  .evnts:hover {
    color: rgb(251, 149, 200) !important;
  }
  .calendar {
    width: 60%;
    height: 60%;
  }
  @media (max-width: 575.98px) {
    .calendar {
      width: 100%;
      height: 100%;
    }
    .fc-toolbar-title {
      margin-left: 1em;
    }
  }
`;
