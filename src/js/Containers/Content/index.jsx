import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../Header';
import MovieDetailsPage from '../MovieDetailsPage';
import List from '../List';
import Video from '../Video';
import s from './content.scss';

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
    const { movie } = this.props;
    const { trailerWindow } = movie;

    return (
      <div className={s.container}>
        { trailerWindow? <Video/>: null}
        <Header getMovie={this.getMovie} />
        <MovieDetailsPage />
        <List />
      </div>
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
  movie: PropTypes.objectOf(PropTypes.any).isRequired,
};
