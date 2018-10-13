import React from 'react';
import renderer from 'react-test-renderer';
import Description from '../index';

const fakeFilm = {
  pict: 'sss',
  title: 'The jungle book',
  genres: ['Adventure', 'Drama', 'Family', 'Fantasy'],
  duration: '1h 46m',
  rating: 4.8,
  preview: 'There ',
};

test('test component', () => {
  const render = renderer.create(
    <Description {...fakeFilm} />,
  );

  const component = render.toJSON();

  expect(component).toMatchSnapshot();
  expect(component.type).toBe('div');
});
