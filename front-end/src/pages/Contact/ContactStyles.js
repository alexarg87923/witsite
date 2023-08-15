import styled from 'styled-components';

export const Wrapper = styled.div`
  --color-default: #212529;
  --color-default-rgb: 33, 37, 41;
  --color-background: #ffffff;
  --color-background-rgb: 255, 255, 255;
  --color-primary: #e84545;
  --color-primary-rgb: 232, 69, 69;
  --color-secondary: #32353a;
  --color-secondary-rgb: 50, 53, 58;
  --color-box-background: #ffffff;
  --color-box-background-rgb: 255, 255, 255;
  --color-inverse: #ffffff;
  --color-inverse-rgb: 255, 255, 255;

  .contact {
    --color-box-background: #f7f7f7;
  }

  .contact .info-item {
    background: var(--color-box-background);
    padding: 30px;
  }

  .contact .info-item i {
    font-size: 38px;
    line-height: 0;
    color: var(--color-primary);
  }

  .contact .info-item h3 {
    color: var(--color-secondary);
    font-size: 20px;
    font-weight: 700;
    margin: 20px 0 10px 0;
  }

  .contact .info-item p {
    padding: 0;
    line-height: 24px;
    font-size: 14px;
    margin-bottom: 0;
  }

  .contact .email-form {
    background: var(--color-box-background);
    padding: 30px;
    height: 100%;
  }

  .contact .email-form .error-message {
    display: none;
    background: #df1529;
    color: #ffffff;
    text-align: left;
    padding: 15px;
    margin-bottom: 24px;
    font-weight: 600;
  }

  .contact .email-form .sent-message {
    display: none;
    color: #ffffff;
    background: #059652;
    text-align: center;
    padding: 15px;
    margin-bottom: 24px;
    font-weight: 600;
  }

  .contact .email-form .loading {
    display: none;
    background: var(--color-background);
    text-align: center;
    padding: 15px;
    margin-bottom: 24px;
  }

  .contact .email-form .loading:before {
    content: '';
    display: inline-block;
    border-radius: 50%;
    width: 24px;
    height: 24px;
    margin: 0 10px -6px 0;
    border: 3px solid var(--color-primary);
    border-top-color: var(--color-background);
    animation: animate-loading 1s linear infinite;
  }

  .contact .email-form input[type='text'],
  .contact .email-form input[type='email'],
  .contact .email-form textarea {
    font-size: 14px;
    padding: 10px 15px;
    box-shadow: none;
    border-radius: 0;
    color: var(--color-default);
    background-color: rgba(var(--color-background-rgb), 0.5);
    border-color: rgba(var(--color-default-rgb), 0.2);
  }

  .contact .email-form input[type='text']:focus,
  .contact .email-form input[type='email']:focus,
  .contact .email-form textarea:focus {
    border-color: var(--color-primary);
  }

  .contact .email-form input[type='text']::-moz-placeholder,
  .contact .email-form input[type='email']::-moz-placeholder,
  .contact .email-form textarea::-moz-placeholder {
    color: rgba(var(--color-default-rgb), 0.3);
  }

  .contact .email-form input[type='text']::placeholder,
  .contact .email-form input[type='email']::placeholder,
  .contact .email-form textarea::placeholder {
    color: rgba(var(--color-default-rgb), 0.3);
  }

  .contact .email-form button[type='submit'] {
    background: var(--color-primary);
    color: var(--color-inverse);
    border: 0;
    padding: 10px 30px;
    transition: 0.4s;
    border-radius: 4px;
  }

  .contact .email-form button[type='submit']:hover {
    background: rgba(var(--color-primary-rgb), 0.8);
  }

  @keyframes animate-loading {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
  .section-title {
    text-align: center;
    padding-bottom: 30px;
  }

  .section-title h2 {
    color: var(--color-secondary);
    font-size: 32px;
    font-weight: 700;
    position: relative;
  }

  .section-title h2:before,
  .section-title h2:after {
    content: '';
    width: 50px;
    height: 2px;
    background: var(--color-primary);
    display: inline-block;
  }

  .section-title h2:before {
    margin: 0 15px 10px 0;
  }

  .section-title h2:after {
    margin: 0 0 10px 15px;
  }

  .section-title p {
    margin-bottom: 0;
  }
`;
