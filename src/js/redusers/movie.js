import { GET_MOVIE } from '../actions/movie';
import { START_FETCH } from '../actions/movie';
import { FETCHED } from '../actions/movie';
import { GET_TRADING } from '../actions/movie';

import { FINISH_FETCH } from '../actions/movie';


const _movie = {
  startFetch: false,
  fetched: false
}

const random = (arr) =>  Math.floor( Math.random() * arr.length ); 

const movie = (state = _movie, action) => {
  switch (action.type) {
    case START_FETCH:
    return { ...state, startFetch: true, fetched: false, finishFetch: false };

    case GET_MOVIE:
      return { 
        ...state, 
        film: action.payload.results[0],
        fullResponse: action.payload.results
      };

    case GET_TRADING:
      return { 
        ...state, 
        film: action.payload.results[0],
        fullResponse: action.payload.results
      };

    case FETCHED:
      return { ...state, startFetch: false, fetched: true }
      
    case FINISH_FETCH:
      return { ...state, finishFetch: true }
    
    default:
      return state;
  }
}

export default movie;