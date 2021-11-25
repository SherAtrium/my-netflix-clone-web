import PropTypes from 'prop-types';
import { Popup, POPUP_SIZE } from '../../Popup/Popup';
import SetMovieForm from '../../SetMovieForm/SetMovieForm';

import Strings from '../../../Utils/Strings';

const EditMoviePopup = ({ isOpen = false, closeMethod = () => {}, movieData = {} }) => {
  let MovieDataObject = null;

  if (isOpen) {
    // eslint-disable-next-line camelcase
    const { title, release_date, vote_average, genres, runtime, overview } = movieData;

    MovieDataObject = {
      title,
      genres,
      overview,
      movieUrl: null, // there is no movie url in data
      runtime,
      // eslint-disable-next-line camelcase
      rating: +vote_average,
      releaseDate: release_date,
    };
  }

  return (
    <Popup
      isOpen={isOpen}
      isClickableOverlay
      isAvailableCloseBtn
      popupSize={POPUP_SIZE.LARGE}
      title={Strings.popupTitle.editMovie}
      closeMethod={closeMethod}
    >
      <SetMovieForm movieData={MovieDataObject} />
    </Popup>
  );
};

EditMoviePopup.propTypes = {
  isOpen: PropTypes.bool,
  closeMethod: PropTypes.func,
  movieData: PropTypes.object,
};

export default EditMoviePopup;
