import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useEffect, useRef } from 'react';

import Styles from './Popup.module.scss';

const POPUP_SIZE = {
  LARGE: Styles.sizeLg,
  SMALL: Styles.sizeSm,
};

const Popup = ({
  title = '',
  isOpen = true,
  popupSize = '',
  children = null,
  closeMethod = () => {},
  isClickableOverlay = false,
  isAvailableCloseBtn = false,
}) => {
  const popupRef = useRef();

  const handleClickOutside = e => {
    if (isClickableOverlay && popupRef.current && !popupRef.current.contains(e.target))
      closeMethod();
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return ReactDOM.createPortal(
    isOpen ? (
      <div className={Styles.popup}>
        <div className={Styles.popupOverlay}>
          <div className={classNames(Styles.popupContent, popupSize)} ref={popupRef}>
            <div className={Styles.popupContentHeader}>
              {title && <p className={Styles.title}>{title}</p>}
              {isAvailableCloseBtn && <span className={Styles.popupClose} onClick={closeMethod} />}
            </div>

            {children}
          </div>
        </div>
      </div>
    ) : null,
    document.getElementById('portal'),
  );
};

Popup.propTypes = {
  isOpen: PropTypes.bool,
  title: PropTypes.string,
  children: PropTypes.node,
  closeMethod: PropTypes.func,
  popupSize: PropTypes.string,
  isClickableOverlay: PropTypes.bool,
  isAvailableCloseBtn: PropTypes.bool,
};

export { Popup, POPUP_SIZE };
