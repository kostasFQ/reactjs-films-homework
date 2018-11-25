import axios from 'axios';
import { apiKey } from '../../assets';

export const GET_MOVIE = `GET_MOVIE`;
export const START_FETCH = `START_FETCH`;
export const FINISH_FETCH = `FINISH_FETCH`;
export const OPEN_TRAILER_WINDOW = `OPEN_TRAILER_WINDOW`;
export const CLOSE_TRAILER_WINDOW = `CLOSE_TRAILER_WINDOW`;
export const SHOW_ERROR = `SHOW_ERROR`;
export const GET_TRAILER = `GET_TRAILER`;
export const SAVE_URL = `SAVE_URL`;
export const ADD_MOVIES = `ADD_MOVIES`;
export const START_ADVANCE_FETCH = `START_ADVANCE_FETCH`;
export const FINISH_ADVANCE_FETCH = `FINISH_ADVANCE_FETCH`;
export const QUERY_STRING = `QUERY_STRING`

export const asyncGetMovie = (movie, page = 1) => async dispatch => {
  try{
    if(!movie) {throw new Error('err')}
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&include_adult=false&query=${movie}&page=${page}`
    dispatch( { type: START_FETCH } )
    const response = await axios(url);
    const data = response.data;
    dispatch( {type: SAVE_URL, payload: url } );
    dispatch( {type: GET_MOVIE, payload: data } );
    dispatch( {type: FINISH_FETCH } );
  } 
  catch (err) { dispatch({ type: SHOW_ERROR, payload: 'fail' }) }
}

export const getCategoryMovie = (query, page = 1) => async dispatch => {
  try{
    if(query){
      const url = `https://api.themoviedb.org/3/movie/${query}?api_key=${apiKey}&language=en-US&page=${page}`
      dispatch( { type: START_FETCH } )
      const response = await axios(url);
      const data = response.data;
      dispatch( {type: SAVE_URL, payload: url } );
      dispatch( {type: GET_MOVIE, payload: data } );
      dispatch( {type: FINISH_FETCH } );
    }
  } 
  catch (err) { dispatch({ type: SHOW_ERROR, payload: 'fail' }) }
}

export const getDropdownMovie = (id, page = 1) => async dispatch => {
  try{
    if(!id) {throw new Error('err')}
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${id}&page=${page}`;
    dispatch( { type: START_FETCH } )
    const response = await axios(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${id}&page=${page}`);
    const data = response.data;
    dispatch( {type: SAVE_URL, payload: url } );
    dispatch( {type: GET_MOVIE, payload: data } );
    dispatch( {type: FINISH_FETCH } );
  } 
  catch (err) { dispatch({ type: SHOW_ERROR, payload: 'fail' }) }
}

export const asyncShowTrailer = (id) => async dispatch => {
  try{
    dispatch({ type: SHOW_ERROR, payload: null })
    dispatch( { type: OPEN_TRAILER_WINDOW } );
    const videoKey = await axios(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US&api_key=${apiKey}`);
    const trailerUrl = `https://www.youtube.com/embed/${videoKey.data.results[0].key}?autoplay=1&modestbranding=1&showinfo=0&rel=0`;
    
    dispatch({ type: GET_TRAILER, payload: trailerUrl });
  }
  catch (err) { dispatch({ type: SHOW_ERROR, payload: 'Sorry, no trailer.' }) }
}

export const closeTrailerWindow = () => dispatch => {
  dispatch( { type: CLOSE_TRAILER_WINDOW } );
  dispatch({ type: GET_TRAILER, payload: null });
}

export const asyncAddMovies = (url) => async dispatch => {
  try {
    dispatch( { type: START_ADVANCE_FETCH } )
    const arr = url.slice( url.indexOf(`page=`) ).split('=');
    const page = +arr[arr.length-1];
    const newUrl = url.replace(`page=${page}`, `page=${page+1}`);

    const response = await axios(newUrl);
    const data = response.data;
    dispatch( {type: SAVE_URL, payload: newUrl } );
    dispatch( {type: ADD_MOVIES, payload: data } );
    dispatch( { type: FINISH_ADVANCE_FETCH } );
  }
  catch(err) {  dispatch({ type: SHOW_ERROR, payload: 'fail' }) }
}

export const setQueryString = (value) => dispatch => {
  dispatch( { type: QUERY_STRING, payload: value } );
}
