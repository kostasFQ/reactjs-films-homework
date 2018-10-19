import React from 'react';
// import PropTypes from 'prop-types';
import s from './categories.scss';
import { genres } from '../../../assets/genres';

const Categories = () => (
  <div className={s.container}>
    <div className={s.item}>Trending</div>
    <div className={s.item}>Top Rated</div>
    <div className={s.item}>Coming Soon</div>
    <div className={s.item}>
      <select className={s.select} defaultValue='Genre'>
        <option value={null} disabled>Genre</option>
        {genres.map(item => <option value={item.name} key={item.id}>{item.name}</option>)}
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
