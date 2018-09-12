import types from './types'
import axios from 'axios';

export const addNewUser = (username, password, email) => async dispatch => {
    try {
        const resp = await axios.post('/api/stand_app.php', {
            username: username,
            password: password,
            email: email
        }, {
            params: {
                action: 'add_new_user'
            }
        })
        console.log('ADDNEWUSER: ', {data:{
            username: username,
            password: password,
            email: email
        }})
        dispatch({
            type: types.ADD_NEW_USER,
            payload: {
                username: username,
                password: password,
                email: email
            }
        })
        return {
            type: types.ADD_NEW_USER,
            payload: resp
        }
    } catch (err) {
        console.log('DELETE FAILED!')
        dispatch({
            type: types.LIST_ERROR,
            error: 'Failed to add user item'
        });
    }
}

export const addAvatar = (image) => async dispatch => {
    const resp = {image}
    try {
        dispatch ({
            type: types.ADD_AVATAR, 
            payload: resp
        });
    } catch (err) {
        dispatch({
            type: types.LIST_ERROR,
            error: 'No item found'
        });
    }
}

export function getNewsfeed () {
    const resp = axios.get('/api/stand_app.php', {
        params: {
            action: 'get_all'
        }
    })
    return {
        type: types.GET_NEWSFEED,
        payload: resp
    }
}

export function getPosts () {
    const resp = axios.get('/api/stand_app.php', {
        params: {
            action: 'get_posts'
        }
    })
    return {
        type: types.GET_POSTS,
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

export const getUserID = (username) => async dispatch => {
    const resp = await axios.get('/api/stand_app.php', { 
        username: username
    }, {
        params: {
            action: types.GET_USER_ID
        }
    })
    dispatch({
        type: types.GET_USER_ID,
        payload: resp
    })
}

export function likeAudio (audioName, userID) {
    const resp = axios.post('/api/stand_app.php', {
        params: {
            action: types.LIKE_AUDIO
        }
    });

    return {
        type: types.LIKE_AUDIO,
        payload: resp
    }
}

export const logIn = (token) => async dispatch => {
    if (localStorage.getItem('token')) {
        localStorage.setItem('token', token);
        dispatch(
            { type: types.LOG_IN }
        );
    } else {
        dispatch({
            type: types.AUTH_ERROR,
            error: 'Please sign up with Google Plus'
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

export function retrieveAvatars () {
    try {
        const resp = axios.get('/api/stand_app.php', {
            params: {
                action: 'retrieve_avatars'
            }
        })
        return {
            type: types.RETRIEVE_AVATARS,
            payload: resp
        }
    } catch (err) {
        console.log('RETRIEVE AVATARS: ERROR')
    }
}

export function unlikeAudio () {
    const resp = axios.post('/api/stand_app.php', {
        params: {
            action: 'unlike_audio'
        }
    })

    return {
        type: types.UNLIKE_AUDIO,
        payload: resp
    }
}