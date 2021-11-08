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
    <div className={Styles.customInput}>
      <p className={Styles.title}>{title}</p>

      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={e => onChange(e.target.value)}
      />
    </div>
  );
};

CustomInput.propTypes = {
  type: PropTypes.string,
  title: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export { CustomInput, AVAILABLE_INPUT_TYPES };
