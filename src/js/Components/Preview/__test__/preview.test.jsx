import React from 'react';
import renderer from 'react-test-renderer';
import Preview from '../index';

test('test component render', () => {
  const render = renderer.create(
    <Preview preview='string'/>,
  );
  const component = render.toJSON();

  expect(component).toMatchSnapshot();
  expect(component.type).toBe('div');
});

test('test component click', () => {
  const render = renderer.create(
    <Preview preview='string'/>,
  );
  const root = render.getInstance();
  const t = render.root.findByProps({name: "View Info"})
  t.props.action();
  expect(root.state.visible).toBe(true);
});

test('test component double click', () => {
  const render = renderer.create(
    <Preview preview='string'/>,
  );
  const root = render.getInstance();
  const t = render.root.findByProps({name: "View Info"})
  t.props.action();
  t.props.action();
  expect(root.state.visible).toBe(false);
});

