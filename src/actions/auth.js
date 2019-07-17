import axios from 'axios';

export const LOGIN_SUBMIT = 'LOGIN_SUBMIT';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const GET_TODOS = 'GET_TODOS';



export function loginOnRequest(data) {
  return {
    type: LOGIN_SUBMIT,
    data,
  };
}


export function getTodosOnRequest(data) {
    return {
      type: GET_TODOS,
      data,
    };
  }

export function postLogin(data) {
  return (dispatch) => {
    //   console.log('data', data)
    axios.post('http://10.62.100.168:3008/api/login', {email: data.username, password: data.password}).then(({data}) => {
        console.log('res', data)
        dispatch(loginOnRequest(data))
    });
  };
}

export function getTodos(data) {
    return (dispatch) => {
      //   console.log('data', data)
      axios.get('https://jsonplaceholder.typicode.com/todos/1').then(({data}) => {
          console.log('res', data)
          dispatch(getTodosOnRequest(data))
      });
    };
  }