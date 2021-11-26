import { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import classNames from 'classnames';
import Loader from '../Loader/Loader';
import MovieCard from './MovieCard/MovieCard';
import MovieGenres from './MovieGenres/MovieGenres';
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

const MoviesList = ({ selectedMovie = () => {} }) => {
  const { movies, isLoading } = useSelector(state => state.moviesData);

  const [genres, setGenres] = useState(ALL_GENRES);
  const [selectedGenre, setSelectedGenre] = useState(genres[0]);

  const [sortTypes, setSortTypes] = useState(AVAILABLE_TYPES_FOR_SORTING);
  const [selectedSortType, setSelectedSortType] = useState(findSelectedSort(sortTypes));

  const findSelectedGenre = id => genres.find(i => i.id === id);

  const onSelectGenre = useCallback(id => {
    setSelectedGenre(findSelectedGenre(id));

    setGenres(prevState => {
      return prevState.map(item => ({
        ...item,
        isActive: item.id === id,
      }));
    });
  }, []);

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

  const onSortTypeClick = useCallback(type => {
    setSortTypes(prevState => {
      return prevState.map(item => ({
        ...item,
        isSelected: item.id === type.id,
      }));
    });
    setSelectedSortType(type);
  }, []);

  console.log('->', isLoading);

  return (
    <>
      <nav className={classNames('container', Styles.genreNavbarContainer)}>
        <MovieGenres genres={genres} onSelectGenre={onSelectGenre} />
        <MoviesListSort sortTypes={sortTypes} onSortTypeClick={onSortTypeClick} />
      </nav>

      <Loader loading={isLoading} />

      <section className={classNames('container', Styles.movieCards)}>
        {movies.length === 0 && !isLoading && <p>There are no films in this genre yet</p>}

        {movies.map(i => (
          <MovieCard key={i.id} movieData={i} onSelectMovie={selectedMovie} />
        ))}
      </section>
    </>
  );
};

MoviesList.propTypes = {
  selectedMovie: PropTypes.func,
};

export default MoviesList;
