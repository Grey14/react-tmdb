import { RECEIVE_MOVIES} from '../constants/actionTypes';

//const movies = (state = { movies: [], isLoading: false }, action) => {
const movies = (state = [], action) => { 
  //console.log(action.type);  
  switch (action.type) {
    case RECEIVE_MOVIES:
      action.movies.isLoading=false;
      return action.movies;
    default:
      return  {
        page: 0,
        results: [],
        total_pages: 0,
        total_results: 0,
        isLoading: true
      };
  }
}

export default movies;
