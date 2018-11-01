import React from 'react';
import PropTypes from 'prop-types';
import s from './header.scss';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      str: '',
    };
  }

  toState = (e) => {
    this.setState({ str: e.target.value });
  }

  send = (e) => {
    const { getMovie } = this.props;
    const { str } = this.state;
    e.preventDefault();
    getMovie(str);
    this.setState({ str: '' });
  }

  render() {
    const { str } = this.state;
    return (
      <div className={s.container}>
        <h1 className={s.title}>FILMS</h1>
        <form onSubmit={this.send}>
          <input className={s.input} value={str} type="text" placeholder="search" onChange={this.toState} />
        </form>
      </div>
    );
  }
}
export default Header;

Header.propTypes = {
  getMovie: PropTypes.func.isRequired,
};
