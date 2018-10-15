import React from 'react';
// import PropTypes from 'prop-types';
import s from './categories.scss';

const Categories = () => (
  <div className={s.container}>
    <div className={s.item}>Trending</div>
    <div className={s.item}>Top Rated</div>
    <div className={s.item}>Coming Soon</div>
    <div className={s.item}>
      <select className={s.select}>
        <option>Genre</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
    </div>
  </div>
);

export default Categories;

/* Details.propTypes = {
  title: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  duration: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};
 */
