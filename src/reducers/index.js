import {combineReducers} from 'redux';
import MoviesReducer from './reducer_movies';
import SelectedMovie from './reducer_selected_movie';

const rootReducer = combineReducers({
    list:MoviesReducer,
    selected:SelectedMovie
});

export default rootReducer;