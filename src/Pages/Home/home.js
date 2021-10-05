import { useState } from 'react';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import MoviesList from '../../Components/MoviesList/MoviesList';
import { Popup, POPUP_SIZE } from '../../Components/Popup/Popup';
import ErrorBoundary from '../../Components/ErrorBoundary/ErrorBoundary';

import Styles from './home.module.scss';

const Home = () => {
  const [popup, setPopup] = useState(true);

  return (
    <ErrorBoundary>
      <Header />

      {/* TODO will be removed just for testing */}
      <Popup
        isOpen={popup}
        isClickableOverlay
        isAvailableCloseBtn
        popupSize={POPUP_SIZE.LARGE}
        title='Test'
        closeMethod={() => setPopup(false)}
      >
        <h4>Hello World!</h4>
      </Popup>

      <main className={Styles.mainWrapper}>
        <MoviesList />
      </main>

      <Footer />
    </ErrorBoundary>
  );
};

export default Home;
