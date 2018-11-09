import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import { genres } from '../../../assets/genres';
import PropTypes from 'prop-types';
import Header from '../Header';
import MovieDetailsPage from '../MovieDetailsPage';
import List from '../List';
import Video from '../Video';
import s from './content.scss';
import { asyncGetMovie, getCategoryMovie, asyncAddMovies, getDropdownMovie } from '../../actions/movie';
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
    const { onGetMovie, onGetCategoryMovie, onGetDropdownMovie, location } = this.props;
    const prefix = location.pathname.split('/')[1];
    const query = location.pathname.split('/')[2]

    if(location.search){
      const movie = location.search.slice( location.search.indexOf('movie=')+6 );
      onGetMovie(movie);
    }
    if(prefix === 'genre'){
      const genreId = genres.filter( item => { 
        if(item.name.toLowerCase() === query.replace('_', ' ') ){
          return item;
        }
        return null;
      });
      onGetDropdownMovie(genreId[0].id);
    }
    if(prefix === 'categories'){
      onGetCategoryMovie(query);
    }
    if(prefix === 'main'){
      onGetCategoryMovie('popular');
    }
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  getMovie = (film) => {
    const { onGetMovie } = this.props;
    onGetMovie(film);
  }

  toMain = () => {
    const { onGetCategoryMovie } = this.props;
    onGetCategoryMovie('now_playing')
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
      const { scrollHeight } = document.body;
      const { clientHeight } = document.documentElement;
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
          <Header getMovie={this.getMovie} toMain={this.toMain} />
          <MovieDetailsPage />
          <List />
      </div>
    );
  }
}

export default withRouter(connect(
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
    onGetDropdownMovie: (id) => {
      dispatch(getDropdownMovie(id));
    },
  }),
)(Content));

Content.propTypes = {
  onGetMovie: PropTypes.func.isRequired,
  onAddMovies: PropTypes.func.isRequired,
  onGetCategoryMovie: PropTypes.func.isRequired,
  onGetDropdownMovie: PropTypes.func.isRequired,
  movie: PropTypes.objectOf(PropTypes.any).isRequired,
  location: PropTypes.objectOf(PropTypes.any).isRequired,
};
