import React from 'react';
import renderer from 'react-test-renderer';
import Preview from '../index';

test('test component render', () => {
  const render = renderer.create(
    <Preview preview="string" />,
  );
  const component = render.toJSON();

  expect(component).toMatchSnapshot();
  expect(component.type).toBe('div');
});
