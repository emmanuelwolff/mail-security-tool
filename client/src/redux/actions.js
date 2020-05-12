import {fetchRequests} from '../serverApi';

export const ADD_REQUESTS = 'ADD_REQUESTS';
export const NO_MORE_DATA = 'NO_MORE_DATA';
export const SELECT_REQUEST = 'SELECT_REQUEST';

const addRequests = (requests) => {
    return {
        type: ADD_REQUESTS,
        requests: requests
    };
}

export const loadMoreRequests = () => {
    return (dispatch, getState) => {
        const state = getState();
        if (state.done)
            return false;
        return fetchRequests(state.requests.length)
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

