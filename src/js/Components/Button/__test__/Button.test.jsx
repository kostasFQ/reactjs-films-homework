import React from 'react';
import renderer from 'react-test-renderer';
import Button from '../index';

test('test component', () => {
  const render = renderer.create(
    <Button name="button" />,
  );
  const component = render.toJSON();

  expect(component).toMatchSnapshot();
  expect(component.type).toBe('button');
});
