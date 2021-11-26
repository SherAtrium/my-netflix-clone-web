import FakeApiData from './FakeApiData.json';

// TODO this file will be removed...

export const getMovieGenres = () => {
  return new Promise(resolve => {
    const partOfMovies = FakeApiData.data.filter((item, idx) => idx < 10);
    setTimeout(() => {
      resolve({
        totalAmount: 3000,
        data: partOfMovies,
        offset: 0,
        limit: 30,
      });
    }, 512);
  });
};
