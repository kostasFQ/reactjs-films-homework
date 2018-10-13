import React from 'react';
import renderer from 'react-test-renderer';
import Poster from '../index';
import pict from '../../../../imgs/cover-image.png';

test('test component', () => {
  const render = renderer.create(
    <Poster pict={pict} />,
  );

  const component = render.toJSON();

  expect(component).toMatchSnapshot();
  expect(component.type).toBe('img');
});
