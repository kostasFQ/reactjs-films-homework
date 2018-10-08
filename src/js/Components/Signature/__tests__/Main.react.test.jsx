import React from 'react';
import renderer from 'react-test-renderer';
import Main from '../Main';

test('test component', () => {
  const render = renderer.create(
    <Main name="KST" />,
  );

  const component = render.toJSON();

  expect(component).toMatchSnapshot();
  expect(component.type).toBe('div');
  expect.objectContaining({
    className: 'content',
  });
  expect.objectContaining({
    children: expect.any(Object),
  });
});
