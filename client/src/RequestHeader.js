import React from 'react';
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
                            <option value="approved">Approved</option>
                            <option value="rejected">Rejected </option>
                        </select>
                    </td>
                    <td>
                        <button>
                            <i className="material-icons md-14">playlist_add_check</i>
                            Release
                        </button>
                    </td>
                    <td>
                        <button>
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
                        <div className="search">
                            <span className="material-icons md-14">search</span>
                            <input placeholder="Search" value={(props.filters || {}).query}/>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    );
}

export default filtersConnector(RequestHeader);
