import React from 'react';
import Main from '../Main';
import renderer from 'react-test-renderer';

test('test component', () => {
  const render = renderer.create(
    <Main name='KST'/>
  );

  const component = render.toJSON();
  console.log(render.toJSON().children);

  expect(component).toMatchSnapshot();
  expect(component.type).toBe('div');
  expect.objectContaining({
    className: 'content'
  })
  expect.objectContaining({
    children: expect.any(Object)
  })
})
