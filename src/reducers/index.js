import { combineReducers } from 'redux';
import likeReducer from './like_reducer';
import feedReducer from './feed_reducer';


const rootReducer = combineReducers ({
    like: likeReducer,
    feed: feedReducer
})

export default rootReducer;