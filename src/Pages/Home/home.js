import { useCallback, useEffect, useState } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';

import { moviesAPI } from '../../Services/Api';
import Actions from '../../Store/Actions/ActionCreators';

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

  const { movies } = useSelector(state => state.moviesData);
  const dispatch = useDispatch();

  useEffect(async () => {
    // console.log(props);
    //
    // const response = await moviesAPI.getMovies();
    //
    // console.log(response);
  });

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
