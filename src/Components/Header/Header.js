import Logotype from '../Logotype/Logotype';

import headerImg from '../../Resources/HeaderBG.png';

import Styles from './Header.module.scss';
import Button from '../Button/Button';

const Header = () => {
  return (
    <header className={Styles.header}>
      <img src={headerImg} alt='Background collage' />

      <div className='container'>
        <Logotype />
        <Button
          onClick={() => {}}
          isDisable={false}
          tooltip='Add Movie'
          setClass='btnMd'
        >
          + Add movie
        </Button>
        <Button
          onClick={() => {}}
          isDisable={false}
          tooltip='Add Movie'
          setClass='btnLg'
        >
          + Add movie
        </Button>
        <Button
          onClick={() => {}}
          isDisable={false}
          tooltip='Add Movie'
          setClass='btnMd'
        >
          + Add movie
        </Button>
      </div>
    </header>
  );
};

export default Header;
