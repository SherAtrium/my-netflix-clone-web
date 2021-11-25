import { useCallback, useEffect, useState } from 'react';
import { connect } from 'react-redux';

import Actions from '../../Store/Actions/ActionCreators';

import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import MovieInfo from '../../Components/MovieInfo/MovieInfo';
import MoviesList from '../../Components/MoviesList/MoviesList';
import ErrorBoundary from '../../Components/ErrorBoundary/ErrorBoundary';

import Styles from './home.module.scss';

const Home = props => {
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleSelectedMovie = useCallback(movie => setSelectedMovie(movie), []);
  const handleCloseMovieInfo = useCallback(() => setSelectedMovie(null), []);

  useEffect(async () => {
    console.log(props);

    const request = await fetch('http://localhost:4000/movies?offset=2&limit=20');
    const response = await request.json();
    console.log(response);
  });

  return (
    <ErrorBoundary>
      <button
        onClick={() => {
          props.getMoviesList([1, 3, 4, 5]);
        }}
      >
        SET MOVIE
      </button>

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

const mapStateToProps = store => ({
  moviesData: store.moviesData,
});

const mapDispatchToProps = dispatch => ({
  getMoviesList: movies => dispatch(Actions.getMoviesList(movies)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
