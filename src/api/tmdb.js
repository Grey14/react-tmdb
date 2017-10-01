
import fetch from 'isomorphic-fetch'

// function fetchApi(url, params = {}, method) {
//   return fetch(url + "&api_key=3cfbffabeb7da26b27bac8928957ba54",
//       {
//           headers: {
//               'Content-Type': 'application/json',
//               Accept: 'application/json'
//           },
//           method: method
//       })
//       .then(response => response.json());
// }

function fetchApi(url, dispatch, method) {
  return fetch(`${url}&api_key=3cfbffabeb7da26b27bac8928957ba54`)
    .then(response => response.json())
    .then(json =>
      dispatch(method(json))
    )
}

export default {
  get: (url, dispatch, method) => fetchApi(url, dispatch, method)
}
