import PropTypes from 'prop-types';
import { Popup, POPUP_SIZE } from '../../Popup/Popup';
import Strings from '../../../Utils/Strings';
import { CustomInput, AVAILABLE_INPUT_TYPES } from '../../CustomInputs/CustomInput/CustomInput';
import { useState } from 'react';

const AddMoviePopup = ({ isOpen = false, closeMethod = () => {} }) => {
  const [title, setTitle] = useState('');

  return (
    <Popup
      isOpen={isOpen}
      isClickableOverlay
      isAvailableCloseBtn
      popupSize={POPUP_SIZE.LARGE}
      title={Strings.popupTitle.addMovie}
      closeMethod={() => closeMethod()}
    >
      <CustomInput
        title={Strings.inputs.movieTitle.title}
        type={AVAILABLE_INPUT_TYPES.TEXT}
        placeholder={Strings.inputs.movieTitle.placeholder}
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
    </Popup>
  );
};

AddMoviePopup.propTypes = {
  isOpen: PropTypes.bool,
  closeMethod: PropTypes.func,
};

export default AddMoviePopup;
