import { useCallback, useState } from 'react';
import Logotype from '../Logotype/Logotype';

import Strings from '../../Utils/Strings';
import headerImg from '../../Resources/HeaderBG.png';
import { Button, BUTTON_COLOR, BUTTON_SIZE, BUTTON_STYLE } from '../Button/Button';

import Styles from './Header.module.scss';
import AddMoviePopup from '../ModalWindows/AddMoviePopup/AddMoviePopup';

const Header = () => {
  const [addMoviePopup, setAddMoviePopup] = useState(false);

  const handleSetAddMoviePopup = useCallback(bool => setAddMoviePopup(bool), []);

  return (
    <>
      <AddMoviePopup isOpen={addMoviePopup} closeMethod={() => handleSetAddMoviePopup(false)} />

      <header className={Styles.header}>
        <img src={headerImg} alt='Background collage' />

        <div className='container'>
          <section className={Styles.topSection}>
            <Logotype animated />

            <Button
              tooltip={Strings.buttons.addMovie}
              btnStyle={BUTTON_STYLE.TRANSPARENT}
              btnSize={BUTTON_SIZE.MIDDLE}
              btnColor={BUTTON_COLOR.RED}
              onClick={() => handleSetAddMoviePopup(true)}
              isDisable={false}
            >
              {Strings.buttons.addMovie}
            </Button>
          </section>

          <section className={Styles.searchSection}>
            <h3>{Strings.inputs.searchBar.title}</h3>

            <div className={Styles.inputContainer}>
              <input type='text' placeholder={Strings.inputs.searchBar.placeholder} />

              <Button
                tooltip={Strings.buttons.search}
                btnStyle={BUTTON_STYLE.PRIMARY}
                btnSize={BUTTON_SIZE.LARGE}
                btnColor={BUTTON_COLOR.RED}
                onClick={() => {}}
                isDisable={false}
              >
                {Strings.buttons.search}
              </Button>
            </div>
          </section>
        </div>
      </header>
    </>
  );
};

export default Header;
