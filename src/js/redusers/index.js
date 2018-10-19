import { combineReducers } from 'redux';

import filmsList from './filmsList';
import movie from './movie';

const reduser = combineReducers({
  filmsList,
  movie
});

export default reduser;