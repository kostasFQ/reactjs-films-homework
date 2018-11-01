import React from 'react';
import { Provider } from 'react-redux';
import TestRenderer from 'react-test-renderer';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { movie } from '../../../../../configs/jest/__mocks__/mockStore';
import ConnectedContent from '../index';

const mStore = configureMockStore([thunk]);


test('1.test CONTENT component render', () => {
  const initialState = { movie };
  const store = mStore(initialState);
  
  const testRenderer = TestRenderer.create(
    <Provider store={store}><ConnectedContent /></Provider>,
  );
  const result = testRenderer.toJSON();
  expect(result.type).toBe('div');
});

test('2.test CONTENT component render', () => {
  const initialState = { movie: { ...movie, trailerWindow: true } };
  const store = mStore(initialState);

  const testRenderer = TestRenderer.create(
    <Provider store={store}><ConnectedContent /></Provider>,
  );
  const result = testRenderer.toJSON();
  expect(result.type).toBe('div');
});

test('3.test CONTENT component scroll', () => {
  const initialState = { movie };
  const store = mStore(initialState);

  const eventMap = {};

  window.addEventListener = jest.fn((event, cb) => {
    eventMap[event] = cb;
  });
  Object.defineProperty(global.window, 'innerHeight', {
    writable: true,
    value: 1000,
  });
  Object.defineProperty(global.window, 'pageYOffset', {
    writable: true,
    value: 1000,
  });
  Object.defineProperty(global.document.body, 'offsetHeight', {
    writable: true,
    value: 1,
  });
  TestRenderer.create(
    <Provider store={store}>
      <ConnectedContent />
    </Provider>,
  );
  eventMap.scroll();
});

test('4.test CONTENT component unmount', () => {
  const initialState = { movie };
  const store = mStore(initialState);

  const testRenderer = TestRenderer.create(
    <Provider store={store}><ConnectedContent /></Provider>,
  );
  testRenderer.unmount();
});

test('5.test CONTENT component', () => {
  const e = { target: { value: 'x'}, preventDefault: ()=> { console.log('x') } };
  const initialState = { movie };
  const store = mStore(initialState);

  const testRenderer = TestRenderer.create(
    <Provider store={store}><ConnectedContent /></Provider>,
  );
  const testInstance = testRenderer.root;

  const b = testInstance.findByType('form');
  b.props.onSubmit(e);
});
