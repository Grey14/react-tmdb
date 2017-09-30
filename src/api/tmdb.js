

function fetchApi(url, params = {}, method) {
    return fetch(url + "&api_key=3cfbffabeb7da26b27bac8928957ba54",
        {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            method: method
        })
        .then(response => response.json());
}

export default {
    get: (url, params) => fetchApi(url, params, 'GET')
}
