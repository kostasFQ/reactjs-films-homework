import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import App from './js/Containers/App';
import reduser from './js/reduser';
import { BrowserRouter as Router } from 'react-router-dom';

const store = createStore(reduser, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('APP'),
);
