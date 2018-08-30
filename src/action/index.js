import types from './types'
import axios from 'axios';
import userID from '../user_id'

const BASE_URL = 'http://api.reactprototypes.com';
const API_KEY = '?key=ps_todo_list';

export function likePost () {
    const resp = axios.post(`${BASE_URL}/todos${API_KEY}`);

    return {
        type: types.LIKE_POST,
        payload: resp
    }
}

export function unlikePost () {
    const resp = axios.post(`${BASE_URL}/todos${API_KEY}`);
}

export function getUserID () {
    return {
        type: types.GET_USER_ID,
        payload: userID
    }
}