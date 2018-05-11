import { combineReducers } from 'redux';

import { reducer as GistsReducer } from './GistsRedux';
import { reducer as LoginReducer } from './LoginRedux';

export default combineReducers({
  Gists: GistsReducer,
  Login: LoginReducer,
  /* Add more here */
});
