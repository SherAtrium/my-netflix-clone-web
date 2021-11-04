import PropTypes from 'prop-types';
import { useEffect, useRef } from 'react';

import classNames from 'classnames';
import useToggle from '../../CustomHooks/useToggle';

import Strings from '../../../Utils/Strings';
import Styles from './MovieCard.module.scss';

const options = [
  { id: 'h89h0', label: Strings.movieOptions.edit },
  { id: 'df90d', label: Strings.movieOptions.delete },
];

const MovieCard = ({ movieData = {} }) => {
  const optionsRef = useRef();
  const [visible, toggleVisible, setVisible] = useToggle(false);

  const handleClickOutside = e => {
    if (optionsRef.current && !optionsRef.current.contains(e.target)) setVisible(false);
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className={Styles.movie}>
      <div
        className={classNames(Styles.options, { [`${Styles.isFocused}`]: visible })}
        ref={optionsRef}
        onClick={toggleVisible}
      >
        <span className={Styles.dot}>&bull;</span>
        <span className={Styles.dot}>&bull;</span>
        <span className={Styles.dot}>&bull;</span>

        {visible && (
          <ul className={Styles.movieOptionList}>
            {options.map(type => (
              <li key={type.id} onClick={() => console.log(type)}>
                {type.label}
              </li>
            ))}
          </ul>
        )}
      </div>

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
