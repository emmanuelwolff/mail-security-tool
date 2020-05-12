import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {NO_MORE_DATA, ADD_REQUESTS, SELECT_REQUEST, SET_STATUS_FILTER, SET_QUERY_FILTER, REMOVE_REQUEST} from './actions';

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
    else if (action.type === SET_STATUS_FILTER || action.type === SET_QUERY_FILTER){
        return {
            requests: [],
            done: false
        }
    }
    else if (action.type === REMOVE_REQUEST){
        return {
            ...state,
            requests: [...state.requests.slice(0, action.index), ...state.requests.slice(action.index+1)] 
        }
    }
    return state;
}

const selected = (state = null, action) => {
    if (action.type === SELECT_REQUEST){
        return action.request;
    }
    return state;
}

const filters = (state = {}, action) => {
    if (action.type === SET_STATUS_FILTER){
        return {
            ...state,
            status: action.status
        };
    }
    if (action.type === SET_QUERY_FILTER){
        return {
            ...state,
            query: action.query
        };
    }
    return state;
}


const rootReducer = combineReducers({
    filters,
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

