import React from 'react';
import renderer from 'react-test-renderer';
import Rating from '../index';

test('test component render (rating is correct)', () => {
  const render = renderer.create(
    <Rating rating={5} />,
  );
  const component = render.toJSON();

  expect(component).toMatchSnapshot();
  expect(component.type).toBe('div');
});

test('test component render (rating is incorrect)', () => {
  const render = renderer.create(
    <Rating rating={8} />,
  );
  const component = render.toJSON();

  expect(component).toMatchSnapshot();
  expect(component.type).toBe('div');
});
