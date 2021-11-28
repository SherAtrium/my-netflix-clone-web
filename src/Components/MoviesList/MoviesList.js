import { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import PropTypes from 'prop-types';
import classNames from 'classnames';
import Loader from '../Loader/Loader';
import MovieCard from './MovieCard/MovieCard';
import { loadMovies } from '../../Store/Thunks';
import MovieGenres from './MovieGenres/MovieGenres';
import MoviesListSort from './MoviesListSort/MoviesListSort';
import { ALL_GENRES, AVAILABLE_TYPES_FOR_SORTING } from '../../Utils/Constants';

import Strings from '../../Utils/Strings';
import Styles from './MoviesList.module.scss';

const MoviesList = ({ selectedMovie = () => {} }) => {
  const dispatch = useDispatch();

  const { movies, isLoading, moviesRequestBody } = useSelector(state => state.moviesData);

  const [genres, setGenres] = useState([...ALL_GENRES]);

  const [sortTypes, setSortTypes] = useState([...AVAILABLE_TYPES_FOR_SORTING]);

  const onSelectGenre = useCallback((id, label) => {
    const genre = label !== Strings.movieGenres.all ? label.toLowerCase() : '';
    dispatch(loadMovies({ ...moviesRequestBody, filter: genre }));

    setGenres(prevState => {
      return prevState.map(item => ({
        ...item,
        isActive: item.id === id,
      }));
    });
  }, []);

  const onSortTypeClick = useCallback(
    type => {
      dispatch(loadMovies({ ...moviesRequestBody, sortBy: type.query }));

      setSortTypes(prevState => {
        return prevState.map(item => ({
          ...item,
          isSelected: item.query === type.query,
        }));
      });
    },
    [genres],
  );

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
