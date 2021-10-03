import PropTypes from 'prop-types';
import Styles from './MovieCard.module.scss';

const MovieCard = ({ movieData = {} }) => {
  console.log(movieData);
  return (
    <div className={Styles.movie}>
      <div className={Styles.imgContainer}>
        <img src={movieData.poster_path} alt={`Poster of movie: ${movieData.title}`} />
      </div>

      <div className={Styles.titleAndGenres}>
        <p>{movieData.title}</p>
        <span>{movieData.genres.join(', ')}</span>
      </div>

      <div className={Styles.releaseDate}>
        <span>{movieData.release_date.split('-')[0]}</span>
      </div>
    </div>
  );
};

MovieCard.propTypes = {
  movieData: PropTypes.object,
};

export default MovieCard;
