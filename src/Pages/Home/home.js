import Header from '../../Components/Header/Header';
import MoviesList from '../../Components/MoviesList/MoviesList';
import Footer from '../../Components/Footer/Footer';
import ErrorBoundary from '../../Components/ErrorBoundary/ErrorBoundary';

const Home = () => {
  return (
    <ErrorBoundary>
      <Header />
      <MoviesList />
      <Footer />
    </ErrorBoundary>
  );
};

export default Home;
