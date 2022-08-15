import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ children, className = '', doAction = null }) => {
  return (
    <button className={className} onClick={doAction}>
      {children}
    </button>
  );
};

export default Button;

Button.defaultProps = {
  className: '',
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
