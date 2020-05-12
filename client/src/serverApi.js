
export const fetchRequests = (start = 0, {status = null, query = null}) => {
    let uri = `api/requests?offset=${start}${status? '&s=' + status: ''}${query? '&q=' + query : ''}`;
    return fetch(uri)
        .then(response => response.json())
}
