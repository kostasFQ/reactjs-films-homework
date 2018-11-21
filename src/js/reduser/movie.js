import { 
  GET_MOVIE,
  OPEN_TRAILER_WINDOW,
  START_FETCH, GET_TRADING,
  FINISH_FETCH,
  CLOSE_TRAILER_WINDOW,
  SHOW_ERROR,
  GET_TRAILER,
  SAVE_URL,
  ADD_MOVIES,
  START_ADVANCE_FETCH,
  FINISH_ADVANCE_FETCH,
  QUERY_STRING
} from '../actions/movie';

const _movie = {
  startFetch: false,
  finishFetch: false,
  trailerWindow: false,
  page: 1,
  queryString: ''
}

const movie = (state = _movie, action) => {
  switch (action.type) {
    case START_FETCH:
    return { ...state, startFetch: true, finishFetch: false, errorMessage: null };

    case GET_MOVIE:
      return { 
        ...state, 
        film: action.payload.results[0],
        fullResponse: action.payload.results,
        page: action.payload.page
      };

    case GET_TRADING:
      return { 
        ...state, 
        film: action.payload.results[0],
        fullResponse: action.payload.results,
        page: action.payload.page
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

      case SAVE_URL:
        return {
          ...state,
          currentUrl: action.payload
        }

      case ADD_MOVIES:
        return {
          ...state,
          fullResponse: [...state.fullResponse, ...action.payload.results],
          page: action.payload.page
        }

      case START_ADVANCE_FETCH:
        return {
          ...state,
          startAdvanceFetch: true,
          finishAdvanceFetch: false
        }

      case FINISH_ADVANCE_FETCH:
        return {
          ...state,
          startAdvanceFetch: false,
          finishAdvanceFetch: true,
        }
      case QUERY_STRING:
        return {
          ...state,
          queryString: action.payload
        }
    
    default:
      return state;
  }
}

export default movie;