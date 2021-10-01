import PropTypes from 'prop-types';
import Styles from './MovieGenres.module.scss';

const MovieGenres = ({ genres = [] }) => {
  return (
    <ul className={Styles.genreList}>
      {genres.map(genre => (
        <li key={genre.id}>{genre.title}</li>
      ))}
    </ul>
  );
};

MovieGenres.propTypes = {
  genres: PropTypes.array,
};

export default MovieGenres;
