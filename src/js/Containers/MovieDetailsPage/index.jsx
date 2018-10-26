import React from 'react';
import { connect } from 'react-redux';
import Poster from '../../Components/Poster';
import Descriptions from '../../Components/Descriptions';
import Spiner from '../../Components/Spiner';
import { apiUrl } from '../../../assets';

class MovieDetailsPage extends React.PureComponent {
  render() {
    const { movie } = this.props;
    const { finishFetch, film } = movie;

    if (film) {
      return (
        <div>
          <Poster pict={`${apiUrl}/w500/${film.backdrop_path}`} />
          <Descriptions {...film} />
        </div>
      );
    }
    if (finishFetch && !film) {
      return (
        <div>
          <Poster pict="http://ctoetotakoe.ru/wp-content/uploads/2016/05/404-not-found.png" />
        </div>
      );
    }
    return <Spiner />;
  }
}

export default connect(
  state => ({
    movie: state.movie,
  }),
)(MovieDetailsPage);
