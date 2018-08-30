import types from '../action/types';

const DEFAULT_STATE = {
    all: [],
    single: {},
    error: null
}

export default (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case types.GET_USER_ID:
            return {...state, single: action.payload._id}
        default: 
            return state;
    }
}