import React from 'react';
import PropTypes from 'prop-types';
import s from './rating.scss';

const Rating = (props) => {
  const { rating } = props;
  return(
    <div className={s.container}>
    {rating}
    </div>
  )
};

export default Rating;

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
};
