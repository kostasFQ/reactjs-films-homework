import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from './tableItemRow.scss';
import RatingBox from '../RatingBox';
import Genres from '../Genres';
import RoundButton from '../RoundButton';
import { apiUrl } from '../../../assets';
import { asyncShowTrailer } from '../../actions/movie';
import star from '../../../imgs/icons/halfStar.png';

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
      <div className={styles.container}>
        <div className={styles.miniPoster}>
          { poster_path
            ? <img src={miniPoster} alt="poster" />
            : <img src={noPoster} alt="poster" width="100%" height="100%" />
            }
        </div>
        <div className={styles.str}>
          <div className={styles.title}>{title.toUpperCase()}</div>
          <div className={styles.description}>
            <div className={styles.txt}>
              <Genres genre_ids={genre_ids} />
            </div>
            <div className={styles.rating}>
              <img src={star} alt="star" height="20px" width="20px" />
              {' '}
              <RatingBox rating={vote_average} />
            </div>
          </div>
          <div className={styles.overview}>{overview}</div>
        </div>
        <div className={styles.button}>
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
