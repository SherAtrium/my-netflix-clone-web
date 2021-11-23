import { useState } from 'react';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import MoviesList from '../../Components/MoviesList/MoviesList';
import ErrorBoundary from '../../Components/ErrorBoundary/ErrorBoundary';

import Styles from './home.module.scss';

const Home = () => {
  const [selectedMovie, setSelectedMovie] = useState(null);

  return (
    <ErrorBoundary>
      {selectedMovie ? 'Hey' : <Header />}

      <main className={Styles.mainWrapper}>
        <MoviesList selectedMovie={movie => setSelectedMovie(movie)} />
      </main>

      <Footer />
    </ErrorBoundary>
  );
};

export default Home;
