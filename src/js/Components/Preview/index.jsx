import React from 'react';
import PropTypes from 'prop-types';
import s from './preview.scss';

const Preview = (props) => {
  const { overview } = props;
  return (
    <div className={s.container}>
      <div className={s.buttonsBlock}>
        <div className={s.previewField}>{overview}</div>
      </div>
    </div>
  );
};

export default Preview;

Preview.propTypes = {
  overview: PropTypes.string.isRequired,
};
