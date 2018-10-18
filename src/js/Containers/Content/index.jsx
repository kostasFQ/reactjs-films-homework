import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../Header';
import MovieDetailsPage from '../MovieDetailsPage';
import List from '../List';
import axios from 'axios';
require('babel-polyfill');

import { asyncGetMovie } from '../../actions/movie';

class Content extends React.PureComponent {

  async componentDidMount() {
    const response = await axios(`https://api.themoviedb.org/3/search/movie?api_key=3a2531498f834486708efbfa60ac046b&language=en-US&page=1&include_adult=false&query=cube`);
    const json = response.data.results[0];
    /* eslint-disable */
    this.props.onGetMovie(json);
    /* eslint-enable */
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <MovieDetailsPage />
        <List />
      </React.Fragment>
    );
  }
};

export default connect(
  state => ({
    movie: state.movie,
  }),
  dispatch => {
    return {
      onGetMovie: (data) => {
        dispatch(asyncGetMovie(data))
      }
    }
  }
)(Content);
Content.propTypes = {
  onGetMovie: PropTypes.func.isRequired,
};