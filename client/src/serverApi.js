
export const fetchRequests = (start = 0, {status = null, query = null}) => {
    let uri = `api/requests?offset=${start}${status? '&s=' + status: ''}${query? '&q=' + encodeURIComponent(query) : ''}`;
    return fetch(uri)
        .then(response => response.json())
};

export const updateRequestStatus = (id, status) => {
    let uri = `api/requests/${id}`;
    return fetch(uri, {
            method: 'PUT',
            body: status
        });
};
