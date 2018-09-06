import types from './types'
import axios from 'axios';

const BASE_URL = 'http://api.reactprototypes.com';
const API_KEY = '?key=ps_todo_list';

export function getNewsfeed () {
    const resp = axios.get(`/api/stand_app.php?action=get_all`);
    return {
        type: types.GET_NEWSFEED,
        payload: resp
    }
}

export const getSingleAudio = (id) => async dispatch => {
    try {
        const resp = await axios.get('/api/stand_app.php', id)
        dispatch ({
            type: types.GET_SINGLE_AUDIO,
            payload: resp
        })
    } catch (err) {
        dispatch ({
            type: types.LIST_ERROR,
            error: "No audio found"
        })
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

export function postComment (message) {
    const resp = axios.post('/api/stand_app.php', message)
    
    return {
        type: types.POST_COMMENT,
        payload: resp
    }
}

export function unlikePost () {
    const resp = axios.post(`${BASE_URL}/todos${API_KEY}`);
}