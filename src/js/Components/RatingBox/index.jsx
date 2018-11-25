import React from 'react';
import PropTypes from 'prop-types';
import styles from './ratingBox.scss';

const RatingBox = (props) => {
  const { rating } = props;
  return (
    <div className={styles.container}>
      {rating}
    </div>
  );
};

export default RatingBox;

RatingBox.propTypes = {
  rating: PropTypes.number.isRequired,
};
