import React from 'react';
import PropTypes from 'prop-types';
import Poster from '../../Components/Poster';
import Descriptions from '../../Components/Descriptions';

const MovieDetailsPage = (props) => {
  const { pict } = props;
  return (
    <div>
      <Poster pict={pict} />
      <Descriptions {...props} />
    </div>
  );
};

export default MovieDetailsPage;

MovieDetailsPage.propTypes = {
  pict: PropTypes.string.isRequired,
};
