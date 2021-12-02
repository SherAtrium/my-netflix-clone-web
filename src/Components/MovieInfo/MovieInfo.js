import PropTypes from 'prop-types';

import Logotype from '../Logotype/Logotype';

import Styles from './MovieInfo.module.scss';
import searchBtn from '../../Resources/SearchButton.svg';

const MovieInfo = ({ data = {}, closeMovieInfo = () => {} }) => {
  return (
    <header className={Styles.movieInfoContainer}>
      <section className='container'>
        <div className={Styles.logoSection}>
          <Logotype />
          <img src={searchBtn} alt='Search Icon' onClick={closeMovieInfo} />
        </div>

        <main>
          <div className={Styles.moviePhoto}>
            <img src={data?.poster_path} alt='Movie Poster' />
          </div>

          <div className={Styles.movieInfo}>
            <div className={Styles.movieTitleAndRate}>
              <h3>{data?.title}</h3>
              <div className={Styles.rate}>
                <span>{data?.vote_average}</span>
              </div>
            </div>

            <span className={Styles.genres}>{data?.genres?.join(' & ')}</span>

            <div className={Styles.dateAndRuntime}>
              <p>{data?.release_date.split('-')?.[0]}</p>
              <p>{data?.runtime}</p>
            </div>

            <p className={Styles.description}>{data?.overview}</p>
          </div>
        </main>
      </section>
    </header>
  );
};

MovieInfo.propTypes = {
  data: PropTypes.object,
  closeMovieInfo: PropTypes.func,
};

export default MovieInfo;
