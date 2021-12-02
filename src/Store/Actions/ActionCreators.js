import { BEFORE_TO_GET_MOVIES, GET_MOVIES_IN_SUCCESS, GET_MOVIES_IN_PROGRESS } from './ActionTypes';

export const beforeToGetMovies = () => ({ type: BEFORE_TO_GET_MOVIES });
export const getMoviesInSuccess = data => ({ type: GET_MOVIES_IN_SUCCESS, payload: data });
export const getMoviesInProgress = body => ({ type: GET_MOVIES_IN_PROGRESS, payload: body });
