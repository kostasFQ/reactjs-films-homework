import { hot } from 'react-hot-loader';
import React from 'react';
import './styles.scss';
import Content from '../Content';

const App = () => (
  <div>
    <Content />
  </div>
);

export default hot(module)(App);
