import styled from 'styled-components';

export const Wrapper = styled.div`
  .eventsBanner {
    background-color: rgb(168, 110, 123);
  }
  .eventsLogo {
    width: 15vw;
    height: auto;
  }

  .launchMeeting {
    border: none;
    color: rgb(180, 2, 48);
    font-weight: bold;
    border-radius: 3px;
  }
  #eventTitle {
    font-size: 7vh;
  }
  #eventPar {
    font-size: 4vh;
  }

  @media (max-width: 972px) {
    #eventTitle {
      font-size: 6vh;
    }
    #eventPar {
      font-size: 4vh;
    }

    .mobile-padding {
      padding: 2em;
    }
  }

  @media (max-width: 1300px) {

    .mobile-padding {
      padding: 2em;
    }
  }
`;
