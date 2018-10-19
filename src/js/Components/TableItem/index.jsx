import React from 'react';
import s from './tableItem.scss';
import PropTypes from 'prop-types'
import RatingBox from '../RatingBox';
import Genres from '../Genres';
import { apiUrl } from '../../../assets';

const TableItem = (props) => {
  const { poster_path, title, vote_average, genre_ids } = props;
  const miniPoster = `${apiUrl}/w300/${poster_path}`;
  const noPoster = `http://wpmovies.scriptburn.com/wp-content/themes/wp_movies/images/noposter.jpg`;

  return (
    <div className={s.container}>
      <div className={s.miniPoster}>
        { poster_path? 
          <img src={miniPoster} alt="poster" width='100%' height='100%' />:
          <img src={noPoster} alt="poster" width='100%' height='100%' />
        }
      </div>
      <div className={s.description}>
        <div className={s.descBox}>
          <span className={s.title}>{title.toUpperCase()}</span> <RatingBox rating={vote_average}/>
        </div>
        <div className={s.cut}>
          <Genres genre_ids={genre_ids} />
        </div>
      </div>
    </div>
  )
};

export default TableItem;

TableItem.propTypes = {
  poster_path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  vote_average: PropTypes.number.isRequired,
  genre_ids: PropTypes.arrayOf(PropTypes.number).isRequired,
}; 