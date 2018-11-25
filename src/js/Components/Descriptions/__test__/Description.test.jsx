import React from 'react';
import TestRenderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Description from '../index';
import { movie } from '../../../../../configs/jest/__mocks__/mockStore';
import { asyncShowTrailer } from '../../../actions/movie';

const film = {
  vote_count: 1576,
  id: 335983,
  video: false,
  vote_average: 6.6,
  title: 'Venom',
  popularity: 371.566,
  poster_path: '/2uNW4WbgBXL25BAbXGLnLqX71Sw.jpg',
  original_language: 'en',
  original_title: 'Venom',
  genre_ids: [
    878,
    28,
    80,
    28,
    27,
  ],
  backdrop_path: '/VuukZLgaCrho2Ar8Scl9HtV3yD.jpg',
  adult: false,
  overview: 'When Eddie Brock acquires the powers of a symbiote, he will have to release his alter-ego "Venom" to save his life.',
  release_date: '2018-10-03',
};

const initialState = { movie };
const mStore = configureMockStore([thunk]);
const store = mStore(initialState);

jest.mock('../../../actions/movie', () => ({
  asyncShowTrailer: jest.fn(() => ({ type: 'GET_MOVIE', payload: 1 })),
}));

describe('DESCRIPTION', () => {
  afterAll(() => {
    jest.resetAllMocks();
  });

  it('test DESCRIPTION component', () => {
    const testRenderer = TestRenderer.create(
      <Provider store={store}><Description {...film} /></Provider>,
    );

    const result = testRenderer.toJSON();
    expect(result.type).toBe('div');
    expect(result).toMatchSnapshot();
  });


  it('test DESCRIPTION component click "show trailer"', () => {
    const testRenderer = TestRenderer.create(
      <Provider store={store}><Description {...film} /></Provider>,
    );
    const testInstance = testRenderer.root;

    const but = testInstance.findByProps({ name: 'Watch Now' });
    but.props.action();
    expect(asyncShowTrailer).toHaveBeenCalled();
  });

  it('test DESCRIPTION component click "View Info"', () => {
    const testRenderer = TestRenderer.create(
      <Provider store={store}><Description {...film} /></Provider>,
    );
    const testInstance = testRenderer.root;

    const but = testInstance.findByProps({ name: 'View Info' });
    but.props.action();

    const result = testRenderer.toJSON();
    expect(result).toMatchSnapshot();
  });
});
