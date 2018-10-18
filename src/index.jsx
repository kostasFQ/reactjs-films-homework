import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import App from './js/Containers/App';
import reduser from './js/redusers';

const store = createStore(reduser, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('APP'),
);
