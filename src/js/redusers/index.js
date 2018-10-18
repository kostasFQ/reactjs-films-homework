import { combineReducers } from 'redux';

import uiStore from './ui';
import movie from './movie';

const reduser = combineReducers({
  uiStore,
  movie
});

export default reduser;