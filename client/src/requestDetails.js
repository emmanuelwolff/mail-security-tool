import React from 'react';
import {selectedConnector} from './redux/connectors';

const RequestDetails = (props) => {
    const request = props.selected || {};
    return (
        <div id="mail-details">
            <div className="head">
                <span className="title"><b>DETAILS</b></span>
                <div className="rest"></div>
            </div>
            <div className="body">
                <div className="column">
                    <div className="title">E-Mail Information</div>
                    <div className="data">
                        <div className="row">
                            <div className="label">ID</div>
                            <div className="value">{request.id}</div>
                        </div>
                        <div className="row">
                            <div className="label">Received time</div>
                            <div className="value">{request.received_at}</div>
                        </div>
                        <div className="row">
                            <div className="label">Recipient</div>
                            <div className="value">{request.recipient}</div>
                        </div>
                        <div className="row">
                            <div className="label">Subject</div>
                            <div className="value">{request.subject}</div>
                        </div>
                        <div className="row">
                            <div className="label">Sender</div>
                            <div className="value">{request.sender}</div>
                        </div>
                        <div className="row">
                            <div className="label">Categorized at</div>
                            <div className="value">{request.rejected_status}</div>
                        </div>
                    </div>
                </div>
                <div className="column">
                    <div className="title">Request information</div>
                    <div className="data">
                        <div className="row">
                            <div className="label">Request Time</div>
                            <div className="value">{request.requested_by}</div>
                        </div>
                        <div className="row">
                            <div className="label">Requested at</div>
                            <div className="value">{request.requested_at}</div>
                        </div>
                        <div className="row">
                            <div className="label">Justification</div>
                            <div className="value"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default selectedConnector(RequestDetails);
