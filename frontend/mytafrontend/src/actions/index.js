import {
  AUTH_USER,
  UNAUTH_USER,
  AUTH_ERROR,
  FETCH_MESSAGE
} from '../actions/types';
import axios from 'axios';

const ROOT_URL = 'http://localhost:3001';

export function login({ username,password }){
  return function(dispatch){
    axios.post(`${ROOT_URL}/login`,{
      username,
      password
    })
    .then((response) => {
      dispatch({type: AUTH_USER});
      localStorage.setItem('token', response.data.token);
    })
    .catch((error) => {
      dispatch(autherror("Bad Login Info."));
    });
  }
}

export function register({ username, password }) {
  return function(dispatch) {
    axios.post(`${ROOT_URL}/register`, { username, password })
      .then(response => {
        dispatch({ type: AUTH_USER });
        localStorage.setItem('token', response.data.token);
      })
      .catch(response => dispatch(authError(response.data.error)));
  }
}

export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  };
}

export function logoutUser() {
  localStorage.removeItem('token');

  return { type: UNAUTH_USER };
}

export function fetchData() {
  return function(dispatch) {
    axios.get('${ROOT_URL}/contents', {
      headers: { authorization: localStorage.getItem('token') }
    })
    .then(response => {
      dispatch({
        type: FETCH_MESSAGE,
        payload: response.data
      });
    });
  }
}
