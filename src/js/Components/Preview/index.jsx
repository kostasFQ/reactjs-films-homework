import React from 'react';
import PropTypes from 'prop-types';
import styles from './preview.scss';

const Preview = (props) => {
  const { overview } = props;
  return (
    <div className={styles.container}>
      <div className={styles.buttonsBlock}>
        <div className={styles.previewField}>{overview}</div>
      </div>
    </div>
  );
};

export default Preview;

Preview.propTypes = {
  overview: PropTypes.string.isRequired,
};
