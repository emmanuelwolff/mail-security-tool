import React from 'react';

const RequestHeader = () => {
    return (
        <table>
            <tbody>
                <tr>
                    <td>
                        <span>Status</span>
                        <select>
                            <option value="">Open</option>
                            <option value="">All Requests</option>
                            <option value="">Open</option>
                            <option value="">Approved</option>
                            <option value="">Rejected </option>
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
                            <input placeholder="Search" />
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    );
}

export default RequestHeader;
