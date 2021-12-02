import axios from 'axios';

const instance = axios.create({
  baseURL: `http://localhost:4000/`,
});

const moviesAPI = {
  getMovies(body) {
    return instance
      .get('movies', {
        params: { ...body },
      })
      .then(response => response.data);
  },
};

export { moviesAPI };
