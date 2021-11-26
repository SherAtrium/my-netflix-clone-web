import { GET_MOVIES_IN_SUCCESS, GET_MOVIES_IN_PROGRESS, BEFORE_TO_GET_MOVIES } from './ActionTypes';

export const beforeToGetMovies = () => ({ type: BEFORE_TO_GET_MOVIES });
export const getMoviesInProgress = () => ({ type: GET_MOVIES_IN_PROGRESS });
export const getMoviesInSuccess = data => ({ type: GET_MOVIES_IN_SUCCESS, payload: data });
