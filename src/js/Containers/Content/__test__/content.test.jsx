import React from 'react';
import { Provider } from 'react-redux';
import TestRenderer from 'react-test-renderer';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { movie } from '../../../../../configs/jest/__mocks__/mockStore';
import ConnectedContent from '../index';

const initialState = { movie };
const mStore = configureMockStore([thunk]);
const store = mStore(initialState);

test('1.test CONTENT component render', () => {
  const testRenderer = TestRenderer.create(
    <Provider store={store}><ConnectedContent /></Provider>,
  );
  const result = testRenderer.toJSON();
  expect(result.type).toBe('div');
});
