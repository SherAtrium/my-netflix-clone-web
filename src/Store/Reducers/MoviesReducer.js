import {
  BEFORE_TO_GET_MOVIES,
  GET_MOVIES_IN_SUCCESS,
  GET_MOVIES_IN_PROGRESS,
} from '../Actions/ActionTypes';

import {
  DEFAULT_SORT_TYPE_QUERY,
  MOVIES_PAGE_LIMIT,
  MOVIES_PAGE_OFFSET,
  MOVIES_SORT_ORDER_ASC,
} from '../../Utils/Constants';

const initialState = {
  movies: [],
  isLoading: true,
  moviesRequestBody: {
    filter: '',
    search: '',
    searchBy: '',
    limit: MOVIES_PAGE_LIMIT,
    offset: MOVIES_PAGE_OFFSET,
    sortBy: DEFAULT_SORT_TYPE_QUERY,
    sortOrder: MOVIES_SORT_ORDER_ASC,
  },
};

const MoviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case BEFORE_TO_GET_MOVIES:
      return { ...state, movies: [] };

    case GET_MOVIES_IN_PROGRESS:
      return {
        ...state,
        isLoading: true,
        moviesRequestBody: { ...state.moviesRequestBody, ...action.payload },
      };

    case GET_MOVIES_IN_SUCCESS:
      return { ...state, movies: action.payload, isLoading: false };

    default:
      return state;
  }
};

export default MoviesReducer;
