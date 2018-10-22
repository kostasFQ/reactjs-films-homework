import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../Header';
import MovieDetailsPage from '../MovieDetailsPage';
import List from '../List';

import { asyncGetMovie, getCategoryMovie } from '../../actions/movie';

require('babel-polyfill');

class Content extends React.PureComponent {
  componentDidMount() {
    const { onGetCategoryMovie } = this.props;
    onGetCategoryMovie('top_rated');
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
    onGetCategoryMovie: (query) => {
      dispatch(getCategoryMovie(query));
    },
  }),
)(Content);
Content.propTypes = {
  onGetMovie: PropTypes.func.isRequired,
  onGetCategoryMovie: PropTypes.func.isRequired,
};
