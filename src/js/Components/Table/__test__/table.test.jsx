import React from 'react';
import { Provider } from 'react-redux';
import TestRenderer from 'react-test-renderer';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { movie } from '../../../../../configs/jest/__mocks__/mockStore';
import Table from '../index';

const falseFields = {
  ...movie,
  fullResponse: false,
  finishFetch: false,
};

const startAdvanceFetch = {
  ...movie,
  startAdvanceFetch: true,
};

const mockStore = configureMockStore([thunk]);

const initialState = { movie };
const store = mockStore(initialState);

const initialStateFalse = { movie: falseFields };
const storeFalse = mockStore(initialStateFalse);

const initialStateAdvance = { movie: startAdvanceFetch };
const storeFalseAdvance = mockStore(initialStateAdvance);

test('1.test TABLE component render (rows = true)', () => {
  const testRenderer = TestRenderer.create(
    <Provider store={store}><Table rows /></Provider>,
  );
  const result = testRenderer.toJSON();

  expect(result.type).toBe('div');
  expect(result).toMatchSnapshot();
});

test('2.test TABLE component render (rows = false)', () => {
  const testRenderer = TestRenderer.create(
    <Provider store={store}><Table rows={false} /></Provider>,
  );
  const result = testRenderer.toJSON();

  expect(result.type).toBe('div');
  expect(result).toMatchSnapshot();
});

test('3.test TABLE component render (rows = false)', () => {
  const testRenderer = TestRenderer.create(
    <Provider store={storeFalse}><Table rows={false} /></Provider>,
  );
  const result = testRenderer.toJSON();

  expect(result.type).toBe('div');
  expect(result).toMatchSnapshot();
});

test('4.test TABLE component render (rows = false)', () => {
  const testRenderer = TestRenderer.create(
    <Provider store={storeFalseAdvance}><Table rows={false} /></Provider>,
  );
  const result = testRenderer.toJSON();

  expect(result.type).toBe('div');
  expect(result).toMatchSnapshot();
});
