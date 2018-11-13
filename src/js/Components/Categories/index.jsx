import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from './categories.scss';
import { genres } from '../../../assets/genres';
import { Link, withRouter } from 'react-router-dom';

import { getCategoryMovie, getDropdownMovie } from '../../actions/movie';

class Categories extends React.Component {
  
  get = (e) => {
    const { onGetCategoryMovie } = this.props;
    onGetCategoryMovie(e.target.value);
  };

  log = (e) => {
    const {history} = this.props;
    const { onGetDropdownMovie } = this.props;
    onGetDropdownMovie(e.target.value);
    history.push(`/genre/${e.target.options[e.target.selectedIndex].dataset.name.toLowerCase().replace(' ', '_')}`)
  };

  render() {
    return (
      <div className={styles.container}>
        <Link to={'/categories/popular'}>
          <button className={styles.item} onClick={this.get} value="popular" type="button">Trending</button>
        </Link>
        <Link to={'/categories/top_rated'}>
          <button className={styles.item} onClick={this.get} value="top_rated" type="button">Top Rated</button>
        </Link>
        <Link to={'/categories/upcoming'}>
          <button className={styles.item} onClick={this.get} value="upcoming" type="button">Coming Soon</button>
        </Link>
          <select className={styles.item} onChange={this.log}>
            {genres.map(item =>
              <option value={item.id} key={item.id} data-name={item.name}>
                {item.name}
              </option>)}
          </select>
      </div>
    );
  }
};

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
  }),
)(Categories));

Categories.propTypes = {
  onGetCategoryMovie: PropTypes.func.isRequired,
  onGetDropdownMovie: PropTypes.func.isRequired,
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};
