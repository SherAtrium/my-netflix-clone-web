import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import MoviesList from '../../Components/MoviesList/MoviesList';
import ErrorBoundary from '../../Components/ErrorBoundary/ErrorBoundary';

import Styles from './home.module.scss';

const Home = () => {
  return (
    <ErrorBoundary>
      <Header />

      <main className={Styles.mainWrapper}>
        <MoviesList />
      </main>

      <Footer />
    </ErrorBoundary>
  );
};

export default Home;
