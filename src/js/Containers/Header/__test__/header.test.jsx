import React from 'react';
import { Provider } from 'react-redux';
import TestRenderer from 'react-test-renderer';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { movie } from '../../../../../configs/jest/__mocks__/mockStore';
import Header from '../index';

const mockStore = configureMockStore([thunk]);

const initialState = { movie };
const store = mockStore(initialState);

test('1.test HEADER component render', () => {
  const testRenderer = TestRenderer.create(
    <Provider store={store}><Header /></Provider>,
  );
  const result = testRenderer.toJSON();

  expect(result.type).toBe('div');
  expect(result).toMatchSnapshot();
});

test('2.test HEADER component search', () => {
  const e = { preventDefault: () => 'x' };
  const getMovie = film => film;
  const testRenderer = TestRenderer.create(
    <Provider store={store}><Header getMovie={getMovie} /></Provider>,
  );
  const testInstance = testRenderer.root;

  const form = testInstance.findByType('form');
  form.props.onSubmit(e);
});

test('3.test HEADER component input', () => {
  const e = { target: { value: 'x' } };
  const testRenderer = TestRenderer.create(
    <Provider store={store}><Header /></Provider>,
  );
  const testInstance = testRenderer.root;

  const inp = testInstance.findByType('input');
  inp.props.onChange(e);
});
