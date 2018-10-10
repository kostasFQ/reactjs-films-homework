import { hot } from 'react-hot-loader';
import React from 'react';
import './styles.scss';
import Header from '../Header';

const App = () => (
  <div>
      <Header/>
  </div>
);

export default hot(module)(App);
