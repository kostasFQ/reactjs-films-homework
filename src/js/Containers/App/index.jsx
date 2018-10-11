import { hot } from 'react-hot-loader';
import React from 'react';
import './styles.scss';
import Header from '../Header';
import MovieDetailsPage from '../MovieDetailsPage';
import image from '../../../imgs/cover-image.png';

const fakeFilm = {
  pict: image,
  title: 'The jungle book',
  genres: ['Adventure', 'Drama', 'Family', 'Fantasy'],
  duration: '1h 46m',
  rating: 4.8
}

const App = () => (
  <div>
    <Header/>
    <MovieDetailsPage {...fakeFilm} />
  </div>
);

export default hot(module)(App);
