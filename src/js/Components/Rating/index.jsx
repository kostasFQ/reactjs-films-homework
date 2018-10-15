import React from 'react';
import PropTypes from 'prop-types';
import s from './rating.scss';

const Rating = (props) => {
  const { rating } = props;
  if (rating <= 5 && rating >= 0) {
    return (
      <div className={s.container}>
        <div className={s.whiteStars} />
        <div className={s.fillStars} style={{ width: `${rating * 20}px` }} />
        <div className={s.ratingBox}>{rating}</div>
      </div>
    );
  }
<<<<<<< HEAD
  return (<div>Sorry, no data</div>);
=======
  return (<div>Sorry, no rating</div>);
>>>>>>> 96fb4d31d94a49892df3c029d37b6c1d1130682e
};

export default Rating;

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
};
