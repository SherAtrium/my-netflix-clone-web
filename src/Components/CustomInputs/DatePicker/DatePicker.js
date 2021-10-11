import PropTypes from 'prop-types';

import Styles from './DatePicker.module.scss';

const DatePicker = ({ title = '' }) => {
  return (
    <div className={Styles.datePicker}>
      <p className={Styles.title}>{title}</p>

      <input type='date' />
    </div>
  );
};

DatePicker.propTypes = {
  title: PropTypes.string,
};

export default DatePicker;
