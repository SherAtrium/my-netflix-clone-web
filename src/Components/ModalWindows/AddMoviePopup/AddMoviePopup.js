import PropTypes from 'prop-types';
import Strings from '../../../Utils/Strings';
import { Popup, POPUP_SIZE } from '../../Popup/Popup';
import SetMovieForm from '../../SetMovieForm/SetMovieForm';

const AddMoviePopup = ({ isOpen = false, closeMethod = () => {} }) => {
  return (
    <Popup
      isOpen={isOpen}
      isClickableOverlay
      isAvailableCloseBtn
      popupSize={POPUP_SIZE.LARGE}
      title={Strings.popupTitle.addMovie}
      closeMethod={closeMethod}
    >
      <SetMovieForm />
    </Popup>
  );
};

AddMoviePopup.propTypes = {
  isOpen: PropTypes.bool,
  closeMethod: PropTypes.func,
};

export default AddMoviePopup;
