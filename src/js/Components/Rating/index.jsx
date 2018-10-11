import React from 'react';
import PropTypes from 'prop-types';
import s from './rating.scss';

const Rating = (props) => {
  const { rating } = props;
  
};

export default Rating;

Rating.propTypes = {
  rating: PropTypes.string.isRequired,
};
