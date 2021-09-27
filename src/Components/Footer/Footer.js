import Logotype from '../Logotype/Logotype';
import Styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={Styles.footer}>
      <Logotype />
    </footer>
  );
};

export default Footer;
