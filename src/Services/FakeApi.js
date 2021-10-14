import FakeApiData from './FakeApiData.json';

export const getMovieGenres = () => {
  return new Promise(resolve => {
    const partOfMovies = FakeApiData.data.filter((item, idx) => idx < 20);
    setTimeout(() => {
      resolve({
        totalAmount: 3000,
        data: partOfMovies,
        offset: 0,
        limit: 20,
      });
    }, 512);
  });
};
