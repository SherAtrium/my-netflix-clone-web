import PropTypes from 'prop-types';

import './Button.scss';

const Button = ({ onClick, setClass, children, isDisable, tooltip = '' }) => {
  return (
    <button
      type='button'
      className={`button ${setClass}`}
      onClick={(...params) => onClick(...params)}
      disabled={isDisable}
      title={tooltip}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  children: null,
  isDisable: false,
  onClick: () => {},
  setClass: '',
  tooltip: '',
};

Button.propTypes = {
  onClick: PropTypes.func,
  setClass: PropTypes.string,
  children: PropTypes.node,
  isDisable: PropTypes.bool,
  tooltip: PropTypes.string,
};

export default Button;
