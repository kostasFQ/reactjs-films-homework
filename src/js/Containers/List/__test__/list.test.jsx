import React from 'react';
import { Provider } from 'react-redux';
import TestRenderer from 'react-test-renderer';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { StaticRouter } from 'react-router-dom';
import { movie } from '../../../../../configs/jest/__mocks__/mockStore';
import List from '../index';

const mockStore = configureMockStore([thunk]);

const initialState = { movie };
const store = mockStore(initialState);

test('1.test LIST component render', () => {
  const testRenderer = TestRenderer.create(
    <Provider store={store}>
      <StaticRouter location='/main' context={{}}>
        <List />
      </StaticRouter>
    </Provider>,
  );
  const result = testRenderer.toJSON();

  expect(result.type).toBe('div');
  expect(result).toMatchSnapshot();
});

test('2.test LIST component render rows button', () => {
  const testRenderer = TestRenderer.create(
    <Provider store={store}>
      <StaticRouter location='/main' context={{}}>
        <List />
      </StaticRouter>
    </Provider>,
  );
  const testInstance = testRenderer.root;
  const button = testInstance.findByProps({ className: 'conf' });
  button.props.onClick();
});

test('3.test LIST component render colums button', () => {
  const testRenderer = TestRenderer.create(
    <Provider store={store}>
      <StaticRouter location='/main' context={{}}>
        <List />
      </StaticRouter>
    </Provider>,
  );
  const testInstance = testRenderer.root;
  const button = testInstance.findByProps({ className: 'displayStyle' });
  button.children[0].props.onClick();
});
