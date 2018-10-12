import React from 'react';
import s from './button.scss';
import PropTypes from 'prop-types';

const Button = (props) => {
  const {name, action} = props
  return (
    <button className={s.container} onClick={action} type='button'>
      {name}
    </button>
  )
};

export default Button;

Button.propTypes = {
  action: PropTypes.func,
  name: PropTypes.string.isRequired
};
Button.defaultProps = {
  action: null
}