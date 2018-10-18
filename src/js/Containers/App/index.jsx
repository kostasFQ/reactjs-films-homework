import { hot } from 'react-hot-loader';
import React from 'react';
import './styles.scss';
import Header from '../Header';
import MovieDetailsPage from '../MovieDetailsPage';
import List from '../List';


const App = () => (
  <React.Fragment>
    <Header />
    <MovieDetailsPage />
    <List />
  </React.Fragment>
);

export default hot(module)(App);
