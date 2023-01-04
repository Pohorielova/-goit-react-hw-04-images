import React from 'react';
import { Btn } from './Button.styled';
import PropTypes from 'prop-types';
const Button = ({ onClick }) => (
  <Btn type="button" onClick={onClick}>
    Load more
  </Btn>
);
export default Button;
Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
