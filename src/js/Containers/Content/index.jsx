import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../Header';
import MovieDetailsPage from '../MovieDetailsPage';
import List from '../List';

import { asyncGetMovie } from '../../actions/movie';

require('babel-polyfill');

class Content extends React.PureComponent {
  componentDidMount() {
    this.getMovie('predator');
  }

  getMovie = (film) => {
    const { onGetMovie } = this.props;
    onGetMovie(film);
  }

  render() {
    return (
      <React.Fragment>
        <Header getMovie={this.getMovie} />
        <MovieDetailsPage />
        <List />
      </React.Fragment>
    );
  }
}

export default connect(
  state => ({
    movie: state.movie,
  }),
  dispatch => ({
    onGetMovie: (movie) => {
      dispatch(asyncGetMovie(movie));
    },
  }),
)(Content);
Content.propTypes = {
  onGetMovie: PropTypes.func.isRequired,
};
