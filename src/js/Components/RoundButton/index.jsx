import React from 'react';
import PropTypes from 'prop-types';
import s from './roundButton.scss';

const RoundButton = (props) => {
  const { name, action } = props;
  return (
    <React.Fragment>
      <button className={s.container} onClick={action} type="button">
        <div className={s.play} />
      </button>
      <div className={s.name}>{name}</div>
    </React.Fragment>
  );
};

export default RoundButton;

RoundButton.propTypes = {
  action: PropTypes.func,
  name: PropTypes.string.isRequired,
};
RoundButton.defaultProps = {
  action: null,
};
