import { combineReducers } from 'redux';
import likeReducer from './like_reducer';
import feedReducer from './feed_reducer';
import userReducer from './user_reducer';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers ({
    like: likeReducer,
    feed: feedReducer,
    form: formReducer,
    user: userReducer
})

export default rootReducer;