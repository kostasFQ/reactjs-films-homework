import React from 'react';
import PropTypes from 'prop-types';
import shorid from 'shortid';
import styles from './rating.scss';
import RatingBox from '../RatingBox';
import whiteStar from '../../../imgs/icons/whiteStar.png';
import blueStar from '../../../imgs/icons/star.png';

const Rating = (props) => {
  const { rating } = props;

  const stars = (color) => {
    const arr = new Array(10);
    arr.fill(color);
    return arr;
  };

  if (rating <= 10 && rating > 0) {
    return (
      <div className={styles.container}>
        <div className={styles.ratingBox}>
          { stars(whiteStar).map(item => <img src={item} alt="star" className={styles.star} key={shorid.generate()} />)
            }
        </div>
        <div className={styles.x} style={{ width: `${rating * 20}px` }}>
          {
              stars(blueStar).map(item => <img src={item} alt="star" className={styles.star} key={shorid.generate()} />)
            }
        </div>
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
