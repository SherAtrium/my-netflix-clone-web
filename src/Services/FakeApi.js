import FakeApiData from './FakeApiData.json';

const _generateMovieGenres = data => {
  // const genresObj = {};
  //
  // if (data.length > 0) {
  //   data.forEach(({ genres }) => {
  //     genresObj[genres];
  //   });
  // }
  //
  return data;
};

export const getMovieGenres = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(_generateMovieGenres(FakeApiData));
    }, 512);
  });
};