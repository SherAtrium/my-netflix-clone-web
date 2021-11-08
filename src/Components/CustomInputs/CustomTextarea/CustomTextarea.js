import PropTypes from 'prop-types';

import Styles from './CustomTextarea.module.scss';

const CustomTextarea = ({ title = '', value = '', placeholder = '', onChangeValue = () => {} }) => {
  return (
    <div className={Styles.CustomTextarea}>
      <p className={Styles.title}>{title}</p>

      <textarea placeholder={placeholder} value={value} onChange={onChangeValue} />
    </div>
  );
};

CustomTextarea.propTypes = {
  title: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChangeValue: PropTypes.func,
};

export default CustomTextarea;
