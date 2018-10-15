import React from 'react';
import PropTypes from 'prop-types';
import s from './ratingBox.scss';

const RatingBox = (props) => {
  const { rating } = props;
  return (
    <div className={s.container}>
      {rating}
    </div>
  );
};

export default RatingBox;

RatingBox.propTypes = {
  rating: PropTypes.number.isRequired,
};