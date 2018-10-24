import axios from 'axios';
import { apiKey } from '../../assets';

export const GET_MOVIE = `GET_MOVIE`;
export const START_FETCH = `START_FETCH`;
export const FINISH_FETCH = `FINISH_FETCH`;
export const GET_TRADING = `GET_TRADING`;
export const OPEN_TRAILER_WINDOW = `OPEN_TRAILER_WINDOW`;
export const CLOSE_TRAILER_WINDOW = `CLOSE_TRAILER_WINDOW`;
export const SHOW_ERROR = `SHOW_ERROR`;
export const GET_TRAILER = `GET_TRAILER`;

export const asyncGetMovie = (movie) => async dispatch => {
  try{
    dispatch( { type: START_FETCH } )
    const response = await axios(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&page=1&include_adult=false&query=${movie}`);
    const data = response.data;
    dispatch( {type: GET_MOVIE, payload: data } );
    dispatch( {type: FINISH_FETCH } );
  } 
  catch (err) { throw new Error('karamba!') }
}

export const getCategoryMovie = (query) => async dispatch => {
  try{
    dispatch( { type: START_FETCH } )
    const response = await axios(`https://api.themoviedb.org/3/movie/${query}?api_key=${apiKey}&language=en-US&page=1`);
    const data = response.data;
    dispatch( {type: GET_TRADING, payload: data } );
    dispatch( {type: FINISH_FETCH } );
  } 
  catch (err) { throw new Error('karamba!') }
}

export const getDropdownMovie = (id) => async dispatch => {
  try{
    dispatch( { type: START_FETCH } )
    const response = await axios(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${id}`);
    const data = response.data;
    dispatch( {type: GET_TRADING, payload: data } );
    dispatch( {type: FINISH_FETCH } );
  } 
  catch (err) { throw new Error('karamba!') }
}

export const asyncShowTrailer = (id) => async dispatch => {
  try{
    const videoKey = await axios(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US&api_key=${apiKey}`);
    if(videoKey.data.results.length > 0) {
    }
    const trailerUrl = `https://www.youtube.com/embed/${videoKey.data.results[0].key}?autoplay=1`;
    
    dispatch( { type: OPEN_TRAILER_WINDOW } );
    dispatch({ type: GET_TRAILER, payload: trailerUrl });
  }
  catch (err) { dispatch({ type: SHOW_ERROR, payload: 'no trailer' }) }
}

export const closeTrailerWindow = () => dispatch => {
  dispatch( { type: CLOSE_TRAILER_WINDOW } )
}