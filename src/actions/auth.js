import axios from 'axios';

export const LOGIN_SUBMIT = 'LOGIN_SUBMIT';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';



export function loginOnRequest(data) {
  return {
    type: LOGIN_SUBMIT,
    data,
  };
}


export function postLogin(data) {
  return (dispatch) => {
    //   console.log('data', data)
    axios.post('http://10.62.100.168:3008/api/login', {email: data.username, password: data.password}).then((data) => {
        console.log('res', data)
    });
  };
}