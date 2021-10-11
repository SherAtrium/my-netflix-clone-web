import PropTypes from 'prop-types';
import { useEffect, useRef } from 'react';
import useToggle from '../../CustomHooks/useToggle';

import Styles from './DropdownSelect.module.scss';

const getSelectedItemsLabel = data => {
  const selectedItems = [];
  data.forEach(el => el.selected && selectedItems.push(el.label));

  return selectedItems;
};

const DropdownSelect = ({ title = '', placeholder = '', data = [], onItemSelect = () => {} }) => {
  const dropdownRef = useRef();

  const [visible, toggleVisible, setVisible] = useToggle(false);

  const handleClickOutside = e => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) setVisible(false);
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const selectedItems = getSelectedItemsLabel(data);

  return (
    <div className={Styles.dropdownContainer}>
      <p>{title}</p>

      <div ref={dropdownRef}>
        <ul className={Styles.dropdown} onClick={toggleVisible}>
          {selectedItems.length > 0 ? (
            selectedItems.map(i => <li key={i}>{i}</li>)
          ) : (
            <span>{placeholder}</span>
          )}
        </ul>

        {visible && (
          <div className={Styles.options}>
            {data.map(item => (
              // eslint-disable-next-line jsx-a11y/label-has-associated-control
              <label key={item.id}>
                {item.label}
                <input
                  type='checkbox'
                  value={item.label}
                  defaultChecked={item.selected}
                  onChange={() => onItemSelect(item.id)}
                />
                <span className={Styles.checkmark} />
              </label>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

DropdownSelect.propTypes = {
  title: PropTypes.string,
  placeholder: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string || PropTypes.number,
      label: PropTypes.string || PropTypes.number,
    }),
  ),
  onItemSelect: PropTypes.func,
};

export default DropdownSelect;
