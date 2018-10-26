import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import s from './tableItemRow.scss';
import Rating from '../Rating';
import Genres from '../Genres';
import RoundButton from '../RoundButton';
import { apiUrl } from '../../../assets';
import { asyncShowTrailer } from '../../actions/movie';

class TableItemRow extends React.PureComponent {
  showTrailer = (id) => {
    const { onShowTrailer } = this.props;
    onShowTrailer(id);
  }

  render() {
    const {
      poster_path, title, vote_average, genre_ids, overview, id,
    } = this.props;
    const miniPoster = `${apiUrl}/w300/${poster_path}`;
    const noPoster = 'http://wpmovies.scriptburn.com/wp-content/themes/wp_movies/images/noposter.jpg';

    return (
      <div className={s.container}>
        <div className={s.miniPoster}>
          { poster_path
            ? <img src={miniPoster} alt="poster" width="100%" height="100%" />
            : <img src={noPoster} alt="poster" width="100%" height="100%" />
            }
        </div>
        <div className={s.description}>
          <div className={s.title}>{title.toUpperCase()}</div>
          <div><Genres genre_ids={genre_ids} /></div>
          <div className={s.rating}><Rating rating={vote_average} /></div>
          <div className={s.overview}>{overview}</div>
        </div>
        <div className={s.button}>
          <RoundButton name="Watch Now" action={() => this.showTrailer(id)} />
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  dispatch => ({
    onShowTrailer: (id) => {
      dispatch(asyncShowTrailer(id));
    },
  }),
)(TableItemRow);

TableItemRow.propTypes = {
  onShowTrailer: PropTypes.func.isRequired,
  overview: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  poster_path: PropTypes.string,
  title: PropTypes.string.isRequired,
  vote_average: PropTypes.number.isRequired,
  genre_ids: PropTypes.arrayOf(PropTypes.number).isRequired,
};

TableItemRow.defaultProps = {
  poster_path: null,
};