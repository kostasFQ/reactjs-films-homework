import axios from 'axios';

export const GET_MOVIE = `GET_MOVIE`;
export const START_FETCH = `START_FETCH`;
export const FETCHED = `FETCHED`;
export const FINISH_FETCH = `FINISH_FETCH`;
export const GET_TRADING = `GET_TRADING`;

export const asyncGetMovie = (movie) => async dispatch => {
  try{
    dispatch( { type: START_FETCH } )
    const response = await axios(`https://api.themoviedb.org/3/search/movie?api_key=3a2531498f834486708efbfa60ac046b&language=en-US&page=1&include_adult=false&query=${movie}`);
    const data = response.data;
    dispatch( {type: GET_MOVIE, payload: data } );
    dispatch( {type: FETCHED } );
    dispatch( {type: FINISH_FETCH } );
  } 
  catch (err) { throw new Error('karamba!') }
}

export const getCategoryMovie = (query) => async dispatch => {
  try{
    dispatch( { type: START_FETCH } )
    const response = await axios(`https://api.themoviedb.org/3/movie/${query}?api_key=3a2531498f834486708efbfa60ac046b&language=en-US&page=1`);
    const data = response.data;
    dispatch( {type: GET_TRADING, payload: data } );
    dispatch( {type: FETCHED } );
    dispatch( {type: FINISH_FETCH } );
  } 
  catch (err) { throw new Error('karamba!') }
}

export const getDropdownMovie = (id) => async dispatch => {
  try{
    dispatch( { type: START_FETCH } )
    const response = await axios(`https://api.themoviedb.org/3/discover/movie?api_key=3a2531498f834486708efbfa60ac046b&with_genres=${id}`);
    const data = response.data;
    dispatch( {type: GET_TRADING, payload: data } );
    dispatch( {type: FETCHED } );
    dispatch( {type: FINISH_FETCH } );
  } 
  catch (err) { throw new Error('karamba!') }
}