import Strings from '../../Utils/Strings';
import Styles from './Logotype.module.scss';

const Logotype = () => (
  <p className={Styles.logo}>
    <strong>{Strings.logotype.firstPart}</strong>
    {Strings.logotype.secondPart}
  </p>
);

export default Logotype;
