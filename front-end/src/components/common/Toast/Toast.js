import React from 'react';
import { cssTransition } from 'react-toastify';
import PropTypes from 'prop-types';

export const Fade = cssTransition({ enter: 'fadeIn', exit: 'fadeOut' });

export const CloseButton = ({ closeToast }) => (
  <i
    className="fa fa-times my-2 fs--2"
    style={{ opacity: 0.5, cursor: 'pointer' }}
    onClick={closeToast}
  />
);

CloseButton.propTypes = { closeToast: PropTypes.func };
