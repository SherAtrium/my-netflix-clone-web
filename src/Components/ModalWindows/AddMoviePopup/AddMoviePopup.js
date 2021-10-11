import { useState } from 'react';
import PropTypes from 'prop-types';

import { Popup, POPUP_SIZE } from '../../Popup/Popup';
import { ADD_MOVIE_GENRES } from '../../../Utils/Constants';
import DatePicker from '../../CustomInputs/DatePicker/DatePicker';
import CustomTextarea from '../../CustomInputs/CustomTextarea/CustomTextarea';
import DropdownSelect from '../../CustomInputs/DropdownSelect/DropdownSelect';
import { CustomInput, AVAILABLE_INPUT_TYPES } from '../../CustomInputs/CustomInput/CustomInput';

import Strings from '../../../Utils/Strings';
import Styles from './AddMoviePopup.module.scss';

const AddMoviePopup = ({ isOpen = false, closeMethod = () => {} }) => {
  const [url, setUrl] = useState('');
  const [rate, setRate] = useState('');
  const [title, setTitle] = useState('');
  const [runtime, setRuntime] = useState('');

  const [description, setDescription] = useState('');

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
      <section className={Styles.inputsContainer}>
        {/* TITLE */}
        <CustomInput
          title={Strings.inputs.movieTitle.title}
          type={AVAILABLE_INPUT_TYPES.TEXT}
          placeholder={Strings.inputs.movieTitle.placeholder}
          value={title}
          onChange={e => setTitle(e.target.value)}
        />

        {/* RELEASE DATE */}
        <DatePicker title={Strings.inputs.releaseDate.title} />

        {/* MOVIE URL */}
        <CustomInput
          title={Strings.inputs.movieUrl.title}
          type={AVAILABLE_INPUT_TYPES.TEXT}
          placeholder={Strings.inputs.movieUrl.placeholder}
          value={url}
          onChange={e => setUrl(e.target.value)}
        />

        {/* RATING */}
        <CustomInput
          title={Strings.inputs.rating.title}
          type={AVAILABLE_INPUT_TYPES.NUMBER}
          placeholder={Strings.inputs.rating.placeholder}
          value={rate}
          onChange={e => setRate(e.target.value)}
        />

        {/* GENRES */}
        <DropdownSelect
          title={Strings.inputs.genre.title}
          placeholder={Strings.inputs.genre.placeholder}
          data={selectedGenres}
          onItemSelect={onSelectGenre}
        />

        {/* RUNTIME */}
        <CustomInput
          title={Strings.inputs.runtime.title}
          type={AVAILABLE_INPUT_TYPES.NUMBER}
          placeholder={Strings.inputs.runtime.placeholder}
          value={runtime}
          onChange={e => setRuntime(e.target.value)}
        />
      </section>

      <CustomTextarea
        title={Strings.inputs.overview.title}
        placeholder={Strings.inputs.overview.placeholder}
        value={description}
        onChangeValue={(e) => setDescription(e.target.value)}
      />

    </Popup>
  );
};

AddMoviePopup.propTypes = {
  isOpen: PropTypes.bool,
  closeMethod: PropTypes.func,
};

export default AddMoviePopup;
