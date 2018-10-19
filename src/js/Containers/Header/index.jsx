import React from 'react';
import PropTypes from 'prop-types';
import s from './header.scss';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
  }

  send = (e) => {
    const { getMovie } = this.props;
    e.preventDefault();
    getMovie(this.textInput.current.value);
    this.textInput.current.value = '';
  }

  render() {
    return (
      <div className={s.container}>
        <h1 className={s.title}>FILMS</h1>
        <form onSubmit={this.send}>
          <input className={s.input} type="text" placeholder="search" ref={this.textInput} />
        </form>
      </div>
    );
  }
}
export default Header;

Header.propTypes = {
  getMovie: PropTypes.func.isRequired,
};
