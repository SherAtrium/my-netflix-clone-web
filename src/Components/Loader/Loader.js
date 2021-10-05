import PropTypes from 'prop-types';
import Styles from './Loader.module.scss';

const Loader = ({ loading = true }) => {
  return loading ? <div className={Styles.loader} /> : null;
};

Loader.propTypes = {
  loading: PropTypes.bool,
};

export default Loader;
