import React from 'react';
import ReactDOM from 'react-dom';
import App from './js/Containers/App';
import 'normalize.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reduser from './js/redusers';
 /* eslint-disable */
const store = createStore(reduser, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
/* eslint-enable */

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('APP'),
);
