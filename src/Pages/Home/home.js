import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import MoviesList from '../../Components/MoviesList/MoviesList';
import ErrorBoundary from '../../Components/ErrorBoundary/ErrorBoundary';

import Styles from './home.module.scss';
import Popup from '../../Components/Popup/Popup';

const Home = () => {
  return (
    <ErrorBoundary>
      <Header />

      <Popup
        title='kasmdlamasdasdasdasdsd'
        closeMethod={() => {}}
        isAvailableCloseBtn
        isClickableOverlay
      />

      <main className={Styles.mainWrapper}>
        <MoviesList />
      </main>

      <Footer />
    </ErrorBoundary>
  );
};

export default Home;
