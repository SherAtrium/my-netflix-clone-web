import PropTypes from 'prop-types';
import { Popup, POPUP_SIZE } from '../../Popup/Popup';
import { Button, BUTTON_COLOR, BUTTON_SIZE, BUTTON_STYLE } from '../../Button/Button';

import Strings from '../../../Utils/Strings';
import Styles from './DeleteMoviePopup.module.scss';

const DeleteMoviePopup = ({ isOpen = false, closeMethod = () => {} }) => {
  return (
    <Popup
      isOpen={isOpen}
      isClickableOverlay
      isAvailableCloseBtn
      popupSize={POPUP_SIZE.SMALL}
      title={Strings.popupTitle.deleteMovie}
      closeMethod={closeMethod}
    >
      <div className={Styles.popupContent}>
        <p>{Strings.popupContent.confirmDelete}</p>

        <Button
          tooltip={Strings.buttons.confirm}
          btnStyle={BUTTON_STYLE.PRIMARY}
          btnSize={BUTTON_SIZE.MIDDLE}
          btnColor={BUTTON_COLOR.RED}
          onClick={() => {}}
          isDisable={false}
        >
          {Strings.buttons.confirm}
        </Button>
      </div>
    </Popup>
  );
};

DeleteMoviePopup.propTypes = {
  isOpen: PropTypes.bool,
  closeMethod: PropTypes.func,
};

export default DeleteMoviePopup;
