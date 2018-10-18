export const GET_MOVIE = `GET_MOVIE`;

export const asyncGetMovie = (data) => dispatch => { 
  console.log('dsdsd')
  dispatch( {type: GET_MOVIE, payload: data} )
}