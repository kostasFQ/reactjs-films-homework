import React from 'react';
import { Provider } from 'react-redux';
import ConnectedContent from '../index';
import TestRenderer from 'react-test-renderer';
import configureMockStore from 'redux-mock-store';
import {movie} from '../../../../../configs/jest/__mocks__/mockStore';
import thunk from 'redux-thunk';

const initialState = {movie};
const mStore = configureMockStore([thunk]);
const store = mStore(initialState);

test('test CONTENT component render', () => {
  const testRenderer = TestRenderer.create(
    <Provider store={store}><ConnectedContent /></Provider>
  );
  const result = testRenderer.toJSON();
  expect(result.type).toBe('div');
});
