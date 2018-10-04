import React from 'react';
import PropTypes from 'prop-types';


const Main = (props) => {
  return (
    <div className="content">
      <h1>{props.name}</h1>
    </div>
  )
}


Main.propTypes = {
  name: PropTypes.string
};
export default Main