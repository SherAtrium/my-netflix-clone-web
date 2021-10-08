import PropTypes from 'prop-types';

import Styles from './CustomInput.module.scss';

const AVAILABLE_INPUT_TYPES = {
  TEXT: 'text',
  NUMBER: 'number',
};

const CustomInput = ({
  title = '',
  type = AVAILABLE_INPUT_TYPES.TEXT,
  placeholder = '',
  value = '',
  onChange = () => {},
}) => {
  return (
    <div>
      <span className={Styles.title}>{title}</span>

      <input type={type} placeholder={placeholder} value={value} onChange={onChange} />
    </div>
  );
};

CustomInput.propTypes = {
  title: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export { CustomInput, AVAILABLE_INPUT_TYPES };
