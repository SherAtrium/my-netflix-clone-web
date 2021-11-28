import axios from 'axios';

const instance = axios.create({
  baseURL: `http://localhost:4000/`,
});

const moviesAPI = {
  getMovies({
    limit = '',
    filter = '',
    offset = '',
    search = '',
    sortBy = '',
    searchBy = '',
    sortOrder = '',
  }) {
    return instance
      .get(
        `movies?sortBy=${sortBy}&sortOrder=${sortOrder}&search=${search}&searchBy=${searchBy}&filter=${filter}&offset=${offset}&limit=${limit}`,
      )
      .then(response => response.data);
  },
};

export { moviesAPI };
