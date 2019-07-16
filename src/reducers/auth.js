
import { LOGIN_SUBMIT, LOGOUT_SUCCESS } from '../actions/auth';

export function auth(state = {
  data: { token: '' },
}, action) {
  switch (action.type) {
    case LOGIN_SUBMIT:
      return Object.assign({}, state, {
        data: action.data,
      });
    default:
      return state;
  }
}

export function logOut(state = {
  isLogout: false,
}, action) {
  switch (action.type) {
    case LOGOUT_SUCCESS:
      return Object.assign({}, state, {
        isLogout: action.isLogout,
      });
    default:
      return state;
  }
}
