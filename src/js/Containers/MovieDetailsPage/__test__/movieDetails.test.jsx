import React from 'react';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import ConnectedMovieDetailsPage from '../index';


const t1 = {
  startFetch: true,
  fetched: false,
  movie: {
    film: {vote_count: 4424,
    id: 278927,
    video: false,
    vote_average: 6.8,
    title: 'The Jungle Book',
    popularity: 12.258,
    poster_path: '/vOipe2myi26UDwP978hsYOrnUWC.jpg',
    original_language: 'en',
    original_title: 'The Jungle Book',
    genre_ids: [
      12,
      18,
      10751,
      14,
      16,
    ],
    backdrop_path: '/eIOTsGg9FCVrBc4r2nXaV61JF4F.jpg',
    adult: false,
    overview: 'A man-cub named Mowgli fostered by wolves. After a threat from the tiger Shere Khan, Mowgli is forced to flee the jungle, by which he embarks on a journey of self discovery with the help of the panther, Bagheera and the free-spirited bear, Baloo.',
    release_date: '2016-04-07'
  }
  },
};
const t2 = {
  startFetch: true,
  fetched: true,
  movie: {
    film: {vote_count: 4424,
    id: 278927,
    video: false,
    vote_average: 6.8,
    title: 'The Jungle Book',
    popularity: 12.258,
    poster_path: '/vOipe2myi26UDwP978hsYOrnUWC.jpg',
    original_language: 'en',
    original_title: 'The Jungle Book',
    genre_ids: [
      12,
      18,
      10751,
      14,
      16,
    ],
    backdrop_path: '/eIOTsGg9FCVrBc4r2nXaV61JF4F.jpg',
    adult: false,
    overview: 'A man-cub named Mowgli fostered by wolves. After a threat from the tiger Shere Khan, Mowgli is forced to flee the jungle, by which he embarks on a journey of self discovery with the help of the panther, Bagheera and the free-spirited bear, Baloo.',
    release_date: '2016-04-07'
  }
  },
};

const mockStore = configureStore();
const store1 = mockStore(t1);
const store2 = mockStore(t2);

test('test component 1', () => {
  const render = renderer.create(
    <ConnectedMovieDetailsPage store={store1} />,
  );

  const component = render.toJSON();
  expect(component).toMatchSnapshot();
});

test('test component 2', () => {
  const render = renderer.create(
    <ConnectedMovieDetailsPage store={store2} />,
  );

  const component = render.toJSON();
  expect(component).toMatchSnapshot();
});
