import PropTypes from 'prop-types';

import Styles from './DatePicker.module.scss';

const DatePicker = ({ title = '', value = '', onChange = () => {} }) => {
  return (
    <div className={Styles.datePicker}>
      <p className={Styles.title}>{title}</p>

      <input type='date' value={value} onChange={e => onChange(e.target.value)} />
    </div>
  );
};

DatePicker.propTypes = {
  title: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default DatePicker;
