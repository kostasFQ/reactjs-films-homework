import React from 'react';
import PropTypes from 'prop-types';
import { genres } from '../../../assets/genres';
import s from './genres.scss';

const RatingBox = (props) => {
  const { genre_ids } = props;
  const genresTitles = genres.filter(item => genre_ids.includes(item.id));
  return (
    <ul className={s.list}>
      {genresTitles.map(item => <li key={item.id} className={s.item}>{item.name}</li>)}
    </ul>
  );
};

export default RatingBox;

RatingBox.propTypes = {
  genre_ids: PropTypes.arrayOf(PropTypes.number).isRequired,
};
