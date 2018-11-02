import movie from '../movie';

const state = {
  startFetch: false,
  finishFetch: false,
  trailerWindow: false
};

describe('reduser', () => {

  it('DEFAULT', () => {
    expect( movie(undefined, {type: 'INIT'} ) ).toEqual({
      ...state
    });
  })

  it('START_FETCH', () => {
    expect( movie( state,{ type: 'START_FETCH'}).startFetch ).toEqual(true);
  })
  
  it('GET_MOVIE', () => {
    expect( movie( state,{ type: 'GET_MOVIE', payload: { results: [{i:1},{i:2}] } })).toEqual({
      ...state,
      film: {i:1},
      fullResponse: [{i:1},{i:2}]
    });
  })
  
  it('GET_TRADING', () => {
    expect( movie( state,{ type: 'GET_TRADING', payload: { results: [{i:3},{i:4}] } })).toEqual({
      ...state,
      film: {i:3},
      fullResponse: [{i:3},{i:4}]
    });
  })
  
  it('FINISH_FETCH', () => {
    expect( movie( state, { type: 'FINISH_FETCH' }) ).toEqual({
      ...state,
      startFetch: false,
      finishFetch: true
    });
  })
  
  it('OPEN_TRAILER_WINDOW', () => {
    expect( movie( state, { type: 'OPEN_TRAILER_WINDOW' }) ).toEqual({
      ...state,
      trailerWindow: true
    });
  })
  
  it('CLOSE_TRAILER_WINDOW', () => {
    expect( movie( state, { type: 'CLOSE_TRAILER_WINDOW' }) ).toEqual({
      ...state,
      trailerWindow: false
    });
  })
  
  it('SHOW_ERROR', () => {
    expect( movie( state, { type: 'SHOW_ERROR', payload: true }) ).toEqual({
      ...state,
      errorMessage: true
    });

    expect( movie( state, { type: 'SHOW_ERROR', payload: false }) ).toEqual({
      ...state,
      errorMessage: false
    });
  })
  
  it('GET_TRAILER', () => {
    const url ='https...';
    expect( movie( state, { type: 'GET_TRAILER', payload: url }) ).toEqual({
      ...state,
      trailer: url
    });
  })
  
  it('SAVE_URL', () => {
    const url ='currentUrl...';
    expect( movie( state, { type: 'SAVE_URL', payload: url }) ).toEqual({
      ...state,
      currentUrl: url
    });
  })
  
  it('ADD_MOVIES', () => {
    const state = {
      startFetch: false,
      finishFetch: false,
      trailerWindow: false,
      fullResponse: [{i:3},{i:4}]
    };
    expect( movie( state,{ type: 'ADD_MOVIES', payload: { results: [{i:1},{i:2}] } } ) ).toEqual({
      ...state,
      fullResponse: [{i:3},{i:4},{i:1},{i:2}]
    });
  })

  it('START_ADVANCE_FETCH', () => {
    expect( movie( state, { type: 'START_ADVANCE_FETCH' }) ).toEqual({
      ...state,
      startAdvanceFetch: true,
      finishAdvanceFetch: false
    });
  })

  it('FINISH_ADVANCE_FETCH', () => {
    expect( movie( state, { type: 'FINISH_ADVANCE_FETCH' }) ).toEqual({
      ...state,
      startAdvanceFetch: false,
      finishAdvanceFetch: true
    });
  })
})
