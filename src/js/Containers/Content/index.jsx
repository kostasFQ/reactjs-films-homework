import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../Header';
import MovieDetailsPage from '../MovieDetailsPage';
import List from '../List';
import Video from '../Video';
import s from './content.scss';

import { asyncGetMovie, getCategoryMovie, asyncAddMovies } from '../../actions/movie';

require('babel-polyfill');

class Content extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      pageHeight: 0,
      height: 500,
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    const { onGetCategoryMovie } = this.props;
    onGetCategoryMovie('now_playing');
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  getMovie = (film) => {
    const { onGetMovie } = this.props;
    onGetMovie(film);
  }

  addMovies = (url) => {
    const { onAddMovies } = this.props;
    onAddMovies(url);
  }

  handleScroll = () => {
    const { height, pageHeight } = this.state;
    const { movie } = this.props;
    const { currentUrl, startAdvanceFetch } = movie;
    const y = window.scrollY;

    if (y > height) {
      // const pageY = document.body.scrollHeight - document.documentElement.clientHeight;
      const {scrollHeight} = document.body;
      const {clientHeight} = document.documentElement;
      this.setState({ pageHeight: scrollHeight - clientHeight });
    }

    if (y === pageHeight && !startAdvanceFetch) {
      this.addMovies(currentUrl);
    }
  }

  render() {
    const { movie } = this.props;
    const { trailerWindow } = movie;

    return (
      <div className={s.container}>
        { trailerWindow ? <Video /> : null}
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
    onAddMovies: (url) => {
      dispatch(asyncAddMovies(url));
    },
  }),
)(Content);

Content.propTypes = {
  onGetMovie: PropTypes.func.isRequired,
  onAddMovies: PropTypes.func.isRequired,
  onGetCategoryMovie: PropTypes.func.isRequired,
  movie: PropTypes.objectOf(PropTypes.any).isRequired,
};
