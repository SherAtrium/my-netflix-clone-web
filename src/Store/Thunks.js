import { moviesAPI } from '../Services/Api';
import { getMoviesInProgress, getMoviesInSuccess } from './Actions/ActionCreators';

const loadMovies = () => async dispatch => {
  try {
    dispatch(getMoviesInProgress());
    const response = await moviesAPI.getMovies();
    dispatch(getMoviesInSuccess(response.data));
  } catch (e) {
    throw new Error(e);
  }
};

export { loadMovies };
