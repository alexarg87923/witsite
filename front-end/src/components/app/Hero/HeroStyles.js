import styled from 'styled-components';
import hero from '../../../assets/images/women-tech.jpg';

export const Wrapper = styled.div`
  header.masthead {
    position: relative;
    background-color: #343a40;
    background: url(${hero}) no-repeat center center;
    background-size: cover;
    padding-top: 8rem;
    padding-bottom: 8rem;
  }
  header.masthead:before {
    content: '';
    position: absolute;
    background-color: #8b0000;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    opacity: 0.5;
  }
  header.masthead h1,
  header.masthead .h1 {
    font-size: 2rem;
  }
  @media (min-width: 768px) {
    header.masthead {
      padding-top: 12rem;
      padding-bottom: 12rem;
    }
    header.masthead h1,
    header.masthead .h1 {
      font-size: 3rem;
    }
  }
`;
