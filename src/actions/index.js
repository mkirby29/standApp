import types from './types'
import axios from 'axios';
import userID from '../user_id'

const BASE_URL = 'http://api.reactprototypes.com';
const API_KEY = '?key=ps_todo_list';

export function getUserID () {
    return {
        type: types.GET_USER_ID,
        payload: userID
    }
}

export function likePost () {
    const resp = axios.post(`${BASE_URL}/todos${API_KEY}`);

    return {
        type: types.LIKE_POST,
        payload: resp
    }
}

export const logIn = (credentials) => async dispatch => {
    try {
        const resp = await axios.post('http://api.reactprototypes.com/signin', credentials);

        localStorage.setItem('token', resp.data.token);
        dispatch({ type: types.LOG_IN });
    } catch (err) {
        dispatch({
            type: types.AUTH_ERROR,
            error: 'Invalid email and/or password'
        })
    }
}

export function unlikePost () {
    const resp = axios.post(`${BASE_URL}/todos${API_KEY}`);
}