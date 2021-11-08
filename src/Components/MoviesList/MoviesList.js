import { useEffect, useState } from 'react';

import classNames from 'classnames';
import Loader from '../Loader/Loader';
import MovieCard from './MovieCard/MovieCard';
import MovieGenres from './MovieGenres/MovieGenres';
import { getMovieGenres } from '../../Services/FakeApi';
import { sortByName, sortByReleaseDate } from './helper';
import MoviesListSort from './MoviesListSort/MoviesListSort';
import {
  ALL_GENRES,
  SORT_BY_NAME,
  SORT_BY_RELEASE_DATE,
  AVAILABLE_TYPES_FOR_SORTING,
} from '../../Utils/Constants';

import Strings from '../../Utils/Strings';
import Styles from './MoviesList.module.scss';

const findSelectedSort = data => data.filter(i => i.isSelected)[0];

const MoviesList = () => {
  const [isLoading, setIsLoading] = useState(true);

  const [genres, setGenres] = useState(ALL_GENRES);
  const [selectedGenre, setSelectedGenre] = useState(genres[0]);

  const [movieList, setMovieList] = useState([]);

  const [sortTypes, setSortTypes] = useState(AVAILABLE_TYPES_FOR_SORTING);
  const [selectedSortType, setSelectedSortType] = useState(findSelectedSort(sortTypes));

  const findSelectedGenre = id => genres.find(i => i.id === id);

  const onSelectGenre = id => {
    setSelectedGenre(findSelectedGenre(id));

    setGenres(prevState => {
      return prevState.map(item => ({
        ...item,
        isActive: item.id === id,
      }));
    });
  };

  const sortingMovies = data => {
    switch (selectedSortType.label) {
      case SORT_BY_RELEASE_DATE:
        return sortByReleaseDate(data);

      case SORT_BY_NAME:
        return sortByName(data);

      default:
        return data;
    }
  };

  const sortMoviesByGenre = list => {
    return list.filter(movie => movie.genres.includes(selectedGenre.label));
  };

  const onSortTypeClick = type => {
    setSortTypes(prevState => {
      return prevState.map(item => ({
        ...item,
        isSelected: item.id === type.id,
      }));
    });
    setSelectedSortType(type);
  };

  useEffect(async () => {
    setIsLoading(true);
    setMovieList([]);

    const response = await getMovieGenres();

    setMovieList(
      selectedGenre.label === Strings.movieGenres.all
        ? sortingMovies(response.data)
        : sortMoviesByGenre(sortingMovies(response.data)),
    );

    setIsLoading(false);
  }, [genres, selectedSortType]);

  return (
    <>
      <nav className={classNames('container', Styles.genreNavbarContainer)}>
        <MovieGenres genres={genres} onSelectGenre={onSelectGenre} />
        <MoviesListSort sortTypes={sortTypes} onSortTypeClick={onSortTypeClick} />
      </nav>

      <Loader loading={isLoading} />

      <section className={classNames('container', Styles.movieCards)}>
        {movieList.length === 0 && !isLoading && <p>There are no films in this genre yet</p>}

        {movieList.map(i => (
          <MovieCard key={i.id} movieData={i} />
        ))}
      </section>
    </>
  );
};

export default MoviesList;
