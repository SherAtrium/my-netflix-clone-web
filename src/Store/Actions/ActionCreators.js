import { GET_MOVIES_LIST } from '../ActionTypes';

const Actions = {
  getMoviesList: movies => ({ type: GET_MOVIES_LIST, payload: movies }),
};

export default Actions;
