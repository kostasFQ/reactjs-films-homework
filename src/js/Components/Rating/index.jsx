import React from 'react';
import PropTypes from 'prop-types';
import s from './rating.scss';
import star from '../../../imgs/icons/star.png'
import whiteStar from '../../../imgs/icons/whiteStar.png'
// import halfStar from '../../../imgs/icons/halfStar.png'

const Rating = (props) => {
  const { rating } = props;
  
  if(rating <= 5 && rating >= 0) {
    const showRating = (r) => {
      const x = new Array(5).fill(<img src={whiteStar} alt='star' height='20px' width='20px' className={s.star} />);
      const arr = new Array(Math.round(r)).fill(<img src={star}alt='star' height='20px' width='20px' className={s.star} />);
      x.splice(0, Math.round(r), ...arr)
      return x;
    }
  
    return(
      <div className={s.container}>
        {showRating(rating)}
        <div className={s.ratingBox}>
          {rating}
        </div>
      </div>
    )
  } else {
    return ( <div>Sorry, no data</div> )
  }

};

export default Rating;

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
};