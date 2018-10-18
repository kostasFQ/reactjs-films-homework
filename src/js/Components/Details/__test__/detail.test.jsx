import React from 'react';
import renderer from 'react-test-renderer';
import Details from '../index';

const props = {
  original_title: 'title',
  genre_ids: [12, 16, 18],
  vote_average: 4.5,
};

test('test component', () => {
  const render = renderer.create(
    <Details {...props} />,
  );

  const component = render.toJSON();

  expect(component).toMatchSnapshot();
});
