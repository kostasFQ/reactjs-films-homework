import React from 'react';
import { Provider } from 'react-redux';
import TestRenderer from 'react-test-renderer';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { movie } from '../../../../../configs/jest/__mocks__/mockStore';
import ConnectedTableItemRow from '../index';

const initialState = { movie };
const mStore = configureMockStore([thunk]);
const store = mStore(initialState);
const ITEM = {
  vote_count: 1613,
  id: 335983,
  video: false,
  vote_average: 6.6,
  title: 'Venom',
  popularity: 376.826,
  poster_path: '/2uNW4WbgBXL25BAbXGLnLqX71Sw.jpg',
  original_language: 'en',
  original_title: 'Venom',
  genre_ids: [
    878,
    28,
    80,
    28,
    27,
  ],
  backdrop_path: '/VuukZLgaCrho2Ar8Scl9HtV3yD.jpg',
  adult: false,
  overview: 'When Eddie Brock acquires the powers of a symbiote, he will have to release his alter-ego "Venom" to save his life.',
  release_date: '2018-10-03',
};

// const testInstance = testRenderer.root;

test('1.test TABLE_ITEM_ROW component render', () => {
  const item = { ...ITEM };
  const testRenderer = TestRenderer.create(
    <Provider store={store}><ConnectedTableItemRow {...item} /></Provider>,
  );
  const result = testRenderer.toJSON();
  expect(result.type).toBe('div');
  expect(result).toMatchSnapshot();
});

test('2.test TABLE_ITEM_ROW component render', () => {
  const item = { ...ITEM, poster_path: undefined };
  const testRenderer = TestRenderer.create(
    <Provider store={store}><ConnectedTableItemRow {...item} /></Provider>,
  );
  const testInstance = testRenderer.root;

  const but = testInstance.findByProps({ name: 'Watch Now' });
  but.props.action();
  const result = testRenderer.toJSON();
  expect(result).toMatchSnapshot();
});
