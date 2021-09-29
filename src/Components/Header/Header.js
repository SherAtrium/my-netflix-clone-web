import Logotype from '../Logotype/Logotype';

import { Button, BUTTON_COLOR, BUTTON_SIZE, BUTTON_STYLE } from '../Button/Button';
import Strings from '../../Utils/Strings';
import headerImg from '../../Resources/HeaderBG.png';

import Styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={Styles.header}>
      <img src={headerImg} alt='Background collage' />

      <div className='container'>
        <section className={Styles.topSection}>
          <Logotype animated />

          <Button
            tooltip={Strings.buttons.addMovie}
            btnColor={BUTTON_COLOR.TRANSPARENT}
            btnStyle={BUTTON_STYLE.COMMON}
            btnSize={BUTTON_SIZE.MIDDLE}
            onClick={() => {}}
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
              btnStyle={BUTTON_STYLE.COMMON}
              btnColor={BUTTON_COLOR.RED}
              btnSize={BUTTON_SIZE.LARGE}
              onClick={() => {}}
              isDisable={false}
            >
              {Strings.buttons.search}
            </Button>
          </div>
        </section>
      </div>
    </header>
  );
};

export default Header;
