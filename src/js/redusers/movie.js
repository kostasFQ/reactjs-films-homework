import { 
  GET_MOVIE,
  OPEN_TRAILER_WINDOW,
  START_FETCH, GET_TRADING,
  FINISH_FETCH,
  CLOSE_TRAILER_WINDOW,
  SHOW_ERROR,
  GET_TRAILER
} from '../actions/movie';

const _movie = {
  startFetch: false,
  finishFetch: false,
  trailerWindow: false
}

const random = (arr) =>  Math.floor( Math.random() * arr.length ); 

const movie = (state = _movie, action) => {
  switch (action.type) {
    case START_FETCH:
    return { ...state, startFetch: true, finishFetch: false };

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
      
    case FINISH_FETCH:
      return { 
        ...state,
        startFetch: false,
        finishFetch: true
      }

    case OPEN_TRAILER_WINDOW:
      return {
        ...state,
        trailerWindow: true
      }
      
      case CLOSE_TRAILER_WINDOW:
        return {
          ...state,
          trailerWindow: false
        }
      
        case SHOW_ERROR:
          return {
            ...state,
            errorMessage: action.payload
          }

        case GET_TRAILER:
          return {
            ...state,
            trailer: action.payload
          }
    
    default:
      return state;
  }
}

export default movie;