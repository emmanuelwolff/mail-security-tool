import React from 'react';
import { Waypoint } from 'react-waypoint';
import get from 'lodash.get';
import {requestsConnector, selectedConnector} from './redux/connectors';

class RequestList extends React.PureComponent {

    componentDidMount(){
        this.props.loadMoreRequests();
    }

    componentDidUpdate(){
        if (!get(this.props, 'requests.requests', []).length){
            this.props.loadMoreRequests();
        }
    }

    render(){
        const requests = (this.props.requests || {}).requests || [];
        const hasMore = !(this.props.requests || {}).done;
        return (
            <div id="mail-requests">
                <table className="requests">
                    <thead className="head">
                        <tr>
                            <th className='five column'><input type="checkbox"/></th>
                            <th className='ten column'>ID</th>
                            <th className='fifteen column'>Request time</th>
                            <th className='fifteen column'>Requested By</th>
                            <th className='fifteen column'>Recipient</th>
                            <th className='fifteen column'>Sender</th>
                            <th className='fifteen column'>Subject</th>
                            <th className='ten column'>Categorized at</th>
                        </tr>
                    </thead>
                    <tbody>
                        {requests.map((request, index) => 
                        <RequestRow key={request.id} 
                            index={index} 
                            {...request}
                            selected={this.props.selected && request.id === this.props.selected.id}
                            onChange={() => this.props.selected && request.id === this.props.selected.id? this.props.unselectRequest() : this.props.selectRequest({...request, index})}/>
                        )}
                        {hasMore && requests.length && <Waypoint onEnter={() => this.props.loadMoreRequests()} />}
                    </tbody>
                </table>
            </div>
        );
    }
}

const RequestRow = (props) => {
    return (
        <tr className={props.status === 'rejected' ? 'red' : (props.status === 'released' ? 'green' : '')}>
            <td className="five column" style={{ textAlign: 'center' }}>
                <input type="checkbox" checked={props.selected} onChange={props.onChange}/>
            </td>
            <td className="ten column"><span>{props.id}</span></td>
            <td className="fifteen column"><span>{props.requested_at}</span></td>
            <td className="fifteen column"><span>{props.requested_by}</span></td>
            <td className="fifteen column"><span>{props.recipient}</span></td>
            <td className="fifteen column"><span>{props.sender}</span></td>
            <td className="fifteen column"><span>{props.subject}</span></td>
            <td className="ten column"><span>{props.rejected_status}</span></td>
        </tr>
    );
}

export default selectedConnector(requestsConnector(RequestList));

