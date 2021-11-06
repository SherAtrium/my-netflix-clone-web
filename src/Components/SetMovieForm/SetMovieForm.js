import { useState } from 'react';
import PropTypes from 'prop-types';

import DatePicker from '../CustomInputs/DatePicker/DatePicker';
import DropdownSelect from '../CustomInputs/DropdownSelect/DropdownSelect';
import CustomTextarea from '../CustomInputs/CustomTextarea/CustomTextarea';
import { AVAILABLE_INPUT_TYPES, CustomInput } from '../CustomInputs/CustomInput/CustomInput';
import { Button, BUTTON_COLOR, BUTTON_SIZE, BUTTON_STYLE, BUTTON_TYPE } from '../Button/Button';

import { SET_MOVIE_GENRES } from '../../Utils/Constants';

import Strings from '../../Utils/Strings';
import Styles from './SetMovieForm.module.scss';

const SetMovieForm = ({ movieData = null }) => {
  const [url, setUrl] = useState('');
  const [rate, setRate] = useState(movieData?.rating || '');
  const [title, setTitle] = useState(movieData?.title || '');
  const [date, setDate] = useState(movieData?.releaseDate || '');
  const [runtime, setRuntime] = useState(movieData?.runtime || '');
  const [description, setDescription] = useState(movieData?.overview || '');

  const generateGenres = () => {
    if (movieData) {
      return SET_MOVIE_GENRES.map(item => ({
        ...item,
        selected: movieData.genres.includes(item.label),
      }));
    }
    return SET_MOVIE_GENRES;
  };

  const [genres, setGenres] = useState(generateGenres());

  const onSelectGenre = id => {
    setGenres(prevState => {
      return prevState.map(item => ({
        ...item,
        selected: item.id === id ? !item.selected : item.selected,
      }));
    });
  };

  const unselectGenres = () => {
    setGenres(prevState => {
      return prevState.map(item => ({ ...item, selected: false }));
    });
  };

  const onReset = () => {
    unselectGenres();

    setUrl('');
    setRate('');
    setDate('');
    setTitle('');
    setRuntime('');
    setDescription('');
  };

  const onSubmit = e => {
    e.preventDefault();
    console.log({
      url,
      date,
      rate,
      title,
      runtime,
      genres,
      description,
    });
  };

  return (
    <form>
      <section className={Styles.inputsContainer}>
        {/* TITLE */}
        <CustomInput
          title={Strings.inputs.movieTitle.title}
          type={AVAILABLE_INPUT_TYPES.TEXT}
          placeholder={Strings.inputs.movieTitle.placeholder}
          value={title}
          onChange={val => setTitle(val)}
        />

        {/* RELEASE DATE */}
        <DatePicker title={Strings.inputs.releaseDate.title} value={date} onChange={setDate} />

        {/* MOVIE URL */}
        <CustomInput
          title={Strings.inputs.movieUrl.title}
          type={AVAILABLE_INPUT_TYPES.TEXT}
          placeholder={Strings.inputs.movieUrl.placeholder}
          value={url}
          onChange={val => setUrl(val)}
        />

        {/* RATING */}
        <CustomInput
          title={Strings.inputs.rating.title}
          type={AVAILABLE_INPUT_TYPES.NUMBER}
          placeholder={Strings.inputs.rating.placeholder}
          value={rate}
          onChange={val => setRate(val)}
        />

        {/* GENRES */}
        <DropdownSelect
          title={Strings.inputs.genre.title}
          placeholder={Strings.inputs.genre.placeholder}
          data={genres}
          onItemSelect={onSelectGenre}
        />

        {/* RUNTIME */}
        <CustomInput
          title={Strings.inputs.runtime.title}
          type={AVAILABLE_INPUT_TYPES.NUMBER}
          placeholder={Strings.inputs.runtime.placeholder}
          value={runtime}
          onChange={val => setRuntime(val)}
        />
      </section>

      <CustomTextarea
        title={Strings.inputs.overview.title}
        placeholder={Strings.inputs.overview.placeholder}
        value={description}
        onChangeValue={e => setDescription(e.target.value)}
      />

      <div className={Styles.buttons}>
        <Button
          type={BUTTON_TYPE.RESET}
          tooltip={Strings.buttons.reset}
          btnStyle={BUTTON_STYLE.OUTLINE}
          btnSize={BUTTON_SIZE.LARGE}
          btnColor={BUTTON_COLOR.RED}
          onClick={onReset}
          isDisable={false}
        >
          {Strings.buttons.reset}
        </Button>

        <Button
          type={BUTTON_TYPE.SUBMIT}
          tooltip={Strings.buttons.submit}
          btnStyle={BUTTON_STYLE.PRIMARY}
          btnSize={BUTTON_SIZE.LARGE}
          btnColor={BUTTON_COLOR.RED}
          onClick={onSubmit}
          isDisable={false}
        >
          {Strings.buttons.submit}
        </Button>
      </div>
    </form>
  );
};

SetMovieForm.propTypes = {
  movieData: PropTypes.object,
};

export default SetMovieForm;
