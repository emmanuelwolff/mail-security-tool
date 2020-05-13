import React from 'react';
import get from 'lodash.get';
import {filtersConnector} from './redux/connectors';

const RequestHeader = (props) => {
    return (
        <table>
            <tbody>
                <tr>
                    <td>
                        <span>Status</span>
                        <select value={(props.filters || {}).status} onChange={(e) => props.setStatusFilter(e.target.value)}>
                            <option value="all">All Requests</option>
                            <option value="open">Open</option>
                            <option value="released">Approved</option>
                            <option value="rejected">Rejected </option>
                        </select>
                    </td>
                    <td>
                        <button onClick={() => props.changeRequestStatus('approved')}>
                            <i className="material-icons md-14">playlist_add_check</i>
                            Release
                        </button>
                    </td>
                    <td>
                        <button onClick={() => props.changeRequestStatus('rejected')}>
                            <i className="material-icons md-14">clear</i>
                            Reject
                        </button>
                    </td>
                    <td>
                        <button>
                            <i className="material-icons md-14">refresh</i>
                            Refresh
                        </button>
                    </td>
                    <td>
                        <QueryFilter query={get(props, 'filters.query')} onFilter={(query) => props.setQueryFilter(query)} />
                    </td>
                </tr>
            </tbody>
        </table>
    );
}

class QueryFilter extends React.Component {

    state = { 
        query: this.props.query || ''
    };

    render(){
        return (
            <div className="search">
                <span className="material-icons md-14 input-icon">search</span>
                <input  placeholder="Search" 
                    type="text"
                    value={(this.props.filters || {}).query}
                    onChange={(e) => this.setState({query: e.target.value})}
                />
                <button onClick={() => this.props.onFilter(this.state.query)}>
                    <i className="material-icons md-14">filter_list</i>
                </button>
            </div>
        );
    }
}
export default filtersConnector(RequestHeader);
