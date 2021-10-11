import { useState } from 'react';
import PropTypes from 'prop-types';

import { Popup, POPUP_SIZE } from '../../Popup/Popup';
import { ADD_MOVIE_GENRES } from '../../../Utils/Constants';
import DropdownSelect from '../../CustomInputs/DropdownSelect/DropdownSelect';
import { CustomInput, AVAILABLE_INPUT_TYPES } from '../../CustomInputs/CustomInput/CustomInput';

import Strings from '../../../Utils/Strings';
import Styles from './AddMoviePopup.module.scss';
import DatePicker from '../../CustomInputs/DatePicker/DatePicker';

const AddMoviePopup = ({ isOpen = false, closeMethod = () => {} }) => {
  const [title, setTitle] = useState('');
  const [selectedGenres, setSelectedGenres] = useState(ADD_MOVIE_GENRES);

  const onSelectGenre = id => {
    setSelectedGenres(prevState => {
      return prevState.map(item => ({
        ...item,
        selected: item.id === id ? !item.selected : item.selected,
      }));
    });
  };

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

      <DropdownSelect
        title={Strings.inputs.genre.title}
        placeholder={Strings.inputs.genre.placeholder}
        data={selectedGenres}
        onItemSelect={onSelectGenre}
      />

      <DatePicker title={Strings.inputs.releaseDate.title} />
    </Popup>
  );
};

AddMoviePopup.propTypes = {
  isOpen: PropTypes.bool,
  closeMethod: PropTypes.func,
};

export default AddMoviePopup;
