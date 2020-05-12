import {fetchRequests, updateRequestStatus} from '../serverApi';

export const ADD_REQUESTS = 'ADD_REQUESTS';
export const REMOVE_REQUEST = 'REMOVE_REQUEST';
export const NO_MORE_DATA = 'NO_MORE_DATA';
export const SELECT_REQUEST = 'SELECT_REQUEST';
export const CHANGE_REQUEST_STATUS = 'CHANGE_REQUEST_STATUS';
export const SET_STATUS_FILTER = 'STATUS_FILTER';
export const SET_QUERY_FILTER = 'QUERY_FILTER';

const addRequests = (requests) => {
    return {
        type: ADD_REQUESTS,
        requests: requests
    };
}

const removeRequest = (index) => {
    return {
        type: REMOVE_REQUEST,
        index: index
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

export const changeRequestStatus = (status) => {
    return (dispatch, getState) => {
        const {selected, filters} = getState();
        if (!selected) return false;
        updateRequestStatus(selected.id, status).then(() => {
            if (filters.status && filters.status !== 'all' && selected.status !== filters.status){
                dispatch(unselectRequest());
                dispatch(removeRequest(selected.index)); 
            }
            return false;
        }).catch(() => {});
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
        type: SET_QUERY_FILTER,
        query
    };
}
