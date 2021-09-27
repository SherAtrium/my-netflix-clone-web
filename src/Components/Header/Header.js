import Logotype from '../Logotype/Logotype';

import Button from '../Button/Button';
import Strings from '../../Utils/Strings';
import headerImg from '../../Resources/HeaderBG.png';

import Styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={Styles.header}>
      <img src={headerImg} alt='Background collage' />

      <div className='container'>
        <section className={Styles['section-1']}>
          <Logotype />

          <Button
            onClick={() => {}}
            isDisable={false}
            tooltip={Strings.buttons.addMovie}
            setClass='btnMd btnTransparent'
          >
            {Strings.buttons.addMovie}
          </Button>
        </section>

        <section className={Styles['section-2']}>
          <h3>{Strings.inputs.searchBar.title}</h3>

          <div className={Styles.inputContainer}>
            <input
              type='text'
              placeholder={Strings.inputs.searchBar.placeholder}
            />

            <Button
              onClick={() => {}}
              isDisable={false}
              tooltip={Strings.buttons.search}
              setClass='btnLg btnRed'
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
