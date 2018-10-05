import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.scss';


const Main = (props) => {
  const {name} = props;
  return (
    <div className="content">
      <h2 className={styles.name}>{name}</h2>
    </div>
  )
}

Main.propTypes = {
  name: PropTypes.string.isRequired
};
export default Main