import React from 'react';
import { connect } from 'react-redux';
import Poster from '../../Components/Poster';
import Descriptions from '../../Components/Descriptions';

class MovieDetailsPage extends React.PureComponent {

  

  render() {
    const { movie } = this.props;
    return (
      <React.Fragment>
        <Poster pict={`http://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} />
        <Descriptions {...movie} />
      </React.Fragment>
    );
  }
};

export default connect(
  state => ({
    movie: state.movie,
  }),
)(MovieDetailsPage);
