import { GET_MOVIES_IN_SUCCESS, GET_MOVIES_IN_PROGRESS } from './ActionTypes';

export const getMoviesInProgress = () => ({ type: GET_MOVIES_IN_PROGRESS });
export const getMoviesInSuccess = data => ({ type: GET_MOVIES_IN_SUCCESS, payload: data });
