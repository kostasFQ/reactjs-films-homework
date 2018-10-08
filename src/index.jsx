import React from 'react';
import ReactDOM from 'react-dom';
import Main from './js/Components/Signature/Main';

ReactDOM.render(
  <Main name="KST" />,
  document.getElementById('APP'), // eslint-disable-line no-undef
);

if (typeof (module.hot) !== 'undefined') { // eslint-disable-line no-undef
  module.hot.accept(); // eslint-disable-line no-undef
}
