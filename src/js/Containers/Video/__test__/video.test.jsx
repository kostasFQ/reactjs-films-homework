import React from 'react';
import { Provider } from 'react-redux';
import TestRenderer from 'react-test-renderer';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { movie } from '../../../../../configs/jest/__mocks__/mockStore';
import Video from '../index';

const mockStore = configureMockStore([thunk]);


test('1.test VIDEO component render', () => {
  const initialState = { movie };
  const store = mockStore(initialState);
  const testRenderer = TestRenderer.create(
    <Provider store={store}><Video /></Provider>,
  );
  const result = testRenderer.toJSON();

  expect(result.type).toBe('div');
  expect(result).toMatchSnapshot();
});

test('2.test VIDEO component button', () => {
  const initialState = { movie };
  const store = mockStore(initialState);
  const testRenderer = TestRenderer.create(
    <Provider store={store}><Video /></Provider>,
  );
  const testInstance = testRenderer.root;

  const button = testInstance.findByType('button');
  button.props.onClick();
});

test('3.test VIDEO component trailer', () => {
  const initialState = { movie : {...movie, trailer: 'qqq'} };
  const store = mockStore(initialState);

  const testRenderer = TestRenderer.create(
    <Provider store={store}><Video /></Provider>,
  );
  const result = testRenderer.toJSON();

  expect(result.type).toBe('div');
  expect(result).toMatchSnapshot();
});