import styled from 'styled-components';

export const Wrapper = styled.div`
  .page-section {
    padding: 6rem 0;
  }
  .container,
  .container-fluid,
  .container-xxl,
  .container-xl,
  .container-lg,
  .container-md,
  .container-sm {
    --bs-gutter-x: 1.5rem;
    --bs-gutter-y: 0;
    width: 100%;
    padding-right: calc(var(--bs-gutter-x) * 0.5);
    padding-left: calc(var(--bs-gutter-x) * 0.5);
    margin-right: auto;
    margin-left: auto;
  }

  .page-section h2.section-heading,
  .page-section .section-heading.h2 {
    font-size: 2.5rem;
    margin-top: 0;
    margin-bottom: 1rem;
  }
  .text-uppercase {
    text-transform: uppercase !important;
  }

  section#contact {
    background-color: #212529;
    background-image: url('/map-image.png');
    background-repeat: no-repeat;
    background-position: center;
  }
  section#contact .section-heading {
    color: #fff;
  }
  section#contact form#contactForm .form-group {
    margin-bottom: 1.5rem;
  }
  section#contact form#contactForm .form-group input,
  section#contact form#contactForm .form-group textarea {
    padding: 1.25rem;
  }
  section#contact form#contactForm .form-group input.form-control {
    height: auto;
  }
  section#contact form#contactForm .form-group-textarea {
    height: 100%;
  }
  section#contact form#contactForm .form-group-textarea textarea {
    height: 100%;
    min-height: 10rem;
  }
  section#contact form#contactForm p.help-block {
    margin: 0;
  }
  section#contact form#contactForm .form-control:focus {
    border-color: #ffc800;
    box-shadow: none;
  }
  section#contact form#contactForm ::-webkit-input-placeholder {
    font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI',
      Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji',
      'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
    font-weight: 700;
    color: #ced4da;
  }
  section#contact form#contactForm :-moz-placeholder {
    font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI',
      Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji',
      'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
    font-weight: 700;
    color: #ced4da;
  }
  section#contact form#contactForm ::-moz-placeholder {
    font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI',
      Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji',
      'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
    font-weight: 700;
    color: #ced4da;
  }
  section#contact form#contactForm :-ms-input-placeholder {
    font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI',
      Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji',
      'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
    font-weight: 700;
    color: #ced4da;
  }
`;
