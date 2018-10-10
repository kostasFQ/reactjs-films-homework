import React from 'react';
import s from './header.scss'

const Header = () => {
  return (
    <div className={s.container}>
      <div className={s.inner}>
        <h1>FILMS</h1>
        <div>
          <input className={s.input} type="text" placeholder='search'/>
        </div>
      </div>
    </div>
  );
};
export default Header;