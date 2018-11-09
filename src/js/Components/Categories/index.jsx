import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from './categories.scss';
import { genres } from '../../../assets/genres';
import { Link } from 'react-router-dom';

import { getCategoryMovie, getDropdownMovie } from '../../actions/movie';

class Categories extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      genre: ''
    }
  }
  get = (e) => {
    const { onGetCategoryMovie } = this.props;
    onGetCategoryMovie(e.target.value);
  };

  log = (e) => {
    this.setState({genre: e.target.options[e.target.selectedIndex].dataset.name.toLowerCase() })
    const { onGetDropdownMovie } = this.props;
    onGetDropdownMovie(e.target.value);
  };

  render() {
    const { genre } = this.state;
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
        <Link to={`/genre/${genre.replace(' ', '_')}`}>
          <select className={styles.item} onChange={this.log}>
            {genres.map(item =>
              <option value={item.id} key={item.id} data-name={item.name}>
                {item.name}
              </option>)}
          </select>
        </Link>
      </div>
    );
  }
};

export default connect(
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
)(Categories);

Categories.propTypes = {
  onGetCategoryMovie: PropTypes.func.isRequired,
  onGetDropdownMovie: PropTypes.func.isRequired,
};
