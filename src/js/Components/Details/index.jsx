import React from 'react';
import PropTypes from 'prop-types';
import s from './details.scss';
import Rating from '../Rating';
import { genres } from '../../../assets/genres';

const Details = (props) => {
  const {
    original_title, genre_ids, vote_average,
  } = props;

  const genresTitles = genres.filter( item => genre_ids.includes(item.id) );

  return (
    <div className={s.container}>
      <h1 className={s.h1}>{original_title.toUpperCase()}</h1>
      <ul className={s.list}>
        {genresTitles.map(item => <li key={item.id} className={s.item}>{item.name}</li>)}
      </ul>
      <Rating rating={vote_average} />
    </div>
  );
};

export default Details;

Details.propTypes = {
  original_title: PropTypes.string.isRequired,
  genre_ids: PropTypes.arrayOf(PropTypes.number).isRequired,
  vote_average: PropTypes.number.isRequired,
};
