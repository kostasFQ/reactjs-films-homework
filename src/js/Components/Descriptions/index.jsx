import React from 'react';
import s from './descriptions.scss';
import Details from '../Details';
import PropTypes from 'prop-types';

const Descriptions = (props) => {
  return (
    <div className={s.container}>
      <div className={s.div}>
        <Details {...props}/>
      </div>
      <div className={s.div}>
        <div>DESCRIPTION</div>
        <div>DE</div>
      </div>
    </div>
  )
};

export default Descriptions;

Descriptions.propTypes = {
  title: PropTypes.string.isRequired,
};