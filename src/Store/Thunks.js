import { moviesAPI } from '../Services/Api';
import {
  getMoviesInProgress,
  getMoviesInSuccess,
  beforeToGetMovies,
} from './Actions/ActionCreators';

// TODO: setTimeout implemented to test the loader, cause the response from API comes in 1-2ms.

const loadMovies = body => async dispatch => {
  try {
    dispatch(beforeToGetMovies([]));
    dispatch(getMoviesInProgress(body));

    const response = await moviesAPI.getMovies(body);
    setTimeout(() => dispatch(getMoviesInSuccess(response.data)), 512);
  } catch (e) {
    throw new Error(e);
  }
};

export { loadMovies };
