import { moviesAPI } from '../Services/Api';
import { getMoviesInProgress, getMoviesInSuccess } from './Actions/ActionCreators';

const loadMovies = () => async dispatch => {
  try {
    dispatch(getMoviesInProgress());
    const response = await moviesAPI.getMovies();

    // TODO => The setTimeout implemented just for testing the loader...

    setTimeout(() => dispatch(getMoviesInSuccess(response.data)), 512);
  } catch (e) {
    throw new Error(e);
  }
};

export { loadMovies };
