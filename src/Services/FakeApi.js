import FakeApiData from './FakeApiData.json';

export const getMovieGenres = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(FakeApiData);
    }, 512);
  });
};
