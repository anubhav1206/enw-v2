import React from 'react';
import PropTypes from 'prop-types';
import '../../assets/styles/button.scss';

const Button = ({ label, onClick, disabled }) => {
  return (
    <button className={`button ${disabled ? 'disabled' : ''}`} onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  disabled: false,
};

export default Button;
