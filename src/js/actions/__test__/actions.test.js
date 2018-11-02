import * as actions from '../movie';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
// import fetchMock from 'fetch-mock';
const mockStore = configureMockStore([ thunk ]);
import { movie } from '../../../../configs/jest/__mocks__/mockStore';

describe( 'actions', () => {
  it('asyncGetMovie (+)', async () => {
    const store = mockStore({ movie });
    await store.dispatch( actions.asyncGetMovie('hell') );
    expect(store.getActions()[0]).toEqual({ type: 'START_FETCH' });
    expect(store.getActions()[2].payload.results).toHaveLength(20);
    expect(store.getActions()[3]).toEqual({ type: 'FINISH_FETCH' });
  })
  
  it('asyncGetMovie (-)', async () => {
    const store = mockStore({ movie });
    await store.dispatch( actions.asyncGetMovie() );
    expect(store.getActions()[0]).toEqual({ type: 'SHOW_ERROR', payload: 'fail' });
  })

  it('getCategoryMovie', async () => {
    const store = mockStore({ movie });
    await store.dispatch( actions.getCategoryMovie('popular') );
    expect(store.getActions()[0]).toEqual({ type: 'START_FETCH' });
    expect(store.getActions()[2].payload.results).toHaveLength(20);
    expect(store.getActions()[3]).toEqual({ type: 'FINISH_FETCH' });
  })
  
  it('getCategoryMovie', async () => {
    const store = mockStore({ movie });
    await store.dispatch( actions.getCategoryMovie() );
    expect(store.getActions()[0]).toEqual({ type: 'START_FETCH' });
    expect(store.getActions()[1]).toEqual({ type: 'SHOW_ERROR', payload: 'fail' });
  })
  
  it('getDropdownMovie (+)', async () => {
    const store = mockStore({ movie });
    await store.dispatch( actions.getDropdownMovie(28) );
    expect(store.getActions()[0]).toEqual({ type: 'START_FETCH' });
    expect(store.getActions()[2].payload.results).toHaveLength(20);
    expect(store.getActions()[3]).toEqual({ type: 'FINISH_FETCH' });
  })

  it('getDropdownMovie (-)', async () => {
    const store = mockStore({ movie });
    await store.dispatch( actions.getDropdownMovie() );
    expect(store.getActions()[0]).toEqual({ type: 'SHOW_ERROR', payload: 'fail' });
  })
  
  it('asyncShowTrailer (+)', async () => {
    const store = mockStore({ movie });
    await store.dispatch( actions.asyncShowTrailer(335983) );
    expect(store.getActions()[0]).toEqual({ type: 'SHOW_ERROR', payload: null });
    expect(store.getActions()[2].payload.length).toBeGreaterThan(10);
    expect(store.getActions()[2].type).toEqual('GET_TRAILER');
  })
  it('asyncShowTrailer (-)', async () => {
    const store = mockStore({ movie });
    await store.dispatch( actions.asyncShowTrailer() );
    expect(store.getActions()[0]).toEqual({ type: 'SHOW_ERROR', payload: null });
    expect(store.getActions()[2]).toEqual({ type: 'SHOW_ERROR', payload: 'Sorry, no trailer.' });
  })
  
  it('closeTrailerWindow', async () => {
    const store = mockStore({ movie });
    await store.dispatch( actions.closeTrailerWindow() );
    expect(store.getActions()[0]).toEqual({ type: 'CLOSE_TRAILER_WINDOW' });
    expect(store.getActions()[1]).toEqual({ type: 'GET_TRAILER', payload: null });
  })
  
  it('asyncAddMovies(+)', async () => {
    const store = mockStore({ movie });
    await store.dispatch( actions.asyncAddMovies('https://api.themoviedb.org/3/movie/now_playing?api_key=3a2531498f834486708efbfa60ac046b&language=en-US&page=2') );
    expect(store.getActions()[0].type).toEqual('START_ADVANCE_FETCH');
    expect(store.getActions()[1].type).toEqual('SAVE_URL');
    expect(store.getActions()[2].type).toEqual('ADD_MOVIES');
    expect(store.getActions()[3].type).toEqual('FINISH_ADVANCE_FETCH');
  })
  it('asyncAddMovies (-)', async () => {
    const store = mockStore({ movie });
    await store.dispatch( actions.asyncAddMovies() );
    expect(store.getActions()[0].type).toEqual('START_ADVANCE_FETCH');
    expect(store.getActions()[1].type).toEqual('SHOW_ERROR');
  })
})