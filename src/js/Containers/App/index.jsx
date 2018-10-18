import { hot } from 'react-hot-loader';
import React from 'react';
import './styles.scss';
import Content from '../Content';

const App = () => (
  <React.Fragment>
    <Content/>
  </React.Fragment>
);

export default hot(module)(App);
