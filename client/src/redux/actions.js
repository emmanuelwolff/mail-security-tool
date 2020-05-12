import {fetchRequests} from '../serverApi';

export const ADD_REQUESTS = 'ADD_REQUESTS';
export const NO_MORE_DATA = 'NO_MORE_DATA';
export const SELECT_REQUEST = 'SELECT_REQUEST';
export const SET_STATUS_FILTER = 'STATUS_FILTER';
export const SET_QUERY_FILTER = 'QUERY_FILTER';

const addRequests = (requests) => {
    return {
        type: ADD_REQUESTS,
        requests: requests
    };
}

export const loadMoreRequests = () => {
    return (dispatch, getState) => {
        const state = getState();
        if (state.requests.done)
            return false;
        return fetchRequests((state.requests.requests || []).length, state.filters || {})
            .then(response => {
                if (!(response.data && typeof response.data === 'object')){
                    throw new Error('No data');
                }
                if (response.data.requests){
                    dispatch(addRequests(response.data.requests));
                }
                if (response.data.done){
                    dispatch({type: NO_MORE_DATA});
                }
            })
    };
}

export const selectRequest = (request) => {
    return {
        type: SELECT_REQUEST,
        request: request
    }        
}

export const unselectRequest = () => {
    return {
        type: SELECT_REQUEST,
        request: null
    }
}

export const setStatusFilter = (status) => {
    return {
        type: SET_STATUS_FILTER,
        status
    };
}

export const setQueryFilter = (query) => {
    return {
        type: SET_STATUS_FILTER,
        query
    };
}
