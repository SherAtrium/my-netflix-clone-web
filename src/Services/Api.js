import axios from 'axios';

const instance = axios.create({
  baseURL: `http://localhost:4000/`,
});

const moviesAPI = {
  getMovies() {
    return instance.get('movies').then(response => response.data);
  },

  getMoviesByGenre(genre) {
    return instance.get(`movies?filter=${genre}`).then(response => response.data);
  },
};

export { moviesAPI };
