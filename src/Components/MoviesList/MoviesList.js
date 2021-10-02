import { useState } from 'react';
import classNames from 'classnames';
import MovieGenres from '../MovieGenres/MovieGenres';
import MoviesListSort from '../MoviesListSort/MoviesListSort';

import Styles from './MoviesList.module.scss';
import Strings from '../../Utils/Strings';

// TEMPORARY DATA
const allGenres = [
  { id: 'lkm23', title: Strings.movieGenres.all, isActive: true },
  { id: '98zxc', title: Strings.movieGenres.documentary, isActive: false },
  { id: '0vice', title: Strings.movieGenres.comedy, isActive: false },
  { id: 'as9da', title: Strings.movieGenres.horror, isActive: false },
  { id: '90bcv', title: Strings.movieGenres.crime, isActive: false },
];

const sortingTypes = [
  { id: 'zxc323', label: Strings.movieListSorting.releaseDate, isSelected: true },
  { id: 'mlkg90', label: Strings.movieListSorting.name, isSelected: false },
];

const MoviesList = () => {
  const [sortTypes, setSortTypes] = useState(sortingTypes);
  const [genres, setGenres] = useState(allGenres);

  const onSelectNavItem = id =>
    setGenres(() => {
      const deepCopy = JSON.parse(JSON.stringify(genres));
      deepCopy.forEach(i => (i.isActive = i.id === id));
      return [...deepCopy];
    });

  const onSortTypeClick = type =>
    setSortTypes(() => {
      const deepCopy = JSON.parse(JSON.stringify(sortTypes));
      deepCopy.forEach(i => (i.isSelected = i.id === type.id));
      return [...deepCopy];
    });

  return (
    <nav className={classNames('container', Styles.genreNavbarContainer)}>
      <MovieGenres genres={genres} onSelectNavItem={onSelectNavItem} />
      <MoviesListSort sortTypes={sortTypes} onSortTypeClick={onSortTypeClick} />
    </nav>
  );
};

export default MoviesList;
