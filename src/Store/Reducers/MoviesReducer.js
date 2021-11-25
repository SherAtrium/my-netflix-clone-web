import { GET_MOVIES_LIST } from '../ActionTypes';

const initialState = {
  movies: [],
};

const MoviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIES_LIST:
      return { ...state, movies: action.payload };

    default:
      return state;
  }
};

export default MoviesReducer;
