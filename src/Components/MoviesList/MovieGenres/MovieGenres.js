import PropTypes from 'prop-types';
import classNames from 'classnames';

import Styles from './MovieGenres.module.scss';

const MovieGenres = ({ genres = [], onSelectGenre = () => {} }) => {
  return (
    <ul className={Styles.genreList}>
      {genres.map(genre => (
        <li
          key={genre.id}
          onClick={() => onSelectGenre(genre.id)}
          className={classNames({ [`${Styles.isActive}`]: genre.isActive })}
        >
          {genre.title}
        </li>
      ))}
    </ul>
  );
};

MovieGenres.propTypes = {
  genres: PropTypes.array,
  onSelectGenre: PropTypes.func,
};

export default MovieGenres;
