import React from 'react';
import renderer from 'react-test-renderer';
import Description from '../index';

const fakeFilm = {
  pict: 'sss',
  duration: '1h 46m',
  preview: 'There ',
  original_title: 'title',
  genre_ids: [12, 16, 18],
  vote_average: 4.5,
};

test('test component', () => {
  const render = renderer.create(
    <Description {...fakeFilm} />,
  );

  const component = render.toJSON();

  expect(component).toMatchSnapshot();
  expect(component.type).toBe('div');
});
