import React from 'react';
import TestRenderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import App from '../index';

import { movie } from '../../../../../configs/jest/__mocks__/mockStore';

const mockStore = configureMockStore([thunk]);
const initialState = { movie };
const store = mockStore(initialState);


test('1.test APP component render', () => {
  const testRenderer = TestRenderer.create(
    <Provider store={store}>
      <StaticRouter location="/main" context={{}}>
        <App store={store} />
      </StaticRouter>
    </Provider>,
  );
  const result = testRenderer.toJSON();

  expect(result.type).toBe('div');
  expect(result).toMatchSnapshot();
});
