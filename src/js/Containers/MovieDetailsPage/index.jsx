import React from 'react';
import { connect } from 'react-redux';
import Poster from '../../Components/Poster';
import Descriptions from '../../Components/Descriptions';
import { apiUrl } from '../../../assets';
import styles from './movieDetails.scss';

class MovieDetailsPage extends React.PureComponent {
  preRender = () => {
    const { movie } = this.props;
    const { film, finishFetch, errorMessage } = movie;
    if (film) {
      return (
        <div className={styles.container}>
          <Poster pict={`${apiUrl}/w500/${film.backdrop_path}`} />
          <Descriptions {...film} />
        </div>
      );
    }
    if (!film && finishFetch) {
      return (
        <div>
          <Poster pict="http://ctoetotakoe.ru/wp-content/uploads/2016/05/404-not-found.png" />
        </div>
      );
    }
    if (errorMessage !== null) {
      return (
        <div>
          <Poster pict="http://ctoetotakoe.ru/wp-content/uploads/2016/05/404-not-found.png" />
        </div>
      );
    }
    return <div style={{ height: '500px' }} />;
  }

  render() {
    return this.preRender();
  }
}

export default connect(
  state => ({
    movie: state.movie,
  }),
)(MovieDetailsPage);
