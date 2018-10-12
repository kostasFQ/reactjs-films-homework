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
  rating: 4.8,
  preview: `There are growing dangers in the wizarding world of 1926 New York.  Something mysterious is leaving a path of destruction in the streets, threatening to expose the wizarding`
}

const App = () => (
  <div>
    <Header/>
    <MovieDetailsPage {...fakeFilm} />
  </div>
);

export default hot(module)(App);
