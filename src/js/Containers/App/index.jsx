import { hot } from 'react-hot-loader';
import React from 'react';
import Content from '../Content';
import './styles.scss';

const App = () => (
  <div>
    <Content />
  </div>
);

export default hot(module)(App);
