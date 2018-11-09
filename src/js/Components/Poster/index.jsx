import React from 'react';
import PropTypes from 'prop-types';
import styles from './poster.scss';

const Poster = (props) => {
  const { pict } = props;
  return (
    <div className={styles.curtian}>
      <img src={pict} className={styles.poster} alt="no poster" />
    </div>
  );
};
export default Poster;

Poster.propTypes = {
  pict: PropTypes.string.isRequired,
};
