import React from 'react';
import PropTypes from 'prop-types';
import s from './rating.scss';

const Rating = (props) => {
  const { rating } = props;
  if(rating <= 5 && rating >= 0) {
    return(
      <div className={s.container}>
        <div className={s.whiteStars}></div>
        <div className={s.fillStars} style={{width:`${rating*20}px`}}></div>
        <div className={s.ratingBox}>{rating}</div>
      </div>
    )
  } else {
    return ( <div>Sorry, no rating</div> )
  }
};

export default Rating;

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
};
