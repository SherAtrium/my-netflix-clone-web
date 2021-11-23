import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useEffect, useRef, useState } from 'react';
import useToggle from '../../CustomHooks/useToggle';

import EditMoviePopup from '../../ModalWindows/EditMoviePopup/EditMoviePopup';

import Styles from './MovieCard.module.scss';
import Strings from '../../../Utils/Strings';
import DeleteMoviePopup from '../../ModalWindows/DeleteMoviePopup/DeleteMoviePopup';

const options = [
  { id: 'h89h0', label: Strings.movieOptions.edit },
  { id: 'df90d', label: Strings.movieOptions.delete },
];

const MovieCard = ({ movieData = {} }) => {
  const optionsRef = useRef();
  const [editMoviePopup, setEditMoviePopup] = useState(false);
  const [visible, toggleVisible, setVisible] = useToggle(false);
  const [deleteMoviePopup, setDeleteMoviePopup] = useState(false);

  const handleClickOutside = e => {
    if (optionsRef.current && !optionsRef.current.contains(e.target)) setVisible(false);
  };

  const onClickMovieOption = type => {
    if (type.label === Strings.movieOptions.edit) setEditMoviePopup(true);
    if (type.label === Strings.movieOptions.delete) setDeleteMoviePopup(true);
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className={Styles.movie}>
      <EditMoviePopup
        isOpen={editMoviePopup}
        closeMethod={setEditMoviePopup}
        movieData={movieData}
      />

      <DeleteMoviePopup isOpen={deleteMoviePopup} closeMethod={setDeleteMoviePopup} />

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
              <li key={type.id} onClick={() => onClickMovieOption(type)}>
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
