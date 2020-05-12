import {connect} from 'react-redux';
import {loadMoreRequests, selectRequest, unselectRequest} from './actions'

const requestsConnector = (component) => connect(
    state => ({requests: state.requests}), 
    {loadMoreRequests}
)(component);

const selectedConnector = (component) => connect(
    state => ({selected: state.selected}),
    {selectRequest, unselectRequest}
)(component);

const filtersConnector  = (component) => connect(state => ({filters: state.filters}))(component);

export {requestsConnector, selectedConnector, filtersConnector};

