import { combineReducers } from 'redux';
import { auth, logOut } from './auth';

export default combineReducers({
  auth,
  logOut,
});
