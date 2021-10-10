import Strings from './Strings';

export const ALL_GENRES = [
  { id: 'lkm23', label: Strings.movieGenres.all, isActive: true },
  { id: '98zxc', label: Strings.movieGenres.documentary, isActive: false },
  { id: '0vice', label: Strings.movieGenres.comedy, isActive: false },
  { id: 'as9da', label: Strings.movieGenres.horror, isActive: false },
  { id: '90bcv', label: Strings.movieGenres.crime, isActive: false },
];

export const ADD_MOVIE_GENRES = [
  { id: 'lkm23', label: Strings.movieGenres.all, selected: false },
  { id: '98zxc', label: Strings.movieGenres.documentary, selected: false },
  { id: '0vice', label: Strings.movieGenres.comedy, selected: false },
  { id: 'as9da', label: Strings.movieGenres.horror, selected: false },
  { id: '90bcv', label: Strings.movieGenres.crime, selected: false },
];

export const AVAILABLE_TYPES_FOR_SORTING = [
  { id: 'zxc323', label: Strings.movieListSorting.releaseDate, isSelected: true },
  { id: 'mlkg90', label: Strings.movieListSorting.name, isSelected: false },
];
