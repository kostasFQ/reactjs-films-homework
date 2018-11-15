import React from 'react';
import { Provider } from 'react-redux';
import TestRenderer from 'react-test-renderer';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { StaticRouter } from 'react-router-dom';
import { movie } from '../../../../../configs/jest/__mocks__/mockStore';
import { getCategoryMovie, getDropdownMovie } from '../../../actions/movie';
import ConnectedCategories from '../index';


const initialState = { movie };
const mStore = configureMockStore([thunk]);
const store = mStore(initialState);

jest.mock('../../../actions/movie', () => ({
  getCategoryMovie: jest.fn(() => ({ type: 'GET_MOVIE', payload: 1 })),
  getDropdownMovie: jest.fn(() => ({ type: 'GET', payload: 1 })),
}));

const testRenderer = TestRenderer.create(
  <Provider store={store}>
    <StaticRouter location="/main" context={{}}>
      <ConnectedCategories />
    </StaticRouter>
  </Provider>,
);
const testInstance = testRenderer.root;

test('1.test CATEGORIES component render', () => {
  const result = testRenderer.toJSON();
  expect(result.type).toBe('div');
  expect(result).toMatchSnapshot();
});

test('2.test CATEGORIES component render button click', () => {
  const e = { target: { value: 'popular' } };
  const but = testInstance.findByProps({ value: 'popular' });
  but.props.onClick(e);

  expect(getCategoryMovie).toHaveBeenCalled();
});

test('3.test CATEGORIES component render select onChange', () => {
  const e = {
    target: {
      options: [{ dataset: { name: 'Action' } }, { dataset: { name: 'War' } }],
      selectedIndex: 0,
    },
  };
  const but = testInstance.findByType('select');
  but.props.onChange(e);
  expect(getDropdownMovie).toHaveBeenCalled();
});
