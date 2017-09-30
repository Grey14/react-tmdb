import fetch from 'isomorphic-fetch'

import * as types from '../constants/actionTypes';
import tmdb from '../api/tmdb'

const url = `https://api.themoviedb.org/3/discover/movie?page=1&sort_by=popularity.desc&language=en-U&api_key=3cfbffabeb7da26b27bac8928957ba54`;

// function requestMoives(movies) {
//     return {
//         type: types.REQUEST_MOVIES,
//         movies
//     }
// }

const receviceMoives = movies => ({
    type: types.RECEIVE_MOVIES,
    movies: movies
})
let count =0;
export function getAllMovies() {
    count++;
    console.log(count);
    return function (dispatch) {
        return fetch(url)
            .then(response => response.json())
            .then(json =>
                dispatch(receviceMoives(json.results))
            )
    }
}