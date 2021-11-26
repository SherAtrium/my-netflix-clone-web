import { moviesAPI } from '../Services/Api';
import { getMoviesInProgress, getMoviesInSuccess } from './Actions/ActionCreators';

// TODO: setTimeout implemented to test the loader, cause the response from API comes in 1-3ms.

const loadMovies = () => async dispatch => {
  try {
    dispatch(getMoviesInProgress());
    const response = await moviesAPI.getMovies();
    setTimeout(() => dispatch(getMoviesInSuccess(response.data)), 512);
  } catch (e) {
    throw new Error(e);
  }
};

const loadMoviesByGenre = genre => async dispatch => {
  try {
    dispatch(getMoviesInProgress());
    const response = await moviesAPI.getMoviesByGenre(genre);
    setTimeout(() => dispatch(getMoviesInSuccess(response.data)), 512);
  } catch (e) {
    throw new Error(e);
  }
};

export { loadMovies, loadMoviesByGenre };
