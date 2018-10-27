import React from 'react';
import { Provider } from 'react-redux';
import TestRenderer from 'react-test-renderer';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { movie } from '../../../../../configs/jest/__mocks__/mockStore';
import ConnectedTableItem from '../index';

const initialState = { movie };
const mStore = configureMockStore([thunk]);
const store = mStore(initialState);
const ITEM = {
    vote_count: 1613,
    id: 335983,
    video: false,
    vote_average: 6.6,
    title: 'Venom',
    popularity: 376.826,
    poster_path: '/2uNW4WbgBXL25BAbXGLnLqX71Sw.jpg',
    original_language: 'en',
    original_title: 'Venom',
    genre_ids: [
      878,
      28,
      80,
      28,
      27
    ],
    backdrop_path: '/VuukZLgaCrho2Ar8Scl9HtV3yD.jpg',
    adult: false,
    overview: 'When Eddie Brock acquires the powers of a symbiote, he will have to release his alter-ego "Venom" to save his life.',
    release_date: '2018-10-03'
  };

  // const testInstance = testRenderer.root;
  
test('1.test TABLE_ITEM component render', () => {
  const item = {...ITEM};
  const testRenderer = TestRenderer.create(
    <Provider store={store}><ConnectedTableItem {...item} /></Provider>,
  );
  const result = testRenderer.toJSON();
  expect(result.type).toBe('div');
  expect(result).toMatchSnapshot();
});

test('6.test TABLE_ITEM component render', () => {
  const item = {...ITEM};
  const testRenderer = TestRenderer.create(
    <Provider store={store}><ConnectedTableItem {...item} /></Provider>,
  );
  const testInstance = testRenderer.root;

  const infoBut = testInstance.findByProps({name: "View Info"});
  infoBut.props.action();
  const but = testInstance.findByProps({name: "Watch Now"});
  but.props.action();
});

test('2.test TABLE_ITEM component render', () => {
  const item = {...ITEM, poster_path: undefined};
  const testRenderer = TestRenderer.create(
    <Provider store={store}><ConnectedTableItem {...item} /></Provider>,
  );
  const result = testRenderer.toJSON();
  expect(result.type).toBe('div');
  expect(result).toMatchSnapshot();
});

test('3.test TABLE_ITEM component render', () => {
  const item = {...ITEM, visiblePreview: true};
  const testRenderer = TestRenderer.create(
    <Provider store={store}><ConnectedTableItem {...item} /></Provider>,
  );
  const testInstance = testRenderer.root;
  const but = testInstance.findAllByType('button');
  but[0].props.onClick();
  but[1].props.onClick();
});

test('4.test TABLE_ITEM component render', () => {
  const item = {...ITEM, visiblePreview: false};
  const testRenderer = TestRenderer.create(
    <Provider store={store}><ConnectedTableItem {...item} /></Provider>,
  );
  const testInstance = testRenderer.root;
  const but = testInstance.findByProps({name: "Watch Now"})
  but.props.action();
});

test('5.test TABLE_ITEM component render', () => {
  const item = {...ITEM, poster_path: undefined};
  const testRenderer = TestRenderer.create(
    <Provider store={store}><ConnectedTableItem {...item} /></Provider>,
  );
  const testInstance = testRenderer.root;
  const div = testInstance.find( (el) => el.type === 'div' && el.props.className === 'info'  )
  div.props.onMouseLeave();
});
