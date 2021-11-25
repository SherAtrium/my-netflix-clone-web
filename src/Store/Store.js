import { combineReducers, createStore } from 'redux';
import MoviesReducer from './Reducers/MoviesReducer';

const reducers = combineReducers({
  moviesData: MoviesReducer,
});

const store = createStore(reducers);

export default store;
