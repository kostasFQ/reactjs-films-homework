import React from 'react';
import PropTypes from 'prop-types';
import styles from './rating.scss';
import RatingBox from '../RatingBox';

const Rating = (props) => {
  const { rating } = props;
  if (rating <= 10 && rating > 0) {
    return (
      <div className={styles.container}>
        <div className={styles.whiteStars} />
        <div className={styles.fillStars} style={{ width: `${rating * 20}px` }} />
        <RatingBox rating={rating} />
      </div>
    );
  }
  return (<div>Sorry, no rating</div>);
};

export default Rating;

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
};
