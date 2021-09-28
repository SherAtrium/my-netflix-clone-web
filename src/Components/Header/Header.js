import Logotype from '../Logotype/Logotype';

import { Button, BUTTON_SIZE, BUTTON_STYLE } from '../Button/Button';
import Strings from '../../Utils/Strings';
import headerImg from '../../Resources/HeaderBG.png';

import Styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={Styles.header}>
      <img src={headerImg} alt='Background collage' />

      <div className='container'>
        <section className={Styles['section-1']}>
          <Logotype animated />

          <Button
            tooltip={Strings.buttons.addMovie}
            btnStyle={BUTTON_STYLE.TRANSPARENT}
            onClick={() => {}}
            isDisable={false}
          >
            {Strings.buttons.addMovie}
          </Button>
        </section>

        <section className={Styles['section-2']}>
          <h3>{Strings.inputs.searchBar.title}</h3>

          <div className={Styles.inputContainer}>
            <input type='text' placeholder={Strings.inputs.searchBar.placeholder} />

            <Button
              tooltip={Strings.buttons.search}
              btnSize={BUTTON_SIZE.LARGE}
              btnStyle={BUTTON_STYLE.RED}
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
