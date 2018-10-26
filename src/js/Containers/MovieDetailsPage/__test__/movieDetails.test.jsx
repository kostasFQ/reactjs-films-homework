import React from 'react';
import { Provider } from 'react-redux';
import TestRenderer from 'react-test-renderer';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { movie } from '../../../../../configs/jest/__mocks__/mockStore';
import ConnectedMovieDetailsPage from '../index';

const movie2 = {
  startFetch: false,
  finishFetch: true,
  trailerWindow: false,
  currentUrl: 'https://api.themoviedb.org/3/search/movie?api_key=3a2531498f834486708efbfa60ac046b&language=en-US&include_adult=false&query=sdfsdfsdf&page=1',
  fullResponse: [],
};
const movie3 = {};

const mStore = configureMockStore([thunk]);

const initialState = { movie };
const initialState2 = { movie: movie2 };
const initialState3 = { movie: movie3 };

const store = mStore(initialState);
const store2 = mStore(initialState2);
const store3 = mStore(initialState3);

test('1.test MOVIE DETAILS PAGE component render', () => {
  const testRenderer = TestRenderer.create(
    <Provider store={store}><ConnectedMovieDetailsPage /></Provider>,
  );
  const result = testRenderer.toJSON();
  expect(result.type).toBe('div');
  expect(result).toMatchSnapshot();
});

test('2.test MOVIE DETAILS PAGE component render', () => {
  const testRenderer = TestRenderer.create(
    <Provider store={store2}><ConnectedMovieDetailsPage /></Provider>,
  );
  const result = testRenderer.toJSON();
  expect(result.type).toBe('div');
  expect(result).toMatchSnapshot();
});

test('3.test MOVIE DETAILS PAGE component render', () => {
  const testRenderer = TestRenderer.create(
    <Provider store={store3}><ConnectedMovieDetailsPage /></Provider>,
  );
  const result = testRenderer.toJSON();
  expect(result.type).toBe('div');
  expect(result).toMatchSnapshot();
});
