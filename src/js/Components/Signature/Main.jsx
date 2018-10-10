import { hot } from 'react-hot-loader';
import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.scss';

const Main = (props) => {
  const { name } = props;
  return (
    <div>
      <h1 className={styles.name}>{name}</h1>
    </div>
  );
};

Main.propTypes = {
  name: PropTypes.string.isRequired,
};
export default hot(module)(Main);
