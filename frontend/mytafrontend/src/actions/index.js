import {
  AUTH_USER,
  UNAUTH_USER,
  AUTH_ERROR,
  FETCH_MESSAGE
} from '../actions/types';
import axios from 'axios';

const ROOT_URL = 'http://localhost:3001';

export const login = function({ username,password }){
  return function(dispatch){
    axios.post(`${ROOT_URL}/login`,{
      username,
      password
    })
    .then((response) => {
      if(response.data.error) {
        return  dispatch(authError(response.data.error));
      }
      dispatch({type: AUTH_USER});
      localStorage.setItem('token', response.data.token);
    });
  }
}


export const authError = function(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  };
}

export const register = function({ username, password }) {
  return function(dispatch) {
    axios.post(`${ROOT_URL}/register`, { username, password })
      .then(response => {
        if(response.data.error){
          return dispatch(authError(response.data.error));
        }
        dispatch({ type: AUTH_USER });
        localStorage.setItem('token', response.data.token);
      })
  }
}

export const logoutUser = function() {
  localStorage.removeItem('token');

  return { type: UNAUTH_USER };
}

export const fetchMessage = function() {
  return function(dispatch) {
    axios.get(`${ROOT_URL}/contents`, {
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
