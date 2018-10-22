import React from 'react';
import { connect } from 'react-redux';
import Poster from '../../Components/Poster';
import Descriptions from '../../Components/Descriptions';
import Spiner from '../../Components/Spiner';
import { apiUrl } from '../../../assets';

class MovieDetailsPage extends React.PureComponent {
  render() {
    const { movie } = this.props;
    const { film, finishFetch } = movie;

    if (film) {
      return (
        <React.Fragment>
          <Poster pict={`${apiUrl}/w500/${film.backdrop_path}`} />
          <Descriptions {...film} />
        </React.Fragment>
      );
    }
    if (finishFetch && !film) {
      return (
        <React.Fragment>
          <Poster pict="http://ctoetotakoe.ru/wp-content/uploads/2016/05/404-not-found.png" />
        </React.Fragment>
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
