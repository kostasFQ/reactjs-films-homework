import React from 'react';
import { Provider } from 'react-redux';
import TestRenderer from 'react-test-renderer';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { StaticRouter } from 'react-router-dom';
import { movie } from '../../../../../configs/jest/__mocks__/mockStore';
import Header from '../index';

const mockStore = configureMockStore([thunk]);

const movie2 = {
  startFetch: false,
  finishFetch: true,
  trailerWindow: false,
  currentUrl: 'https://api.themoviedb.org/3/search/movie?api_key=3a2531498f834486708efbfa60ac046b&language=en-US&include_adult=false&query=sdfsdfsdf&page=1',
  fullResponse: [],
  queryString: 'xxx',
}

const initialState = { movie };
const initialState2 = { movie: movie2 };
const store = mockStore(initialState);
const store2 = mockStore(initialState2);


const getMovie = film => film;
const toMain = film => film;

test('1.test HEADER component render', () => {
  const testRenderer = TestRenderer.create(
    <Provider store={store}>
      <StaticRouter location="/main" context={{}}>
        <Header getMovie={getMovie} toMain={toMain} />
      </StaticRouter>
    </Provider>,
  );
  const result = testRenderer.toJSON();

  expect(result.type).toBe('div');
  expect(result).toMatchSnapshot();
});

test('2.test HEADER component search', () => {
  const e = { target: { value: 'test value' }, preventDefault: () => {} };
  const testRenderer = TestRenderer.create(
    <Provider store={store}>
      <StaticRouter location="/main" context={{}}>
        <Header getMovie={getMovie} toMain={toMain} />
      </StaticRouter>
    </Provider>,
  );
  const testInstance = testRenderer.root;

  const inp = testInstance.findByType('input');
  inp.props.onChange(e);

  const form = testInstance.findByType('form');
  form.props.onSubmit(e);
});

test('3.test HEADER component input', () => {
  const e = { target: { value: 'test value' }, preventDefault: () => {} };
  const testRenderer = TestRenderer.create(
    <Provider store={store2}>
      <StaticRouter location="/main" context={{}}>
        <Header getMovie={getMovie} toMain={toMain} />
      </StaticRouter>
    </Provider>,
  );
  const testInstance = testRenderer.root;

  const inp = testInstance.findByType('input');
  inp.props.onChange(e);

  const form = testInstance.findByType('form');
  form.props.onSubmit(e);
});

test('4.test HEADER component title', () => {
  const e = { preventDefault: () => {} };
  const testRenderer = TestRenderer.create(
    <Provider store={store}>
      <StaticRouter location="/main" context={{}}>
        <Header getMovie={getMovie} toMain={toMain} />
      </StaticRouter>
    </Provider>,
  );
  const testInstance = testRenderer.root;

  const inp = testInstance.findByProps({ className: 'title' });
  inp.props.onClick(e);
});
