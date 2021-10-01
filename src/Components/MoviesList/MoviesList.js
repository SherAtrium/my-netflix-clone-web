import classNames from 'classnames';
import MovieGenres from '../MovieGenres/MovieGenres';
import MoviesListSort from '../MoviesListSort/MoviesListSort';

import Styles from './MoviesList.module.scss';

const MoviesList = () => {
  const genres = [
    { id: 'lkm23', title: 'All' },
    { id: '98zxc', title: 'Documentary' },
    { id: '0vice', title: 'Comedy' },
    { id: 'as9da', title: 'Horror' },
    { id: '90bcv', title: 'Crime' },
  ];

  return (
    <nav className={classNames('container', Styles.genreNavbarContainer)}>
      <MovieGenres genres={genres} />
      <MoviesListSort />
    </nav>
  );
};

export default MoviesList;
