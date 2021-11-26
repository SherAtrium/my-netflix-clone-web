import axios from 'axios';
import {
  MOVIES_PAGE_LIMIT,
  MOVIES_PAGE_OFFSET,
  MOVIES_SORT_ORDER_ASC,
  DEFAULT_SORT_TYPE_QUERY,
} from '../Utils/Constants';

const instance = axios.create({
  baseURL: `http://localhost:4000/`,
});

const moviesAPI = {
  getMovies({
    filter = '',
    search = '',
    searchBy = '',
    limit = MOVIES_PAGE_LIMIT,
    offset = MOVIES_PAGE_OFFSET,
    sortBy = DEFAULT_SORT_TYPE_QUERY,
    sortOrder = MOVIES_SORT_ORDER_ASC,
  }) {
    return instance
      .get(
        `movies?sortBy=${sortBy}&sortOrder=${sortOrder}&search=${search}&searchBy=${searchBy}&filter=${filter}&offset=${offset}&limit=${limit}`,
      )
      .then(response => response.data);
  },
};

export { moviesAPI };
