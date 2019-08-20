
import * as types from '../constants/actionTypes';
import tmdb from '../api/tmdb'
//const url = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&language=en-U&page=`;
const url = `https://api.themoviedb.org/3/discover/movie?`;

const receiveMoives = json => ({
  type: types.RECEIVE_MOVIES,
  movies: json
})

export function getAllMovies(page, sort_by, language) {
  return function (dispatch) {
    tmdb.get(url + `sort_by=${sort_by}&language=${language}&page=${page}`, dispatch, receiveMoives)
  }
}
