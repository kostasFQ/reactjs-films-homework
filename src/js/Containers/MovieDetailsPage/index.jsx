import React from 'react';
import { connect } from 'react-redux';
import Poster from '../../Components/Poster';
import Descriptions from '../../Components/Descriptions';
import { apiUrl } from '../../../assets';

class MovieDetailsPage extends React.PureComponent {
  render() {
    const { movie } = this.props;
    const { film, startFetch, fetched } = movie;

    if (startFetch && !fetched) {
      return <div>LOADING...</div>;
    }

    if (startFetch && fetched && film) {
      return (
        <React.Fragment>
          <Poster pict={`${apiUrl}/w500/${film.backdrop_path}`} />
          <Descriptions {...film} />
        </React.Fragment>
      );
    }
    return <div><Poster pict="https://cdn-images-1.medium.com/max/1600/1*KOAfAOQ9FwAp9i2muTkGWw.png" /></div>;
  }
}

export default connect(
  state => ({
    movie: state.movie,
  }),
)(MovieDetailsPage);
