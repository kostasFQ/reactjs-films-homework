import React from 'react';
import { connect } from 'react-redux';
import Poster from '../../Components/Poster';
import Descriptions from '../../Components/Descriptions';
import { apiUrl } from '../../../assets';

class MovieDetailsPage extends React.PureComponent {


  render() {
    const { movie } = this.props;
    const { film, finishFetch } = movie;

    if (film) {
      return (
        <div>
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
    return <div style={{height: '500px'}}></div>;
  }
}

export default connect(
  state => ({
    movie: state.movie,
  }),
)(MovieDetailsPage);
