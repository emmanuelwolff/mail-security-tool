import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {NO_MORE_DATA, ADD_REQUESTS} from './actions';

const requests = (state = {}, action) => {
    if (action.type === ADD_REQUESTS){
        return {
            ...state,
            requests: [...(state.requests || []), ...action.requests]
        };
    }
    else if (action.type === NO_MORE_DATA){
        return {
            ...state,
            done: true
        }
    }
    return state;
}

const selected = (state = null, action) => {
    if (action.type === 'SELECT_REQUEST'){
        return action.request;
    }
    return state;
}


const rootReducer = combineReducers({
        requests,
        selected
});

export default function getStore(preloadedState) {
    return createStore(
        rootReducer,
        preloadedState,
        composeWithDevTools(applyMiddleware(thunkMiddleware))
    )
};

