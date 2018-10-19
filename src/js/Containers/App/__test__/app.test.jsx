import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from '../index';
import reduser from '../../../redusers';


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
