import Strings from './Strings';

export const DEFAULT_SORT_TYPE_LABEL = Strings.movieListSorting.releaseDate;
export const DEFAULT_SORT_TYPE_QUERY = Strings.movieListSorting.queries.releaseDate;

export const MOVIES_SORT_ORDER_ASC = 'asc';
export const MOVIES_SORT_ORDER_DESC = 'desc';

export const MOVIES_SEARCH_BY_TITLE = 'title';
export const MOVIES_SEARCH_BY_GENRE = 'genre';

export const MOVIES_PAGE_OFFSET = 1;
export const MOVIES_PAGE_LIMIT = 30;

export const DEFAULT_SEARCH_ESTIMATE_TIME = 256;

export const AVAILABLE_TYPES_FOR_SORTING = [
  {
    label: DEFAULT_SORT_TYPE_LABEL,
    query: DEFAULT_SORT_TYPE_QUERY,
    isSelected: true,
  },
  {
    label: Strings.movieListSorting.title,
    query: Strings.movieListSorting.queries.title,
    isSelected: false,
  },
  {
    label: Strings.movieListSorting.rate,
    query: Strings.movieListSorting.queries.rate,
    isSelected: false,
  },
  {
    label: Strings.movieListSorting.budget,
    query: Strings.movieListSorting.queries.budget,
    isSelected: false,
  },
  {
    label: Strings.movieListSorting.revenue,
    query: Strings.movieListSorting.queries.revenue,
    isSelected: false,
  },
  {
    label: Strings.movieListSorting.runtime,
    query: Strings.movieListSorting.queries.runtime,
    isSelected: false,
  },
];

export const ALL_GENRES = [
  { id: 'lkm23', label: Strings.movieGenres.all, isActive: true },
  { id: '98zxc', label: Strings.movieGenres.documentary, isActive: false },
  { id: '0vice', label: Strings.movieGenres.comedy, isActive: false },
  { id: 'as9da', label: Strings.movieGenres.horror, isActive: false },
  { id: '90bcv', label: Strings.movieGenres.crime, isActive: false },
];

export const SET_MOVIE_GENRES = [
  { id: 'lkm23', label: Strings.movieGenres.all, selected: false },
  { id: '98zxc', label: Strings.movieGenres.documentary, selected: false },
  { id: '0vice', label: Strings.movieGenres.comedy, selected: false },
  { id: 'as9da', label: Strings.movieGenres.horror, selected: false },
  { id: '90bcv', label: Strings.movieGenres.crime, selected: false },
];
