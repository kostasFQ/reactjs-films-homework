import React from 'react';
import PropTypes from 'prop-types';
import s from './header.scss';
import { withRouter, Link } from "react-router-dom";
import icon from '../../../imgs/icons/search-3-32.png'

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      str: ''
    };
  }

  toState = (e) => {
    this.setState({ str: e.target.value });
  }

  send = (e) => {
    const { getMovie, history } = this.props;
    const { str } = this.state;
    e.preventDefault();
    if(str.length > 0) {
      history.push(`/search?movie=${str.replace(' ', '+')}`)
      getMovie(str);
      this.setState({ str: ''});
    }
  }

  linkToMain = (e) => {
    e.preventDefault();
    const { toMain, history } = this.props;
    history.push(`/main`);
    toMain();
  }

  render() {
    const { str } = this.state;
    return (
      <div className={s.container}>
        <Link to={'/main'} className={s.title} onClick={this.linkToMain}>FILMS</Link>
        <form onSubmit={this.send} className={s.form}>
          <input className={s.input} value={str} type="text" placeholder="search" onChange={this.toState} />
          <button type='submit' className={s.button}><img src={icon} width='16px' alt="search"/></button>
        </form>
      </div>
    );
  }
}
export default withRouter(Header);

Header.propTypes = {
  getMovie: PropTypes.func.isRequired,
  toMain: PropTypes.func.isRequired,
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};
