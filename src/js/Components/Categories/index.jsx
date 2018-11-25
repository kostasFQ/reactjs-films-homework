import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import styles from './categories.scss';
import { genres } from '../../../assets/genres';

import { getCategoryMovie, getDropdownMovie, setQueryString } from '../../actions/movie';

class Categories extends React.Component {

  getFromCategories = (e) => {
    const { onGetCategoryMovie, onSetQueryString } = this.props;
    onGetCategoryMovie(e.target.value);
    onSetQueryString('');
  };

  getFromGenres = (e) => {
    const { onGetDropdownMovie, onSetQueryString, history } = this.props;
    onGetDropdownMovie(e.target.value);
    history.push(`/genre/${e.target.options[e.target.selectedIndex].dataset.name.toLowerCase().replace(' ', '_')}`);
    onSetQueryString('');
  };

  render() {
    return (
      <div className={styles.container}>
        <Link to="/categories/popular" className={styles.xxx} onClick={this.getFromCategories} value="popular">
          Trending
        </Link>
        <Link to="/categories/top_rated" className={styles.xxx} onClick={this.getFromCategories} value="top_rated">
          Top Rated
        </Link>
        <Link to="/categories/upcoming" className={styles.xxx} onClick={this.getFromCategories} value="upcoming">
          Coming Soon
        </Link>
        <select className={styles.select} onChange={this.getFromGenres}>
          {genres.map(item => (
            <option value={item.id} key={item.id} data-name={item.name}>
              {item.name}
            </option>
          ))}
        </select>
      </div>
    );
  }
}

export default withRouter(connect(
  state => ({
    movie: state.movie,
  }),
  dispatch => ({
    onGetCategoryMovie: (query) => {
      dispatch(getCategoryMovie(query));
    },
    onGetDropdownMovie: (id) => {
      dispatch(getDropdownMovie(id));
    },
    onSetQueryString: (value) => {
      dispatch(setQueryString(value));
    },
  }),
)(Categories));

Categories.propTypes = {
  onGetCategoryMovie: PropTypes.func.isRequired,
  onGetDropdownMovie: PropTypes.func.isRequired,
  onSetQueryString: PropTypes.func.isRequired,
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};
