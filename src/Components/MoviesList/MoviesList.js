import { useEffect, useState } from 'react';

import classNames from 'classnames';
import Loader from '../Loader/Loader';
import MovieCard from './MovieCard/MovieCard';
import MovieGenres from './MovieGenres/MovieGenres';
import { getMovieGenres } from '../../Services/FakeApi';
import MoviesListSort from './MoviesListSort/MoviesListSort';

import Strings from '../../Utils/Strings';
import Styles from './MoviesList.module.scss';

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
  const [isLoading, setIsLoading] = useState(true);

  const [genres, setGenres] = useState(allGenres);
  const [selectedGenre, setSelectedGenre] = useState(genres[0]);

  const [sortTypes, setSortTypes] = useState(sortingTypes);

  const [movieList, setMovieList] = useState([]);

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

  const sortMoviesByGenre = list => {
    return list.filter(movie => movie.genres.includes(selectedGenre.title));
  };

  const onSortTypeClick = type => {
    setSortTypes(prevState => {
      return prevState.map(item => ({
        ...item,
        isSelected: item.id === type.id,
      }));
    });
  };

  useEffect(async () => {
    setIsLoading(true);
    setMovieList([]);

    const response = await getMovieGenres();
    setMovieList(
      selectedGenre.title === Strings.movieGenres.all
        ? response.data
        : sortMoviesByGenre(response.data),
    );

    setIsLoading(false);
  }, [genres]);

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
