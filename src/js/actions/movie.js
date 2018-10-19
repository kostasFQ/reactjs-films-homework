import axios from 'axios';

export const GET_MOVIE = `GET_MOVIE`;
export const START_FETCH = `START_FETCH`;
export const FETCHED = `FETCHED`;

export const asyncGetMovie = (movie) => async dispatch => {
  try{
    dispatch( { type: START_FETCH, payload: true } )
    const response = await axios(`https://api.themoviedb.org/3/search/movie?api_key=3a2531498f834486708efbfa60ac046b&language=en-US&page=1&include_adult=false&query=${movie}`);
    const data = response.data;
    const x = response.data.results[0];
    console.log(x)
    dispatch( {type: GET_MOVIE, payload: {...data, ...x}} )
    dispatch( {type: FETCHED, payload: true} )
  } 
  catch (err) { throw new Error('karamba!') }
}