import React from 'react';
// import PropTypes from 'prop-types';
import s from './list.scss';
import Categories from '../../Components/Categories';
import Table from '../../Components/Table';

const List = () => (
  <div className={s.container}>
    <div className={s.inner}>
      <div className={s.position}>
        <Categories />
        <div className={s.displayStyle}>
          <div className={s.tableStyle} />
          <div className={s.rowsStyle} />
        </div>
      </div>
      <Table />
    </div>
  </div>
);

export default List;

/* Details.propTypes = {
  title: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  duration: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
}; */
