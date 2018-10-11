import React from 'react';
import s from './header.scss';

const Header = () => (
  <div className={s.container}>
    <h1 className={s.title}>FILMS</h1>
    <div>
      <input className={s.input} type="text" placeholder="search" />
    </div>
  </div>
);
export default Header;
