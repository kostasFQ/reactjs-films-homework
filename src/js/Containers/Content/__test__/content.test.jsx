import React from 'react';
import { Provider } from 'react-redux';
import TestRenderer from 'react-test-renderer';
import configureMockStore from 'redux-mock-store';
import { StaticRouter } from 'react-router-dom';
import thunk from 'redux-thunk';
import { movie } from '../../../../../configs/jest/__mocks__/mockStore';
import ConnectedContent from '../index';
import Header from '../../Header';

const mStore = configureMockStore([thunk]);


test('1.test CONTENT component render', () => {
  const initialState = { movie };
  const store = mStore(initialState);

  const testRenderer = TestRenderer.create(
    <Provider store={store}>
      <StaticRouter location="/main" context={{}}>
        <ConnectedContent />
      </StaticRouter>
    </Provider>,
  );
  const result = testRenderer.toJSON();

  expect(result.type).toBe('div');
  expect(result).toMatchSnapshot();
});

test('2.test CONTENT component render', () => {
  const initialState = { movie: { ...movie, trailerWindow: true } };
  const store = mStore(initialState);

  const testRenderer = TestRenderer.create(
    <Provider store={store}>
      <StaticRouter location="/main" context={{}}>
        <ConnectedContent />
      </StaticRouter>
    </Provider>,
  );
  const result = testRenderer.toJSON();
  expect(result.type).toBe('div');
});

test('3.test CONTENT component scroll', () => {
  const initialState = { movie };
  const store = mStore(initialState);

  const eventMap = {};

  window.addEventListener = jest.fn((event, cb) => {
    eventMap[event] = cb;
  });
  Object.defineProperty(window.document.body, 'scrollHeight', {
    writable: true,
    value: 500,
  });
  Object.defineProperty(window.document.documentElement, 'clientHeight', {
    writable: true,
    value: 500,
  });
  Object.defineProperty(window, 'scrollY', {
    writable: true,
    value: 600,
  });
  TestRenderer.create(
    <Provider store={store}>
      <StaticRouter location="/main" context={{}}>
        <ConnectedContent />
      </StaticRouter>
    </Provider>,
  );
  eventMap.scroll();
});

test('3.1.test CONTENT component scroll', () => {
  const initialState = { movie };
  const store = mStore(initialState);

  const eventMap = {};

  window.addEventListener = jest.fn((event, cb) => {
    eventMap[event] = cb;
  });
  Object.defineProperty(window.document.body, 'scrollHeight', {
    writable: true,
    value: 500,
  });
  Object.defineProperty(window.document.documentElement, 'clientHeight', {
    writable: true,
    value: 500,
  });
  Object.defineProperty(window, 'scrollY', {
    writable: true,
    value: 0,
  });
  TestRenderer.create(
    <Provider store={store}>
      <StaticRouter location="/main" context={{}}>
        <ConnectedContent />
      </StaticRouter>
    </Provider>,
  );
  eventMap.scroll();
});

test('4.test CONTENT component unmount', () => {
  const initialState = { movie };
  const store = mStore(initialState);

  const testRenderer = TestRenderer.create(
    <Provider store={store}>
      <StaticRouter location="/main" context={{}}>
        <ConnectedContent />
      </StaticRouter>
    </Provider>,
  );
  testRenderer.unmount();
});

test('5.test CONTENT component search', () => {
  const e = { target: { value: 'x' }, preventDefault: () => 'x' };
  const initialState = { movie };
  const store = mStore(initialState);

  const testRenderer = TestRenderer.create(
    <Provider store={store}>
      <StaticRouter location="/main" context={{}}>
        <ConnectedContent />
      </StaticRouter>
    </Provider>,
  );
  const testInstance = testRenderer.root;

  const b = testInstance.findByType('form');
  b.props.onSubmit(e);
});

test('6.test CONTENT component toMain', () => {
  const initialState = { movie };
  const store = mStore(initialState);

  const testRenderer = TestRenderer.create(
    <Provider store={store}>
      <StaticRouter location="/main" context={{}}>
        <ConnectedContent />
      </StaticRouter>
    </Provider>,
  );
  const testInstance = testRenderer.root;

  const b = testInstance.findByType(Header);
  b.props.toMain();
});

test('7.test CONTENT component route={/main}', () => {
  const initialState = { movie };
  const store = mStore(initialState);

  const testRenderer = TestRenderer.create(
    <Provider store={store}>
      <StaticRouter location="/main" context={{}}>
        <ConnectedContent />
      </StaticRouter>
    </Provider>,
  );
  const testInstance = testRenderer.root;

  const b = testInstance.findByType(Header);
  b.props.getMovie();
});

