import styled from 'styled-components';

export const Wrapper = styled.div`
  .about .content h3 {
    font-weight: 700;
    font-size: 32px;
    font-family: var(--font-secondary);
    color: #001f8d;
  }

  .about .content ul {
    list-style: none;
    padding: 0;
  }

  .about .content ul li {
    display: flex;
    align-items: flex-start;
    margin-top: 40px;
  }

  .about .content ul i {
    flex-shrink: 0;
    font-size: 48px;
    color: var(--color-primary);
    margin-right: 20px;
    line-height: 0;
  }

  .about .content ul h5 {
    font-size: 18px;
    font-weight: 700;
    color: #19335c;
  }

  .about .content ul p {
    font-size: 15px;
  }

  .about .content p:last-child {
    margin-bottom: 0;
  }

  .about .play-btn {
    width: 94px;
    height: 94px;
    background: radial-gradient(
      var(--color-primary) 50%,
      rgba(13, 66, 255, 0.4) 52%
    );
    border-radius: 50%;
    display: block;
    position: absolute;
    left: calc(50% - 47px);
    top: calc(50% - 47px);
    overflow: hidden;
  }

  .about .play-btn:before {
    content: '';
    position: absolute;
    width: 120px;
    height: 120px;
    animation-delay: 0s;
    animation: pulsate-btn 2s;
    animation-direction: forwards;
    animation-iteration-count: infinite;
    animation-timing-function: steps;
    opacity: 1;
    border-radius: 50%;
    border: 5px solid rgba(13, 66, 255, 0.7);
    top: -15%;
    left: -15%;
    background: rgba(198, 16, 0, 0);
  }

  .about .play-btn:after {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateX(-40%) translateY(-50%);
    width: 0;
    height: 0;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    border-left: 15px solid #fff;
    z-index: 100;
    transition: all 400ms cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  .about .play-btn:hover:before {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateX(-40%) translateY(-50%);
    width: 0;
    height: 0;
    border: none;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    border-left: 15px solid #fff;
    z-index: 200;
    animation: none;
    border-radius: 0;
  }

  .about .play-btn:hover:after {
    border-left: 15px solid var(--color-primary);
    transform: scale(20);
  }

  @keyframes pulsate-btn {
    0% {
      transform: scale(0.6, 0.6);
      opacity: 1;
    }

    100% {
      transform: scale(1, 1);
      opacity: 0;
    }
  }
`;