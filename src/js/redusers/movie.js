import { GET_MOVIE } from '../actions/movie';
import { START_FETCH } from '../actions/movie';
import { FETCHED } from '../actions/movie';


const _movie = {
  startFetch: false,
  fetched: false
}

const movie = (state = _movie, action) => {
  switch (action.type) {
    case START_FETCH:
    return { ...state, startFetch: action.payload };
    case GET_MOVIE:
      console.log('red', action.payload)
      return { 
        ...state, 
        film: action.payload.results[0],
        fullResponse: action.payload.results
      };
    case FETCHED:
      return { ...state, fetched: action.payload }
      
    
    default:
      return state;
  }
}

export default movie;