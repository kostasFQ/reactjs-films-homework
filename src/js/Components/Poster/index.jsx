import React from 'react';
import PropTypes from 'prop-types';
import s from './poster.scss';

const Poster = (props) => {
  const { pict } = props;
  return (
    <div className={s.curtian}>
      <img src={pict} className={s.poster} alt="pic" />
    </div>
  );
};
export default Poster;

Poster.propTypes = {
  pict: PropTypes.string.isRequired,
};
