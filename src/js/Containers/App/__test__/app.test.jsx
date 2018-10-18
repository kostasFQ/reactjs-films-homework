import React from 'react';
import renderer from 'react-test-renderer';
import App from '../index';
import { Provider } from 'react-redux';
import reduser from '../../../redusers';
import { createStore } from 'redux';

const store = createStore(reduser);
test('test component render', () => {
  const render = renderer.create(
    <Provider store={store}>
      <App />
    </Provider>,
  );
  const component = render.toJSON();

  expect(component).toMatchSnapshot();
});
