import React from 'react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import s from './header.scss';
import icon from '../../../imgs/icons/search-3-32.png';
import { setQueryString } from '../../actions/movie';

class Header extends React.Component {

  toState = (e) => {
    const { onSetQueryString } = this.props;
    onSetQueryString(e.target.value)
  }

  send = (e) => {
    const { getMovie, history, movie } = this.props;
    const { queryString } = movie;
    e.preventDefault();
    if (queryString) {
      history.push(`/search?movie=${queryString.replace(' ', '+')}`);
      getMovie(queryString);
    }
  }

  linkToMain = (e) => {
    e.preventDefault();
    const { toMain, history } = this.props;
    history.push('/main');
    toMain();
  }

  render() {
    const {  movie } = this.props;
    const { queryString } = movie;
    return (
      <div className={s.container}>
        <Link to="/main" className={s.title} onClick={this.linkToMain}>FILMS</Link>
        <form onSubmit={this.send} className={s.form}>
          <input className={s.input} value={queryString} type="text" placeholder="search" onChange={this.toState} />
          <button type="submit" className={s.button}><img src={icon} width="16px" alt="search" /></button>
        </form>
      </div>
    );
  }
}
export default withRouter( connect(
  state => ({
    movie: state.movie,
  }),
  dispatch => ({
    onSetQueryString: (value) => {
      dispatch(setQueryString(value))
    }
  }),
)(Header));

Header.propTypes = {
  getMovie: PropTypes.func.isRequired,
  onSetQueryString: PropTypes.func.isRequired,
  toMain: PropTypes.func.isRequired,
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  movie: PropTypes.objectOf(PropTypes.any).isRequired,
};
