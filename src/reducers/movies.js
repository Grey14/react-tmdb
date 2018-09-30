import { REQUEST_MOVIES ,RECEIVE_MOVIES} from '../constants/actionTypes';

//const movies = (state = { movies: [], isLoading: false }, action) => {
const movies = (state = [], action) => { 
  console.log(action);
  switch (action.type) {
    case REQUEST_MOVIES:
      return action.movies;
      // return {
      //   movies: state.movies,
      //   isLoading: true
      // };
    case RECEIVE_MOVIES:
      // Only accept the incoming data if it matches the most recent request. This ensures we correctly
      // handle out-of-order responses.
      if (action.startDateIndex === state.startDateIndex) {
        return {
          startDateIndex: action.startDateIndex,
          forecasts: action.forecasts,
          isLoading: false
        };
      }
      break;
    default:
      return state;
  }
}

export default movies;
