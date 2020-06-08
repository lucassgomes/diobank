import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

interface Props {
  text: string,
  customClass: string,
  handleClick:() => {},
}

const Button = (props: Props) => {
  const {
    text,
    customClass,
    handleClick,
  } = props

  return (
    <div className={` button ${customClass}`}>
    <a href="/" onClick={handleClick}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    {text}
    </a>
    </div>
  );
};

Button.defaultProps ={
  text: 'CLIQUE',
  customClass: null,
  handleClick: null,
}

Button.protoTypes = {
  children: PropTypes.string.isRequired,
  customClass: PropTypes.string,
  handleClick: PropTypes.func,
}

export default Button;
