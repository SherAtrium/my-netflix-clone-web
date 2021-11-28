import { useCallback, useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { loadMovies } from '../../Store/Thunks';

import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import MovieInfo from '../../Components/MovieInfo/MovieInfo';
import MoviesList from '../../Components/MoviesList/MoviesList';
import ErrorBoundary from '../../Components/ErrorBoundary/ErrorBoundary';

import Styles from './home.module.scss';

const Home = () => {
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleSelectedMovie = useCallback(movie => setSelectedMovie(movie), []);
  const handleCloseMovieInfo = useCallback(() => setSelectedMovie(null), []);

  const { moviesRequestBody } = useSelector(state => state.moviesData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadMovies(moviesRequestBody));
  }, []);

  return (
    <ErrorBoundary>
      {selectedMovie ? (
        <MovieInfo data={selectedMovie} closeMovieInfo={handleCloseMovieInfo} />
      ) : (
        <Header />
      )}

      <main className={Styles.mainWrapper}>
        <MoviesList selectedMovie={handleSelectedMovie} />
      </main>

      <Footer />
    </ErrorBoundary>
  );
};

export default Home;
