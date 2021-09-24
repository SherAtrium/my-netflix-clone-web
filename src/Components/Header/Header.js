import headerImg from '../../Resources/HeaderBG.png';
import Styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={Styles.header}>
      <img src={headerImg} alt='Background collage' />

      <div className='container'>
        Logo
      </div>

    </header>
  );
};

export default Header;
