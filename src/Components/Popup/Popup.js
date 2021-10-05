import PropTypes from 'prop-types';
import Styles from './Popup.module.scss';

const POPUP_SIZE = {
  LARGE: Styles.btnLg,
  SMALL: Styles.btnSm,
};

const Popup = ({
  title = '',
  children = null,
  closeMethod = () => {},
  isAvailableCloseBtn = false,
  isClickableOverlay = false,
}) => {
  return (
    <div className={Styles.popupContainer}>

    </div>
  )
};

Popup.propTypes = {
  title: PropTypes.string,
  closeMethod: PropTypes.func,
  isClickableOverlay: PropTypes.bool,
  isAvailableCloseBtn: PropTypes.bool,
};

export default Popup;