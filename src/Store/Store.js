import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import MoviesReducer from './Reducers/MoviesReducer';

const reducers = combineReducers({
  moviesData: MoviesReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
