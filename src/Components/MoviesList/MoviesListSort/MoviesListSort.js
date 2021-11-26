import PropTypes from 'prop-types';
import { useEffect, useRef } from 'react';
import useToggle from '../../CustomHooks/useToggle';

import Strings from '../../../Utils/Strings';
import Styles from './MoviesListSort.module.scss';

const findSelectedSortType = array => {
  const idx = array.findIndex(el => el.isSelected);
  return array[idx].label;
};

const MoviesListSort = ({ sortTypes = [], onSortTypeClick = () => {} }) => {
  const sortRef = useRef();

  const [visible, toggleVisible, setVisible] = useToggle(false);

  const handleClickOutside = e => {
    if (sortRef && !sortRef.current.contains(e.target)) setVisible(false);
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className={Styles.sortContainer}>
      <p>{Strings.movieListSorting.sortBy}</p>

      <div className={Styles.sortDropdown} ref={sortRef} onClick={toggleVisible}>
        <span>{findSelectedSortType(sortTypes)}</span>

        {visible && (
          <ul className={Styles.sortList}>
            {sortTypes.map(type => (
              <li key={type.query} onClick={() => onSortTypeClick(type)}>
                {type.label}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

MoviesListSort.propTypes = {
  sortTypes: PropTypes.array,
  onSortTypeClick: PropTypes.func,
};

export default MoviesListSort;
