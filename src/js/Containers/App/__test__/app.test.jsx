import React from 'react';
import renderer from 'react-test-renderer';
import App from '../index';

test('test component render', () => {
  const render = renderer.create(
    <App />,
  );
  const component = render.toJSON();

  expect(component).toMatchSnapshot();
  expect(component.type).toBe('div');
});
