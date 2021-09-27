import PropTypes from 'prop-types';
import Strings from '../../Utils/Strings';
import Styles from './Logotype.module.scss';

const Logotype = ({ animated }) => (
  <p className={`${Styles.logo} ${animated ? Styles.animated : ''}`}>
    <strong>{Strings.logotype.firstPart}</strong>
    {Strings.logotype.secondPart}
  </p>
);

Logotype.defaultProps = {
  animated: false,
};

Logotype.propTypes = {
  animated: PropTypes.bool,
};

export default Logotype;
