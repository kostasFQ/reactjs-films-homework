import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import s from './categories.scss';
import { genres } from '../../../assets/genres';

import { getCategoryMovie, getDropdownMovie } from '../../actions/movie';

const Categories = (props) => {
  const get = (e) => {
    const { onGetCategoryMovie } = props;
    onGetCategoryMovie(e.target.value);
  };

  const log = (e) => {
    const { onGetDropdownMovie } = props;
    onGetDropdownMovie(e.target.value);
  };

  return (
    <div className={s.container}>
      <button className={s.item} onClick={get} value="popular" type="button">Trending</button>
      <button className={s.item} onClick={get} value="top_rated" type="button">Top Rated</button>
      <button className={s.item} onClick={get} value="upcoming" type="button">Coming Soon</button>
      <select className={s.item} onChange={log}>
        {genres.map(item => <option value={item.id} key={item.id}>{item.name}</option>)}
      </select>
    </div>
  );
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
