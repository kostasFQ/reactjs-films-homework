import React from 'react';
import PropTypes from 'prop-types';
import styles from './roundButton.scss';

const RoundButton = (props) => {
  const { name, action } = props;
  return (
    <React.Fragment>
      <button className={styles.container} onClick={action} type="button">
        <div className={styles.play} />
      </button>
      <div className={styles.name}>{name}</div>
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
