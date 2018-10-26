import React from 'react';
import { Provider } from 'react-redux';
import TestRenderer from 'react-test-renderer';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { movie } from '../../../../../configs/jest/__mocks__/mockStore';
import ConnectedCategories from '../index';

import { getCategoryMovie, getDropdownMovie } from '../../../actions/movie';

const initialState = { movie };
const mStore = configureMockStore([thunk]);
const store = mStore(initialState);

test('test CONTENT component render', () => {
  const testRenderer = TestRenderer.create(
    <Provider store={store}><ConnectedCategories /></Provider>,
  );
  const result = testRenderer.toJSON();
  expect(result.type).toBe('div');
  expect(result).toMatchSnapshot();
});


test('getCategoryMovie in CONTENT', async () => {
  await store.dispatch(getCategoryMovie('popular'));
  expect(store.getActions()[0].type).toBe('START_FETCH');
  expect(store.getActions()[1].type).toBe('SAVE_URL');
  expect(store.getActions()[2].type).toBe('GET_TRADING');
  expect(store.getActions()[3].type).toBe('FINISH_FETCH');
});

test('getDropdownMovie in CONTENT', async () => {
  await store.dispatch(getDropdownMovie(28));
  expect(store.getActions()[0].type).toBe('START_FETCH');
  expect(store.getActions()[1].type).toBe('SAVE_URL');
  expect(store.getActions()[2].type).toBe('GET_TRADING');
  expect(store.getActions()[3].type).toBe('FINISH_FETCH');
});
