import { combineReducers } from 'redux';
import movies from './movies';


const reducerApp = combineReducers({
    movies
})

export default reducerApp;