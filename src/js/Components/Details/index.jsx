import React from 'react';
import s from './details.scss';
import PropTypes from 'prop-types';
import Rating from '../Rating';

const Details = (props) => {
  const {title, genres, duration, rating} = props;
  return (
    <div className={s.container}>
      <h1 className={s.h1}>{title.toUpperCase()}</h1>
      <ul className={s.list}>
        {genres.map( (item) => <li key={item} className={s.item}>{item}</li> )}
        <span>{duration}</span>
      </ul>
      <Rating rating={rating}/>
    </div>
  )
};

export default Details;

Details.propTypes = {
  title: PropTypes.string.isRequired,
  genres: PropTypes.element.isRequired,
  duration: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};