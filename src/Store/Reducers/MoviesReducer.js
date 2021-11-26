import { GET_MOVIES_IN_SUCCESS, GET_MOVIES_IN_PROGRESS } from '../Actions/ActionTypes';

const initialState = {
  movies: [],
  isLoading: true,
};

const MoviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIES_IN_PROGRESS:
      return { ...state, isLoading: true };

    case GET_MOVIES_IN_SUCCESS:
      return { ...state, movies: action.payload, isLoading: false };

    default:
      return state;
  }
};

export default MoviesReducer;