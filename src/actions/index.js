
import * as types from '../constants/actionTypes';
import tmdb from '../api/tmdb'
const url = `https://api.themoviedb.org/3/discover/movie?page=1&sort_by=popularity.desc&language=en-U`;

const receviceMoives = json => ({
    type: types.RECEIVE_MOVIES,
    movies: json
})

export function getAllMovies() {
    return function (dispatch) {
      tmdb.get(url,dispatch,receviceMoives)
    }
}
