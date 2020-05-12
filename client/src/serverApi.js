
const BASE_URI = '';

export const fetchRequests = (start = 0) => {
    return fetch(BASE_URI + `api/requests?offset=${start}`)
        .then(response => response.json())
}