test('7.1.test CONTENT component route={/}', () => {
  const initialState = { movie };
  const store = mStore(initialState);

  const testRenderer = TestRenderer.create(
    <Provider store={store}>
      <StaticRouter location="/" context={{}}>
        <ConnectedContent />
      </StaticRouter>
    </Provider>,
  );
  const testInstance = testRenderer.root;

  const b = testInstance.findByType(Header);
  b.props.getMovie();
});

test('8.test CONTENT component route={/categories/popular}', () => {
  const initialState = { movie };
  const store = mStore(initialState);

  const testRenderer = TestRenderer.create(
    <Provider store={store}>
      <StaticRouter location="/categories/popular" context={{}}>
        <ConnectedContent />
      </StaticRouter>
    </Provider>,
  );
  const result = testRenderer.toJSON();

  expect(result.type).toBe('div');
  expect(result).toMatchSnapshot();
});

test('8.test CONTENT component route={/genre/romance}', () => {
  const initialState = { movie };
  const store = mStore(initialState);

  const testRenderer = TestRenderer.create(
    <Provider store={store}>
      <StaticRouter location="/genre/romance" context={{}}>
        <ConnectedContent />
      </StaticRouter>
    </Provider>,
  );
  const result = testRenderer.toJSON();

  expect(result.type).toBe('div');
  expect(result).toMatchSnapshot();
});

test('9.test CONTENT component route={/search?movie=alien}', () => {
  const initialState = { movie };
  const store = mStore(initialState);

  const testRenderer = TestRenderer.create(
    <Provider store={store}>
      <StaticRouter location="/search?movie=alien" context={{}}>
        <ConnectedContent />
      </StaticRouter>
    </Provider>,
  );
  const result = testRenderer.toJSON();

  expect(result.type).toBe('div');
  expect(result).toMatchSnapshot();
});

test('10.test CONTENT component update genre', () => {
  const initialState = { movie };
  const store = mStore(initialState);

  const testRenderer = TestRenderer.create(
    <Provider store={store}>
      <StaticRouter location="/genre/action" context={{}}>
        <ConnectedContent />
      </StaticRouter>
    </Provider>,
  );

  testRenderer.update(
    <Provider store={store}>
      <StaticRouter location="/genre/horror" context={{}}>
        <ConnectedContent />
      </StaticRouter>
    </Provider>,
  );
  const result = testRenderer.toJSON();
  expect(result).toMatchSnapshot();
});

test('11.test CONTENT component update categories', () => {
  const initialState = { movie };
  const store = mStore(initialState);

  const testRenderer = TestRenderer.create(
    <Provider store={store}>
      <StaticRouter location="/categories/popular" context={{}}>
        <ConnectedContent />
      </StaticRouter>
    </Provider>,
  );

  testRenderer.update(
    <Provider store={store}>
      <StaticRouter location="/categories/top_rated" context={{}}>
        <ConnectedContent />
      </StaticRouter>
    </Provider>,
  );
  const result = testRenderer.toJSON();
  expect(result).toMatchSnapshot();
});

test('12.test CONTENT component update to main', () => {
  const initialState = { movie };
  const store = mStore(initialState);

  const testRenderer = TestRenderer.create(
    <Provider store={store}>
      <StaticRouter location="/categories/popular" context={{}}>
        <ConnectedContent />
      </StaticRouter>
    </Provider>,
  );

  testRenderer.update(
    <Provider store={store}>
      <StaticRouter location="/main" context={{}}>
        <ConnectedContent />
      </StaticRouter>
    </Provider>,
  );
  const result = testRenderer.toJSON();
  expect(result).toMatchSnapshot();
});

test('13.test CONTENT component update search=', () => {
  const initialState = { movie };
  const store = mStore(initialState);

  const testRenderer = TestRenderer.create(
    <Provider store={store}>
      <StaticRouter location="/categories/popular" context={{}}>
        <ConnectedContent />
      </StaticRouter>
    </Provider>,
  );

  testRenderer.update(
    <Provider store={store}>
      <StaticRouter location="/search?movie=alien" context={{}}>
        <ConnectedContent />
      </StaticRouter>
    </Provider>,
  );
  const result = testRenderer.toJSON();
  expect(result).toMatchSnapshot();
});
